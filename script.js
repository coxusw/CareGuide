// ======= Species database =======
// Put all images in /images and make sure filenames match EXACTLY (case + spaces).

const SPECIES = [
  {
    id: "rubber-ducky",
    name: "Rubber Ducky",
    scientific: "Cubaris sp.",
    difficulty: "Advanced",
    origin: "Thailand (often kept as high-humidity Cubaris)",
    humidity: "75–90% with a clear moisture gradient",
    temp: "68–76°F",
    diet: ["Leaf litter (hardwood)", "Decaying hardwood", "High-quality isopod chow", "Occasional protein", "Calcium source"],
    enclosure: "Deeper substrate preferred. Keep a humid side (moss) and a drier side (leaf litter/wood) so they can self-regulate.",
    breeding: "Slow to moderate. Stability matters more than ‘perfect’ numbers.",
    issues: ["Crashes from overly wet substrate", "Mold bloom from excess food", "Poor ventilation + saturated soil"],
    notes: "Sensitive to swings. Prioritize stability, deep leaf litter, and consistent access to decaying wood + calcium.",
    photos: [
      { src: "images/Rubber Ducky.jpeg", caption: "Rubber Ducky (Cubaris sp.)." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "pineapple-spikey",
    name: "Pineapple Spikey",
    scientific: "Cubaris sp. (trade name)",
    difficulty: "Moderate",
    origin: "Southeast Asia (commonly sold as a Cubaris variety)",
    humidity: "70–85% with gradient",
    temp: "70–78°F",
    diet: ["Leaf litter", "Rotting hardwood", "Veg (small amounts)", "Protein 1–2x/week", "Calcium"],
    enclosure: "Humidity gradient + good ventilation. Cork bark and wood pieces encourage surface activity.",
    breeding: "Moderate (varies by line).",
    issues: ["Too dry → inactivity & poor reproduction", "Too wet → die-offs"],
    notes: "Treat like a humidity-loving Cubaris. Give lots of wood and leaf litter.",
    photos: [
      { src: "images/PineApple Spikey.jpeg", caption: "Pineapple Spikey (photo 1)." },
      { src: "images/PineApple Spiky isopod.png", caption: "Pineapple Spikey (photo 2)." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "powder-orange",
    name: "Powder Orange",
    scientific: "Porcellionides pruinosus",
    difficulty: "Easy",
    origin: "Mediterranean region; widely established",
    humidity: "50–70% with gradient (tolerant)",
    temp: "65–82°F",
    diet: ["Leaf litter", "Veg scraps", "Fish flakes", "Isopod chow", "Calcium"],
    enclosure: "Hardy. Provide dry side + moist side. They do well with moderate ventilation.",
    breeding: "Fast. Great cleanup crew.",
    issues: ["Overpopulation if fed heavy protein", "Mites if enclosure stays too wet/dirty"],
    notes: "One of the best beginner species and bioactive workers.",
    photos: [
      { src: "images/Powder Orange.jpeg", caption: "Powder Orange (Porcellionides pruinosus)." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "orange-cream",
    name: "Orange Cream",
    scientific: "Porcellionides pruinosus (morph)",
    difficulty: "Easy",
    origin: "Captive-bred morph",
    humidity: "50–70% with gradient",
    temp: "65–82°F",
    diet: ["Leaf litter", "Veg", "Occasional protein", "Calcium"],
    enclosure: "Same as Powder Orange; keep a moisture gradient.",
    breeding: "Fast.",
    issues: ["Overfeeding protein → boom/bust population swings"],
    notes: "Care is identical to other P. pruinosus morphs.",
    photos: [
      { src: "images/Orange Cream isopod.png", caption: "Orange Cream morph." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "oreo-crumble",
    name: "Oreo Crumble",
    scientific: "Porcellio laevis (common trade association)",
    difficulty: "Easy",
    origin: "Europe (species group widely kept)",
    humidity: "60–75% with gradient",
    temp: "65–80°F",
    diet: ["Leaf litter", "Rotting wood", "Veg", "Protein 1–2x/week", "Calcium"],
    enclosure: "Provide hides (cork bark) and a moist moss corner.",
    breeding: "Fast.",
    issues: ["Protein-heavy diet → explosive growth", "Too wet → ammonia smells/mold"],
    notes: "Hardy, active, and forgiving.",
    photos: [
      { src: "images/Oreo Crumble 2.jpeg", caption: "Oreo Crumble." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "red-panda",
    name: "Red Panda",
    scientific: "Cubaris sp.",
    difficulty: "Moderate",
    origin: "Thailand (trade name)",
    humidity: "70–85% with gradient",
    temp: "68–76°F",
    diet: ["Leaf litter", "Hardwood", "Veg (sparingly)", "Protein 1x/week", "Calcium"],
    enclosure: "Humidity gradient + hides. Avoid letting the whole bin get saturated.",
    breeding: "Moderate (line-dependent).",
    issues: ["Too wet = losses", "Too dry = stalled colony"],
    notes: "Treat as a humidity-loving Cubaris. Don’t over-mist.",
    photos: [
      { src: "images/Red Panda 2.jpeg", caption: "Red Panda (trade name)." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "white-zebra",
    name: "White Zebra",
    scientific: "Armadillidium maculatum (trade association)",
    difficulty: "Easy",
    origin: "Southern Europe",
    humidity: "55–75% with gradient (likes it on the drier side overall)",
    temp: "65–80°F",
    diet: ["Leaf litter", "Veg", "Occasional protein", "Calcium (important)"],
    enclosure: "Give a dry side with lots of leaf litter/wood, plus a humid moss corner.",
    breeding: "Moderate to fast once established.",
    issues: ["Too wet substrate → losses", "Low calcium → weak molts"],
    notes: "Often does best with more ventilation than Cubaris types.",
    photos: [
      { src: "images/High White Zebra isopod.png", caption: "High White Zebra." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "yellow-zebra",
    name: "Yellow Zebra",
    scientific: "Armadillidium maculatum (morph)",
    difficulty: "Easy",
    origin: "Captive morph of A. maculatum",
    humidity: "55–75% with gradient (avoid constant wet)",
    temp: "65–80°F",
    diet: ["Leaf litter", "Veg", "Protein occasionally", "Calcium"],
    enclosure: "Same as White Zebra — drier overall with a humid corner.",
    breeding: "Moderate to fast.",
    issues: ["Too wet → die-offs", "No calcium → molting problems"],
    notes: "Care matches White Zebra.",
    photos: [
      { src: "images/Yellow Zebra isopod.png", caption: "Yellow Zebra." },
    ],
    updated: "2026-02-22",
  },

  // Gestroi (Gold Spot) — you provided 2 images, so we show both.
  {
    id: "gestroi-gold-spot",
    name: "Gestroi Gold Spot",
    scientific: "Armadillidium gestroi (line/morph)",
    difficulty: "Easy",
    origin: "Mediterranean region (species), line captive",
    humidity: "55–75% with gradient (drier overall than Cubaris)",
    temp: "68–82°F",
    diet: ["Leaf litter", "Rotting wood", "Veg", "Occasional protein", "Calcium"],
    enclosure: "Ventilation + gradient. They appreciate leaf litter and cork hides.",
    breeding: "Fast once established.",
    issues: ["Staying too wet", "Overcrowding without fresh leaf litter"],
    notes: "Very hardy ‘pill’ type. Calcium source is important.",
    photos: [
      { src: "images/Gestroi.jpeg", caption: "Gestroi (photo 1)." },
      { src: "images/Gestroi isopod.png", caption: "Gestroi (photo 2)." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "dairy-cow",
    name: "Dairy Cow",
    scientific: "Porcellio laevis (morph)",
    difficulty: "Easy",
    origin: "Captive-bred morph",
    humidity: "60–75% with gradient",
    temp: "65–80°F",
    diet: ["Leaf litter", "Rotting wood", "Veg", "Protein 1–2x/week", "Calcium"],
    enclosure: "Provide hides and a moist corner; keep a gradient (not swampy).",
    breeding: "Fast; prolific once established.",
    issues: ["Overpopulation", "Too wet substrate → odor/mold"],
    notes: "Hardy beginner morph, great eater and reproducer.",
    photos: [
      { src: "images/Dairy Cow.png", caption: "Dairy Cow morph." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "temperate-springtails",
    name: "Temperate Springtails",
    scientific: "Collembola (often Folsomia candida cultures)",
    difficulty: "Very easy",
    origin: "Worldwide",
    humidity: "70–100% (depending on culture medium)",
    temp: "60–80°F",
    diet: ["Brewer’s yeast", "Fish flakes (tiny amounts)", "Mold/organics"],
    enclosure: "Culture on charcoal, clay, or bioactive substrate. Keep moist but not anaerobic.",
    breeding: "Fast; population responds to feeding + moisture.",
    issues: ["Overfeeding → mold explosion", "Dry-out → die-off"],
    notes: "Excellent cleanup crew; add to bioactives and refresh periodically.",
    photos: [
      { src: "images/SpringTail Culture.png", caption: "Temperate springtail culture." },
    ],
    updated: "2026-02-22",
  },
];

// ======= UI wiring =======
const els = {
  chipContainer: document.getElementById("chipContainer"),
  cardList: document.getElementById("cardList"),
  searchInput: document.getElementById("searchInput"),
  resultCount: document.getElementById("resultCount"),

  emptyState: document.getElementById("emptyState"),
  detailWrap: document.getElementById("detail"),

  speciesName: document.getElementById("speciesName"),
  scientificName: document.getElementById("scientificName"),
  difficultyBadge: document.getElementById("difficultyBadge"),
  lastUpdated: document.getElementById("lastUpdated"),

  speciesImage: document.getElementById("speciesImage"),
  photoCaption: document.getElementById("photoCaption"),
  quickStats: document.getElementById("quickStats"),

  overview: document.getElementById("overview"),
  enclosure: document.getElementById("enclosure"),
  feeding: document.getElementById("feeding"),
  breeding: document.getElementById("breeding"),
  issues: document.getElementById("issues"),

  copyLinkBtn: document.getElementById("copyLinkBtn"),
  downloadTemplateBtn: document.getElementById("downloadTemplateBtn"),
  year: document.getElementById("year"),
};

if (els.year) els.year.textContent = new Date().getFullYear();

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return "Updated: " + d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function difficultyClass(diff) {
  const d = (diff || "").toLowerCase();
  if (d.includes("very")) return "easy";
  if (d.includes("easy")) return "easy";
  if (d.includes("moderate")) return "moderate";
  if (d.includes("advanced")) return "advanced";
  return "";
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[m]));
}

function firstPhotoSrc(s) {
  const p = s.photos?.[0]?.src;
  return p || "";
}

function renderList(items) {
  // chips
  els.chipContainer.innerHTML = "";
  items.forEach(s => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = s.name;
    b.dataset.id = s.id;
    b.onclick = () => selectSpecies(s.id, true);
    els.chipContainer.appendChild(b);
  });

  // cards
  els.cardList.innerHTML = "";
  items.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = s.id;
    card.onclick = () => selectSpecies(s.id, true);

    card.innerHTML = `
      <img class="thumb" src="${escapeHtml(firstPhotoSrc(s))}" alt="">
      <div>
        <h4>${escapeHtml(s.name)}</h4>
        <div class="sub">${escapeHtml(s.scientific || "")} • ${escapeHtml(s.difficulty || "")}</div>
      </div>
    `;
    els.cardList.appendChild(card);
  });

  els.resultCount.textContent = `${items.length} shown`;
}

function setActiveChip(id) {
  document.querySelectorAll(".chip").forEach(ch => {
    ch.classList.toggle("active", ch.dataset.id === id);
  });
}

function renderQuickStats(s) {
  const stats = [
    { k: "Origin", v: s.origin },
    { k: "Humidity", v: s.humidity },
    { k: "Temperature", v: s.temp },
  ];

  els.quickStats.innerHTML = stats.map(x => `
    <div class="stat">
      <div class="k">${escapeHtml(x.k)}</div>
      <div class="v">${escapeHtml(x.v || "—")}</div>
    </div>
  `).join("");
}

function renderBullets(arr) {
  if (!arr?.length) return "<p class='muted'>—</p>";
  return `<ul>${arr.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
}

function ensureThumbBar() {
  // Create a thumbnail bar under the main image if it doesn't exist
  let bar = document.getElementById("thumbBar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "thumbBar";
    // inline styles so you don't have to edit CSS
    bar.style.display = "flex";
    bar.style.gap = "8px";
    bar.style.padding = "10px 12px";
    bar.style.flexWrap = "wrap";
    bar.style.borderTop = "1px solid rgba(255,255,255,0.12)";
    // Insert after caption (caption exists inside photo-card)
    if (els.photoCaption && els.photoCaption.parentElement) {
      els.photoCaption.parentElement.appendChild(bar);
    }
  }
  return bar;
}

function setMainPhoto(photo) {
  els.speciesImage.src = photo?.src || "";
  els.speciesImage.alt = els.speciesName.textContent || "";
  els.photoCaption.textContent = photo?.caption || "";
}

function renderThumbnails(s) {
  const bar = ensureThumbBar();
  bar.innerHTML = "";

  const photos = s.photos || [];
  if (photos.length <= 1) {
    bar.style.display = "none";
    return;
  }

  bar.style.display = "flex";

  photos.forEach((p, idx) => {
    const t = document.createElement("img");
    t.src = p.src;
    t.alt = `${s.name} thumbnail ${idx + 1}`;
    t.title = "Click to view";
    t.style.width = "64px";
    t.style.height = "46px";
    t.style.objectFit = "cover";
    t.style.borderRadius = "10px";
    t.style.cursor = "pointer";
    t.style.border = "1px solid rgba(255,255,255,0.12)";
    t.style.opacity = idx === 0 ? "1" : "0.75";

    t.onclick = () => {
      setMainPhoto(p);
      // highlight active thumb
      [...bar.querySelectorAll("img")].forEach(img => img.style.opacity = "0.75");
      t.style.opacity = "1";
    };

    bar.appendChild(t);
  });
}

function selectSpecies(id, updateHash) {
  const s = SPECIES.find(x => x.id === id);
  if (!s) return;

  els.emptyState.hidden = true;
  els.detailWrap.hidden = false;

  els.speciesName.textContent = s.name;
  els.scientificName.textContent = s.scientific ? `• ${s.scientific}` : "";
  els.lastUpdated.textContent = s.updated ? `• ${formatDate(s.updated)}` : "";

  els.difficultyBadge.textContent = s.difficulty || "";
  els.difficultyBadge.className = `badge ${difficultyClass(s.difficulty)}`;

  // main photo defaults to first, with thumbnails if multiple
  const first = s.photos?.[0] || { src: "", caption: "" };
  setMainPhoto(first);
  renderThumbnails(s);

  renderQuickStats(s);

  els.overview.innerHTML = `<p>${escapeHtml(s.notes || "")}</p>`;
  els.enclosure.innerHTML = `<p>${escapeHtml(s.enclosure || "")}</p>`;
  els.feeding.innerHTML = `<p><strong>Staples:</strong></p>${renderBullets(s.diet)}`;
  els.breeding.innerHTML = `<p>${escapeHtml(s.breeding || "—")}</p>`;
  els.issues.innerHTML = renderBullets(s.issues);

  setActiveChip(id);

  // highlight selected card
  document.querySelectorAll(".card").forEach(c => {
    c.style.outline = c.dataset.id === id ? "2px solid rgba(65,195,106,0.55)" : "none";
  });

  if (updateHash) location.hash = id;
}

function applySearch() {
  const q = (els.searchInput.value || "").trim().toLowerCase();

  const filtered = SPECIES.filter(s => {
    const hay = [
      s.name, s.scientific, s.origin, s.difficulty, s.humidity, s.temp,
      ...(s.diet || []),
      ...(s.issues || []),
      s.notes, s.enclosure, s.breeding
    ].join(" ").toLowerCase();
    return hay.includes(q);
  });

  renderList(filtered);
}

els.searchInput.addEventListener("input", applySearch);

els.copyLinkBtn.addEventListener("click", async () => {
  const id = location.hash?.replace("#", "");
  const url = `${location.origin}${location.pathname}#${id || ""}`;
  try {
    await navigator.clipboard.writeText(url);
    els.copyLinkBtn.textContent = "Copied!";
    setTimeout(() => els.copyLinkBtn.textContent = "Copy link", 900);
  } catch (e) {
    alert("Could not copy link. You can manually copy the address bar URL.");
  }
});

els.downloadTemplateBtn.addEventListener("click", async () => {
  const template = `
{
  id: "new-species-id",
  name: "New Species Name",
  scientific: "Genus species / trade",
  difficulty: "Easy | Moderate | Advanced",
  origin: "",
  humidity: "",
  temp: "",
  diet: ["Leaf litter", "Wood", "Calcium"],
  enclosure: "",
  breeding: "",
  issues: [""],
  notes: "",
  photos: [
    { src: "images/new-species-1.jpg", caption: "Photo 1" },
    { src: "images/new-species-2.jpg", caption: "Photo 2" },
  ],
  updated: "${new Date().toISOString().slice(0, 10)}",
},
`.trim();

  try {
    await navigator.clipboard.writeText(template);
    els.downloadTemplateBtn.textContent = "Template copied!";
    setTimeout(() => els.downloadTemplateBtn.textContent = "Copy template block", 1100);
  } catch (e) {
    alert("Could not copy template. You can copy it from script.js.");
  }
});

// Initial render
renderList(SPECIES);

// Deep link support
function loadFromHash() {
  const id = (location.hash || "").replace("#", "");
  if (!id) {
    els.emptyState.hidden = false;
    els.detailWrap.hidden = true;
    setActiveChip(null);
    // hide thumb bar if present
    const bar = document.getElementById("thumbBar");
    if (bar) bar.style.display = "none";
    return;
  }
  selectSpecies(id, false);
}
window.addEventListener("hashchange", loadFromHash);
loadFromHash();
