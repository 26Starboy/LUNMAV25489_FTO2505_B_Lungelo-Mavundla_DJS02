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
