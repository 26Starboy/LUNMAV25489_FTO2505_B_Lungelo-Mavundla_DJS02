// ----- data.js -----
// All arrays are defined as global vars for compatibility with the non-module app

var podcasts = [
  {
    id: "10716",
    title: "Something Was Wrong",
    description:
      "Something Was Wrong is an Iris Award-winning true-crime docuseries about discovery, trauma, and recovery from shocking life events and abusive relationships.",
    seasons: 14,
    image:
      "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
    genres: [1, 2],
    updated: "2022-11-03T07:00:00.000Z",
  },
  {
    id: "5675",
    title: "This Is Actually Happening",
    description:
      "What if your mother left to follow a cult… or you woke up in a morgue… or if your boat got caught in a storm and began to sink -- what would you do? This is Actually Happening brings you extraordinary true stories of life-changing events told by the people who lived them.",
    seasons: 12,
    image:
      "https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png",
    genres: [2],
    updated: "2022-11-01T10:00:00.000Z",
  },
  {
    id: "5279",
    title: "American History Tellers",
    description:
      "The Cold War, Prohibition, the Gold Rush, the Space Race. Every part of your life - the words you speak, the ideas you share - can be traced to our history.",
    seasons: 51,
    image:
      "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png",
    genres: [3],
    updated: "2022-11-02T07:01:00.000Z",
  },
  {
    id: "10539",
    title: "Scamfluencers",
    description:
      "Scamfluencers explores deception in social media, finance, health, and wellness—how influencers exploit trust, and what happens when their facades fall away.",
    seasons: 3,
    image:
      "https://content.production.cdn.art19.com/images/19/f4/f9/af/19f4f9af-4a18-44e1-a622-726f43feb79d/539a50f79529628dbde7aa116778056619b802bfa0247cb739db907085e0b595a5521efc78faa831ebddc235d69beb27e1e36fd51f825bc888f0c11cccbd9cd8.png",
    genres: [2],
    updated: "2022-10-24T07:01:00.000Z",
  },
  {
    id: "9177",
    title: "Killer Psyche",
    description:
      "Retired FBI agent Candice DeLong explores why murderers and criminals committed their acts, revealing profiling techniques and psychological methods.",
    seasons: 2,
    image:
      "https://content.production.cdn.art19.com/images/68/4e/03/af/684e03af-29c5-4a35-b84a-d929f114caee/4f60eec3fabd62251d0cdbd1af11b79c43fb1465dbc5ec3371328fbddadee597e9f115c31b079e20266648ee07a80a93c01cecdb81ab3545d872393997594ef3.png",
    updated: "2022-11-01T07:03:00.000Z",
  },
  {
    id: "6807",
    title: "Even the Rich",
    description:
      "Even the Rich pulls back the curtain on family dynasties, celebrity culture, and the oddities of the wealthy.",
    seasons: 33,
    image:
      "https://content.production.cdn.art19.com/images/c3/55/d2/da/c355d2da-f845-47df-a4e6-22b70a5082bb/c290fe89d3a699dd5c316f5f4cfe2ca942183cef5d6ac4fc2d7d6df296690c9e7183f79422dcb0b37af7c7e7e59de0e36cddd3b01500bf066a470614c9a0af6d.png",
    genres: [4, 5, 3],
    updated: "2022-11-01T07:08:00.000Z",
  },
  {
    id: "8514",
    title: "Against The Odds",
    description:
      "Against The Odds shares immersive survival stories from around the world, told with detail and heart.",
    seasons: 19,
    image:
      "https://content.production.cdn.art19.com/images/a3/77/2c/e4/a3772ce4-34f7-431d-bf80-968f555b7003/6c099d5ec76b40bb54e72a75c1dcbc44c5c13a764114fb5183fe7eecd201619fca37cf3dd029c2fc320fb1a3cfab716d94297cbe7bb32ead208b779579015683.png" ,
    genres: [3],
    updated: "2022-11-01T07:01:00.000Z",
  },
  {
    id: "10276",
    title: "This Podcast Will Kill You",
    description:
      "Each episode covers a disease: history, biology, and context — taught by experts and wrapped in storytelling.",
    seasons: 5,
    image:
      "https://content.production.cdn.art19.com/images/f5/16/e0/99/f516e099-4c64-4737-9fdb-55f4d45a4003/6d14be58e0a54d21128c239dd933e0f3c36ca00f85ea7294cbea91a2b214d2384361c2a765842eef66e8583b2c21302c8fd2b1eb4d32e3805481292d758f20aa.jpeg",
    genres: [1],
    updated: "2022-10-25T07:01:00.000Z",
  },
  {
    id: "8860",
    title: "British Scandal",
    description:
      "British Scandal traces scandals that changed the course of British public life — power, money, and fallouts.",
    seasons: 19,
    image:
      "https://content.production.cdn.art19.com/images/be/95/68/28/be956828-0cc8-4d16-986f-b81142129bd3/bdc59126cd5707aee511313b8e246428364b62229f8243c4deab8f5721425478c9fcb4224cd0369f8001cde85dbe4c3106d31ed914e414a18208a29386e88317.png",
    genres: [2],
    updated: "2022-11-01T23:01:00.000Z",
  },
  {
    id: "5629",
    title: "Tides of History",
    description:
      "Tides of History examines large-scale forces of history — how they shaped societies and continue to shape us.",
    seasons: 5,
    image:
      "https://content.production.cdn.art19.com/images/a4/b7/0e/b1/a4b70eb1-2ba8-4320-ba12-20939a9c0d13/486bc367f5acec6dbb5fdfb84d510a1ed304ba20c6e9c97da0448a62e6d4a1c5b91fb30198437f6d4db969db5f171aa63648545002fbaa81d9fcc422a2e05b9e.jpeg",
    genres: [3],
    updated: "2022-11-03T07:01:00.000Z",
  }
];


var genres = [
  {
    id: 1,
    title: "Personal Growth",
    description:
      "Personal growth podcasts: productivity, mindfulness, self-care.",
    shows: ["10716", "10276", "6756", "10660"],
  },
  {
    id: 2,
    title: "Investigative Journalism",
    description:
      "In-depth reporting and investigations.",
    shows: [
      "10716",
      "5675",
      "10539",
      "9177",
      "8860",
      "5012",
      "9054",
      "7654",
      "8256",
      "8291",
      "5718",
      "5276",
      "5964",
      "6465",
      "5320",
      "6451",
      "5692",
      "6430",
    ],
  },
  {
    id: 3,
    title: "History",
    description:
      "History podcasts covering eras and events.",
    shows: [
      "5279",
      "9177",
      "6807",
      "8514",
      "5629",
      "8364",
      "5964",
      "9041",
      "5702",
      "5320",
      "6717",
      "5968",
      "8760",
    ],
  },
  {
    id: 4,
    title: "Comedy",
    description:
      "Comedy podcasts for laughs.",
    shows: ["6807"],
  },
  {
    id: 5,
    title: "Entertainment",
    description:
      "Entertainment & culture shows.",
    shows: ["6807", "6631", "8256", "6756", "5702", "9620", "10758"],
  },
  {
    id: 6,
    title: "Business",
    description: "Business & entrepreneurship podcasts.",
    shows: ["8364", "6717", "8760"],
  },
];

var seasons = [
  {
    id: "10716",
    seasonDetails: [
      { title: "Season 1", episodes: 10 },
      { title: "Season 2", episodes: 8 },
      { title: "Season 3", episodes: 9 },
      { title: "Season 4", episodes: 7 },
      { title: "Season 5", episodes: 10 },
      { title: "Season 6", episodes: 7 },
      { title: "Season 7", episodes: 6 },
      { title: "Season 8", episodes: 6 },
      { title: "Season 9", episodes: 9 },
      { title: "Season 10", episodes: 10 },
      { title: "Season 11", episodes: 10 },
      { title: "Season 12", episodes: 6 },
      { title: "Season 13", episodes: 10 },
      { title: "Season 14", episodes: 4 },
    ],
  },
  {
    id: "5675",
    seasonDetails: new Array(12).fill(0).map((_, i) => ({ title: `Season ${i + 1}`, episodes: 10 })),
  },
  {
    id: "5279",
    seasonDetails: [
      { title: "The Cold War", episodes: 7 },
      { title: "Prohibition", episodes: 7 },
      { title: "The Age of Jackson", episodes: 7 },
    ],
  },
  {
    id: "10539",
    seasonDetails: [{ title: "Season 1", episodes: 8 }, { title: "Season 2", episodes: 9 }, { title: "Season 3", episodes: 9 }],
  },
  {
    id: "9177",
    seasonDetails: [{ title: "Season 1", episodes: 10 }, { title: "Season 2", episodes: 10 }],
  },
  {
    id: "6807",
    seasonDetails: [{ title: "From Commoner to Royalty", episodes: 5 }, { title: "A Real Life 'Succession' Story", episodes: 6 }],
  },
  {
    id: "8514",
    seasonDetails: [{ title: "Thai Cave Rescue", episodes: 6 }, { title: "Kidnapped in the Desert", episodes: 4 }, { title: "Prisoner of War", episodes: 5 }],
  },
  {
    id: "10276",
    seasonDetails: [{ title: "Season 1", episodes: 10 }, { title: "Season 2", episodes: 10 }, { title: "Season 3", episodes: 10 }],
  },
  {
    id: "8860",
    seasonDetails: [{ title: "The Litvinenko Affair", episodes: 5 }, { title: "The Sexed Up Dossier", episodes: 4 }],
  },
  {
    id: "5629",
    seasonDetails: [{ title: "Rise of the Modern World", episodes: 10 }, { title: "The Later Middle Ages", episodes: 10 }],
  }
];