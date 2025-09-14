// ----- PodcastPreview.js -----
// Web component + App init for the PodcastApp
// This file implements the <podcast-preview> Web Component (Shadow DOM, attributes/properties, event dispatch)
// and app-level glue: filter, sort, search, modal, accessibility and JSDoc for major functions.

/**
 * Format a raw date string into a short human-friendly "Updated..." string.
 * @param {string} raw - ISO date string
 * @returns {string} Human friendly string like "Updated 2 days ago" or "Updated Jan 3"
 */
function formatUpdated(raw) {
  if (!raw) return ''; // if no date provided, return empty string
  const d = new Date(raw); // parse raw string into Date object
  if (isNaN(d)) return raw; // if invalid date, return raw string
  const now = Date.now(); // current timestamp in milliseconds
  const diff = Math.floor((now - d.getTime()) / 1000); // difference in seconds

  // display relative time based on thresholds
  if (diff < 60) return 'Updated just now'; // less than 1 minute
  if (diff < 3600) return `Updated ${Math.floor(diff / 60)}m ago`; // less than 1 hour
  if (diff < 86400) return `Updated ${Math.floor(diff / 3600)}h ago`; // less than 1 day
  if (diff < 7 * 86400) return `Updated ${Math.floor(diff / 86400)} days ago`; // less than a week

  // fallback: show month & day for older updates
  return `Updated ${d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;
}

/**
 * Creates a small inline SVG placeholder data URI for images when an image URL is missing.
 * @param {number} w - width
 * @param {number} h - height
 * @returns {string} data:image/svg+xml;utf8,...
 */
function placeholderDataURI(w = 400, h = 300) {
  // generate a small gradient SVG with text
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#e2e8f0' />
        <stop offset='1' stop-color='#c7d2fe' />
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)' rx='8' ry='8'/>
    <text x='50%' y='50%' font-family='Arial, Helvetica, sans-serif' font-size='20' fill='#374151' dominant-baseline='middle' text-anchor='middle'>Podcast Cover</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg); // encode as data URI
}
/**
 * Debounce utility - returns a debounced version of fn.
 * @param {Function} fn
 * @param {number} wait
 * @returns {Function}
 */
function debounce(fn, wait) {
  let t; // timer
  return function (...a) {
    clearTimeout(t); // clear previous timer
    t = setTimeout(() => fn.apply(this, a), wait); // call fn after delay
  };
}

/**
 * <podcast-preview> Web Component
 * - Accepts attributes/properties: pid/id, title, cover, genres (JSON or CSV), seasons, updated
 * - Encapsulates markup & styles via Shadow DOM
 * - Dispatches "podcast-selected" custom event with detail { id }
 */
class PodcastPreview extends HTMLElement {
  // Observe attributes for reactive updates
  static get observedAttributes() {
    return ['title', 'cover', 'genres', 'seasons', 'updated', 'pid'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // attach shadow DOM
    this._renderShell(); // render static component shell
  }

  _renderShell() {
    // template for shadow DOM
    const tpl = document.createElement('template');
    tpl.innerHTML = `
      <style>
        :host{display:block}
        .card{background:var(--card,#fff);border-radius:10px;overflow:hidden;border:1px solid rgba(0,0,0,0.03);cursor:pointer;transition:transform .15s ease, box-shadow .15s ease}
        .card:hover{transform:translateY(-6px);box-shadow:0 18px 36px rgba(2,6,23,0.06)}
        .cover{height:180px;background:#e9eef2;display:flex;align-items:center;justify-content:center}
        .cover img{width:100%;height:100%;object-fit:cover;display:block}
        .body{padding:14px}
        .title{font-size:16px;margin:0 0 8px;font-weight:600;color:#111827}
        .meta{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        .seasons{color:#6b7280;font-size:13px;display:flex;align-items:center;gap:8px}
        .genre-list{margin-top:8px;display:flex;gap:8px;flex-wrap:wrap}
        .genre-pill{background:var(--pill-bg,#f3f4f6);padding:6px 10px;border-radius:999px;font-size:12px;color:#111827;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.02)}
        .updated{margin-top:12px;color:#6b7280;font-size:13px}
      </style>

      <article class="card" tabindex="0" role="button" aria-pressed="false">
        <div class="cover"><img part="cover" src="" alt="Podcast Cover"></div>
        <div class="body">
          <h3 class="title" part="title"></h3>
          <div class="meta">
            <div class="seasons" part="seasons">🗓️ <span class="season-count"></span></div>
          </div>
          <div class="genre-list" part="genres"></div>
          <div class="updated" part="updated"></div>
        </div>
      </article>
    `;
    this.shadowRoot.appendChild(tpl.content.cloneNode(true)); // attach template
    // store references to elements for later updates
    this._card = this.shadowRoot.querySelector('.card');
    this._img = this.shadowRoot.querySelector('img');
    this._titleEl = this.shadowRoot.querySelector('.title');
    this._seasonsEl = this.shadowRoot.querySelector('.season-count');
    this._genresEl = this.shadowRoot.querySelector('.genre-list');
    this._updatedEl = this.shadowRoot.querySelector('.updated');

    this._onClick = this._onClick.bind(this); // bind click handler
    this._onKey = this._onKey.bind(this); // bind keyboard handler
  }

  connectedCallback() {
    // attach event listeners when component added to DOM
    this._card.addEventListener('click', this._onClick);
    this._card.addEventListener('keydown', this._onKey);
    this._applyAttributes(); // initialize content
  }

  disconnectedCallback() {
    // cleanup event listeners when removed from DOM
    this._card.removeEventListener('click', this._onClick);
    this._card.removeEventListener('keydown', this._onKey);
  }

  attributeChangedCallback(name, oldV, newV) {
    if (oldV === newV) return; // ignore if unchanged
    this._applyAttributes(); // re-render on attribute change
  }

  _applyAttributes() {
    const title = this.getAttribute('title') || '';
    const cover = this.getAttribute('cover') || '';
    const seasons = this.getAttribute('seasons') || '';
    const updated = this.getAttribute('updated') || '';
    const genresRaw = this.getAttribute('genres') || '';

    this._titleEl.textContent = title; // update title
    this._img.src = cover || placeholderDataURI(450, 300); // cover image fallback
    this._img.alt = title ? `${title} cover` : 'Podcast cover';

    // fallback if image fails to load
    this._img.onerror = () => {
      if (!this._img.src || !this._img.src.startsWith('data:')) {
        this._img.src = placeholderDataURI(450, 300);
      }
    };