// Crested Critters • Care Guide (tags + quick stats + do/don't)
// Images live in: assets/images/<filename>

const SPECIES = [
  {
    id: "rubber-ducky",
    name: "Rubber Ducky",
    scientific: "Cubaris sp.",
    difficulty: "Advanced",
    tags: ["Cubaris", "High humidity", "Advanced"],
    origin: "Thailand",
    humidity: "75–90% (stable gradient)",
    temp: "68–76°F",
    staples: ["Leaf litter", "Decaying hardwood", "Calcium always", "Protein 1x/week", "Quality chow"],
    notes: "Sensitive to swings. Prioritize stability, deep leaf litter, and constant access to decaying hardwood + calcium.",
    enclosure: "Deep substrate. Humid moss corner + drier leaf-litter side. Moderate ventilation—avoid stagnant, soaked substrate.",
    do: ["Keep a clear moisture gradient", "Use deep leaf litter + rotting hardwood", "Provide calcium 24/7", "Feed protein lightly"],
    dont: ["Soak the entire substrate", "Overfeed protein", "Seal with no ventilation", "Let humidity/temps swing often"],
    photos: [{ src: "assets/images/Rubber Ducky.jpeg", caption: "Rubber Ducky." }],
    updated: "2026-02-22",
  },

  {
    id: "pineapple-spikey",
    name: "Pineapple Spikey",
    scientific: "Cubaris sp. (trade name)",
    difficulty: "Moderate",
    tags: ["Cubaris", "High humidity", "Moderate"],
    origin: "Southeast Asia",
    humidity: "70–85% (gradient)",
    temp: "70–78°F",
    staples: ["Leaf litter", "Rotting hardwood", "Calcium always", "Protein 1–2x/week"],
    notes: "Treat like a humidity-loving Cubaris. Stability + wood-heavy habitat.",
    enclosure: "Humidity gradient with good airflow. Cork bark and wood pieces help activity and microclimates.",
    do: ["Offer rotting hardwood and hides", "Keep a humid moss pocket", "Ventilate to prevent swamp conditions"],
    dont: ["Let the enclosure dry completely", "Keep it constantly waterlogged", "Overfeed wet foods"],
    photos: [
      { src: "assets/images/PineApple Spikey.jpeg", caption: "Pineapple Spikey (photo 1)." },
      { src: "assets/images/PineApple Spiky isopod.png", caption: "Pineapple Spikey (photo 2)." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "powder-orange",
    name: "Powder Orange",
    scientific: "Porcellionides pruinosus",
    difficulty: "Easy",
    tags: ["Beginner", "Cleanup crew", "Fast breeder", "Moderate humidity"],
    origin: "Mediterranean (widely established)",
    humidity: "50–70% (tolerant gradient)",
    temp: "65–82°F",
    staples: ["Leaf litter", "Veg", "Chow", "Calcium", "Protein occasionally"],
    notes: "Hardy beginner species and excellent bioactive worker. Fast breeding—plan space accordingly.",
    enclosure: "Standard bin with dry side + moist side. Moderate ventilation. Avoid letting everything stay wet.",
    do: ["Keep a dry zone available", "Feed light protein", "Refresh leaf litter often"],
    dont: ["Overfeed protein nonstop", "Let waste build up and stay wet", "Ignore population growth"],
    photos: [{ src: "assets/images/Powder Orange.jpeg", caption: "Powder Orange." }],
    updated: "2026-02-22",
  },

  {
    id: "orange-cream",
    name: "Orange Cream",
    scientific: "Porcellionides pruinosus (morph)",
    difficulty: "Easy",
    tags: ["Beginner", "Cleanup crew", "Fast breeder", "Moderate humidity"],
    origin: "Captive-bred morph",
    humidity: "50–70% (gradient)",
    temp: "65–82°F",
    staples: ["Leaf litter", "Veg", "Calcium", "Protein occasionally"],
    notes: "Care matches other P. pruinosus morphs. Hardy and prolific.",
    enclosure: "Same as Powder Orange. Keep a moisture gradient and ventilation.",
    do: ["Keep gradient (dry + moist)", "Offer calcium 24/7", "Feed protein lightly"],
    dont: ["Keep the whole bin wet", "Overfeed protein causing boom/bust"],
    photos: [{ src: "assets/images/Orange Cream isopod.png", caption: "Orange Cream morph." }],
    updated: "2026-02-22",
  },

  {
    id: "oreo-crumble",
    name: "Oreo Crumble",
    scientific: "Porcellio laevis (trade association)",
    difficulty: "Easy",
    tags: ["Beginner", "Fast breeder", "Protein friendly", "Moderate humidity"],
    origin: "Europe (species group widely kept)",
    humidity: "60–75% (gradient)",
    temp: "65–80°F",
    staples: ["Leaf litter", "Wood", "Calcium", "Protein 1–2x/week", "Veg"],
    notes: "Hardy and active. Will explode in numbers if protein is heavy.",
    enclosure: "Hides + a moist corner. Keep airflow to prevent odor and mold.",
    do: ["Provide hides and wood", "Feed protein 1–2x/week", "Remove uneaten wet foods"],
    dont: ["Overfeed protein daily", "Let substrate go anaerobic (stinky)"],
    photos: [{ src: "assets/images/Oreo Crumble 2.jpeg", caption: "Oreo Crumble." }],
    updated: "2026-02-22",
  },

  {
    id: "red-panda",
    name: "Red Panda",
    scientific: "Cubaris sp. (trade name)",
    difficulty: "Moderate",
    tags: ["Cubaris", "High humidity", "Moderate"],
    origin: "Thailand",
    humidity: "70–85% (stable gradient)",
    temp: "68–76°F",
    staples: ["Leaf litter", "Rotting hardwood", "Calcium always", "Protein 1x/week"],
    notes: "Stability matters. Treat as a humidity-loving Cubaris and avoid over-misting.",
    enclosure: "Humidity gradient + hides. Don’t saturate the full substrate.",
    do: ["Keep a humid corner", "Use deep leaf litter + wood", "Ventilate enough to avoid swamp"],
    dont: ["Mist constantly", "Let conditions swing wildly"],
    photos: [{ src: "assets/images/Red Panda 2.jpeg", caption: "Red Panda." }],
    updated: "2026-02-22",
  },

  {
    id: "white-zebra",
    name: "White Zebra",
    scientific: "Armadillidium maculatum (trade association)",
    difficulty: "Easy",
    tags: ["Armadillidium", "Beginner", "Drier setup", "Moderate breeder"],
    origin: "Southern Europe",
    humidity: "55–75% (drier overall + moist corner)",
    temp: "65–80°F",
    staples: ["Leaf litter", "Wood", "Calcium always", "Veg", "Protein occasionally"],
    notes: "Often does best with more ventilation and a drier overall enclosure than Cubaris types.",
    enclosure: "Drier leaf-litter side + moist moss pocket. Good airflow. Calcium is important for clean molts.",
    do: ["Ventilate well", "Keep it drier overall", "Provide calcium 24/7"],
    dont: ["Keep substrate constantly wet", "Skimp on calcium"],
    photos: [{ src: "assets/images/High White Zebra isopod.png", caption: "High White Zebra." }],
    updated: "2026-02-22",
  },

  {
    id: "yellow-zebra",
    name: "Yellow Zebra",
    scientific: "Armadillidium maculatum (morph)",
    difficulty: "Easy",
    tags: ["Armadillidium", "Beginner", "Drier setup", "Moderate breeder"],
    origin: "Captive morph (A. maculatum)",
    humidity: "55–75% (drier overall + moist corner)",
    temp: "65–80°F",
    staples: ["Leaf litter", "Wood", "Calcium always", "Veg", "Protein occasionally"],
    notes: "Care matches White Zebra. Drier overall with a humid corner works best.",
    enclosure: "Same as White Zebra.",
    do: ["Ventilate well", "Provide calcium 24/7", "Keep a gradient"],
    dont: ["Keep the whole enclosure wet"],
    photos: [{ src: "assets/images/Yellow Zebra isopod.png", caption: "Yellow Zebra." }],
    updated: "2026-02-22",
  },

  {
    id: "gestroi-gold-spot",
    name: "Gestroi Gold Spot",
    scientific: "Armadillidium gestroi (line/morph)",
    difficulty: "Easy",
    tags: ["Armadillidium", "Beginner", "Drier setup", "Fast breeder"],
    origin: "Mediterranean region (species), line captive",
    humidity: "55–75% (ventilated gradient)",
    temp: "68–82°F",
    staples: ["Leaf litter", "Wood", "Calcium always", "Veg", "Protein occasionally"],
    notes: "Very hardy pill-type. Calcium and ventilation are key. Avoid keeping it swampy.",
    enclosure: "Ventilation + gradient. Drier overall than Cubaris; keep a moist corner only.",
    do: ["Keep ventilation up", "Provide a moist corner, not full wet", "Refresh leaf litter regularly"],
    dont: ["Leave it constantly wet", "Let leaf litter run out"],
    photos: [
      { src: "assets/images/Gestroi.jpeg", caption: "Gestroi (photo 1)." },
      { src: "assets/images/Gestroi isopod.png", caption: "Gestroi (photo 2)." },
    ],
    updated: "2026-02-22",
  },

  {
    id: "dairy-cow",
    name: "Dairy Cow",
    scientific: "Porcellio laevis (morph)",
    difficulty: "Easy",
    tags: ["Beginner", "Fast breeder", "Protein friendly", "Cleanup crew"],
    origin: "Captive-bred morph",
    humidity: "60–75% (gradient)",
    temp: "65–80°F",
    staples: ["Leaf litter", "Wood", "Calcium always", "Protein 1–2x/week", "Veg"],
    notes: "Extremely hardy and prolific. Great eaters—manage population and keep leaf litter stocked.",
    enclosure: "Hides + gradient. Keep airflow to avoid odor when colonies get large.",
    do: ["Feed protein 1–2x/week", "Keep plenty of leaf litter", "Give hides and space"],
    dont: ["Let colony overcrowd with no expansion", "Overfeed wet foods and leave them"],
    photos: [{ src: "assets/images/Dairy Cow.png", caption: "Dairy Cow morph." }],
    updated: "2026-02-22",
  },

  {
    id: "temperate-springtails",
    name: "Temperate Springtails",
    scientific: "Collembola (often Folsomia candida)",
    difficulty: "Very easy",
    tags: ["Cleanup crew", "Beginner", "High humidity"],
    origin: "Worldwide",
    humidity: "70–100% (culture-dependent)",
    temp: "60–80°F",
    staples: ["Brewer’s yeast", "Tiny fish flakes", "Organic matter/mold"],
    notes: "Excellent cleanup crew. Keep cultures moist and lightly fed.",
    enclosure: "Culture on charcoal/clay/substrate. Moist, not anaerobic.",
    do: ["Feed tiny amounts", "Keep consistently moist", "Refresh cultures periodically"],
    dont: ["Overfeed and create mold explosions", "Let culture dry out"],
    photos: [{ src: "assets/images/SpringTail Culture.png", caption: "Springtail culture." }],
    updated: "2026-02-22",
  },
];

// ---------- UI ----------
const els = {
  buttonContainer: document.getElementById("buttonContainer"),
  speciesName: document.getElementById("speciesName"),
  speciesImage: document.getElementById("speciesImage"),
  photoCaption: document.getElementById("photoCaption"),
  thumbBar: document.getElementById("thumbBar"),
  quickStats: document.getElementById("quickStats"),
  careInfo: document.getElementById("careInfo"),
  doDont: document.getElementById("doDont"),
  doList: document.getElementById("doList"),
  dontList: document.getElementById("dontList"),
  tagBar: document.getElementById("tagBar"),
  searchInput: document.getElementById("searchInput"),
  year: document.getElementById("year"),
};

els.year.textContent = new Date().getFullYear();

let activeSpeciesId = null;
let activeTags = new Set();

function allTags() {
  const s = new Set();
  SPECIES.forEach(sp => (sp.tags || []).forEach(t => s.add(t)));
  return Array.from(s).sort((a,b)=>a.localeCompare(b));
}

function renderTagBar() {
  els.tagBar.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "tag";
  allBtn.textContent = "All";
  allBtn.onclick = () => {
    activeTags.clear();
    renderTagBar();
    renderButtons();
  };
  if (activeTags.size === 0) allBtn.classList.add("active");
  els.tagBar.appendChild(allBtn);

  allTags().forEach(tag => {
    const b = document.createElement("button");
    b.className = "tag";
    b.textContent = tag;
    if (activeTags.has(tag)) b.classList.add("active");
    b.onclick = () => {
      if (activeTags.has(tag)) activeTags.delete(tag);
      else activeTags.add(tag);
      renderTagBar();
      renderButtons();
    };
    els.tagBar.appendChild(b);
  });
}

function matchesFilters(sp) {
  const q = (els.searchInput.value || "").trim().toLowerCase();

  const hay = [
    sp.name, sp.scientific, sp.origin, sp.difficulty, sp.humidity, sp.temp,
    ...(sp.tags || []),
    ...(sp.staples || []),
    sp.notes, sp.enclosure
  ].join(" ").toLowerCase();

  const matchesSearch = q === "" || hay.includes(q);

  const matchesTags =
    activeTags.size === 0 ||
    (sp.tags || []).some(t => activeTags.has(t));

  return matchesSearch && matchesTags;
}

function setMainPhoto(sp, idx) {
  const p = sp.photos?.[idx] || sp.photos?.[0];
  if (!p) return;

  els.speciesImage.src = p.src;
  els.speciesImage.alt = sp.name;
  els.speciesImage.style.display = "block";
  els.photoCaption.textContent = p.caption || "";

  // thumb highlight
  const thumbs = els.thumbBar.querySelectorAll("img");
  thumbs.forEach((img, i) => img.classList.toggle("active", i === idx));
}

function renderThumbs(sp) {
  const photos = sp.photos || [];
  if (photos.length <= 1) {
    els.thumbBar.style.display = "none";
    els.thumbBar.innerHTML = "";
    return;
  }

  els.thumbBar.style.display = "flex";
  els.thumbBar.innerHTML = "";
  photos.forEach((p, idx) => {
    const img = document.createElement("img");
    img.className = "thumb" + (idx === 0 ? " active" : "");
    img.src = p.src;
    img.alt = `${sp.name} thumbnail ${idx + 1}`;
    img.onclick = () => setMainPhoto(sp, idx);
    els.thumbBar.appendChild(img);
  });
}

function renderQuickStats(sp) {
  const items = [
    ["Difficulty", sp.difficulty || "—"],
    ["Humidity", sp.humidity || "—"],
    ["Temperature", sp.temp || "—"],
    ["Origin", sp.origin || "—"],
  ];

  els.quickStats.innerHTML = items.map(([k,v]) => `
    <div class="stat">
      <div class="k">${k}</div>
      <div class="v">${v}</div>
    </div>
  `).join("");
}

function renderDoDont(sp) {
  const hasDo = (sp.do || []).length > 0;
  const hasDont = (sp.dont || []).length > 0;

  if (!hasDo && !hasDont) {
    els.doDont.style.display = "none";
    return;
  }

  els.doDont.style.display = "block";
  els.doList.innerHTML = (sp.do || []).map(x => `<li>${x}</li>`).join("");
  els.dontList.innerHTML = (sp.dont || []).map(x => `<li>${x}</li>`).join("");
}

function renderCareInfo(sp) {
  const stapleLines = (sp.staples || []).map(x => `• ${x}`).join("\n");

  els.careInfo.textContent =
`Scientific name: ${sp.scientific || "—"}
Tags: ${(sp.tags || []).join(", ") || "—"}
Last updated: ${sp.updated || "—"}

Setup:
${sp.enclosure || "—"}

Feeding staples:
${stapleLines || "—"}

Notes:
${sp.notes || "—"}
`;
}

function selectSpecies(id) {
  const sp = SPECIES.find(x => x.id === id);
  if (!sp) return;

  activeSpeciesId = id;
  els.speciesName.textContent = sp.name;

  renderQuickStats(sp);
  renderCareInfo(sp);
  renderDoDont(sp);

  setMainPhoto(sp, 0);
  renderThumbs(sp);

  // highlight active button
  document.querySelectorAll(".specBtn").forEach(b => {
    b.classList.toggle("active", b.dataset.id === id);
  });
}

function renderButtons() {
  els.buttonContainer.innerHTML = "";

  const visible = SPECIES.filter(matchesFilters);

  visible.forEach(sp => {
    const b = document.createElement("button");
    b.className = "specBtn";
    b.textContent = sp.name;
    b.dataset.id = sp.id;
    b.onclick = () => selectSpecies(sp.id);
    els.buttonContainer.appendChild(b);
  });

  // If current selection is filtered out, clear selection
  if (activeSpeciesId && !visible.some(s => s.id === activeSpeciesId)) {
    activeSpeciesId = null;
    els.speciesName.textContent = "Select a species above";
    els.speciesImage.style.display = "none";
    els.photoCaption.textContent = "";
    els.thumbBar.style.display = "none";
    els.quickStats.innerHTML = "";
    els.careInfo.textContent = "";
    els.doDont.style.display = "none";
  }

  // If nothing selected yet, auto-select first visible
  if (!activeSpeciesId && visible.length > 0) {
    selectSpecies(visible[0].id);
  }
}

els.searchInput.addEventListener("input", () => renderButtons());

// Init
renderTagBar();
renderButtons();
