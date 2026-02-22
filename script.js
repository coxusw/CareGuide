// ======= Species database =======
// Edit / expand these objects to update the site.
// Images should be stored in /images and referenced here.

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
    photo: { src: "images/rubber-ducky.jpg", caption: "Add your own photo for best accuracy." },
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
    photo: { src: "images/pineapple-spikey.jpg", caption: "Trade names vary—use your own picture for ID." },
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
    photo: { src: "images/powder-orange.jpg", caption: "Fast breeders—plan enclosure space accordingly." },
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
    photo: { src: "images/orange-cream.jpg", caption: "Morph care matches Powder Orange." },
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
    photo: { src: "images/oreo-crumble.jpg", caption: "Active surface species with food present." },
    updated: "2026-02-22",
  },

  {
    id: "black-panda",
    name: "Black Panda",
    scientific: "Cubaris sp.",
    difficulty: "Moderate–Advanced",
    origin: "Thailand (trade name, commonly humidity-loving Cubaris)",
    humidity: "70–85% with stable gradient",
    temp: "68–76°F",
    diet: ["Leaf litter", "Decaying hardwood", "Isopod chow", "Occasional protein", "Calcium"],
    enclosure: "Deep substrate and lots of wood. Keep one side humid with sphagnum/moss.",
    breeding: "Slow to moderate.",
    issues: ["Swings in humidity/temperature", "Soggy substrate + poor ventilation"],
    notes: "Stability + wood-heavy diet are key.",
    photo: { src: "images/black-panda.jpg", caption: "Use your own photo for consistency." },
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
    photo: { src: "images/red-panda.jpg", caption: "Trade names vary by seller." },
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
    photo: { src: "images/white-zebra.jpg", caption: "Higher ventilation + gradient works well." },
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
    photo: { src: "images/yellow-zebra.jpg", caption: "Keep a drier overall enclosure." },
    updated: "2026-02-22",
  },

  {
    id: "gestroi-gold-spot",
    name: "Gestroi Gold Spot",
    scientific: "Armadillidium gestroi (morph / line)",
    difficulty: "Easy",
    origin: "Mediterranean region (species), morph/line captive",
    humidity: "55–75% with gradient (drier overall than Cubaris)",
    temp: "68–82°F",
    diet: ["Leaf litter", "Rotting wood", "Veg", "Occasional protein", "Calcium"],
    enclosure: "Ventilation + gradient. They appreciate leaf litter and cork hides.",
    breeding: "Fast once established.",
    issues: ["Staying too wet", "Overcrowding without fresh leaf litter"],
    notes: "Very hardy ‘pill’ type. Calcium source is important.",
    photo: { src: "images/gestroi-gold-spot.jpg", caption: "Active and hardy with proper gradient." },
    updated: "2026-02-22",
  },

  {
    id: "gestroi-zinger",
    name: "Gestroi Zinger",
    scientific: "Armadillidium gestroi (morph / line)",
    difficulty: "Easy",
    origin: "Mediterranean region (species), morph/line captive",
    humidity: "55–75% with gradient",
    temp: "68–82°F",
    diet: ["Leaf litter", "Wood", "Veg", "Protein occasionally", "Calcium"],
    enclosure: "Same as other A. gestroi: well-ventilated with a humid corner.",
    breeding: "Fast.",
    issues: ["Constant wet substrate", "Low leaf litter over time"],
    notes: "Care matches other gestroi lines.",
    photo: { src: "images/gestroi-zinger.jpg", caption: "Keep plenty of leaf litter and wood." },
    updated: "2026-02-22",
  },

  {
    id: "temperate-springtails",
    name: "Temperate Springtails",
    scientific: "Collembola (commonly Folsomia candida cultures)",
    difficulty: "Very easy",
    origin: "Worldwide",
    humidity: "70–100% (depending on culture medium)",
    temp: "60–80°F",
    diet: ["Brewer’s yeast", "Fish flakes (tiny amounts)", "Mold/organics"],
    enclosure: "Culture on charcoal, clay, or bioactive substrate. Keep moist but not anaerobic.",
    breeding: "Fast; population responds to feeding + moisture.",
    issues: ["Overfeeding → mold explosion", "Dry-out → die-off"],
    notes: "Excellent cleanup crew; add to bioactives and refresh periodically.",
    photo: { src: "images/springtails.jpg", caption: "Keep cultures lightly fed and consistently moist." },
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
  detailPanel: document.getElementById("detailPanel"),

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

els.year.textContent = new Date().getFullYear();

function formatDate(iso){
  if(!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return "Updated: " + d.toLocaleDateString(undefined, { year:"numeric", month:"short", day:"numeric" });
}

function difficultyClass(diff){
  const d = (diff || "").toLowerCase();
  if(d.includes("very")) return "easy";
  if(d.includes("easy")) return "easy";
  if(d.includes("moderate")) return "moderate";
  if(d.includes("advanced")) return "advanced";
  return "";
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function renderList(items){
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
      <img class="thumb" src="${escapeHtml(s.photo?.src || "")}" alt="">
      <div>
        <h4>${escapeHtml(s.name)}</h4>
        <div class="sub">${escapeHtml(s.scientific || "")} • ${escapeHtml(s.difficulty || "")}</div>
      </div>
    `;
    els.cardList.appendChild(card);
  });

  els.resultCount.textContent = `${items.length} shown`;
}

function setActiveChip(id){
  document.querySelectorAll(".chip").forEach(ch => {
    ch.classList.toggle("active", ch.dataset.id === id);
  });
}

function renderQuickStats(s){
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

function renderBullets(arr){
  if(!arr?.length) return "<p class='muted'>—</p>";
  return `<ul>${arr.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
}

function selectSpecies(id, updateHash){
  const s = SPECIES.find(x => x.id === id);
  if(!s) return;

  els.emptyState.hidden = true;
  els.detailWrap.hidden = false;

  els.speciesName.textContent = s.name;
  els.scientificName.textContent = s.scientific ? `• ${s.scientific}` : "";
  els.lastUpdated.textContent = s.updated ? `• ${formatDate(s.updated)}` : "";

  els.difficultyBadge.textContent = s.difficulty || "";
  els.difficultyBadge.className = `badge ${difficultyClass(s.difficulty)}`;

  els.speciesImage.src = s.photo?.src || "";
  els.speciesImage.alt = s.name;
  els.photoCaption.textContent = s.photo?.caption || "";

  renderQuickStats(s);

  els.overview.innerHTML = `
    <p>${escapeHtml(s.notes || "")}</p>
  `;

  els.enclosure.innerHTML = `
    <p>${escapeHtml(s.enclosure || "")}</p>
  `;

  els.feeding.innerHTML = `
    <p><strong>Staples:</strong></p>
    ${renderBullets(s.diet)}
  `;

  els.breeding.innerHTML = `
    <p>${escapeHtml(s.breeding || "—")}</p>
  `;

  els.issues.innerHTML = renderBullets(s.issues);

  setActiveChip(id);

  // highlight selected card
  document.querySelectorAll(".card").forEach(c => {
    c.style.outline = c.dataset.id === id ? "2px solid rgba(65,195,106,0.55)" : "none";
  });

  if(updateHash){
    location.hash = id;
  }
}

function applySearch(){
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

  // If current selection is filtered out, don’t force-change it.
}

els.searchInput.addEventListener("input", applySearch);

els.copyLinkBtn.addEventListener("click", async () => {
  const id = location.hash?.replace("#", "");
  const url = `${location.origin}${location.pathname}#${id || ""}`;
  try{
    await navigator.clipboard.writeText(url);
    els.copyLinkBtn.textContent = "Copied!";
    setTimeout(() => els.copyLinkBtn.textContent = "Copy link", 900);
  }catch(e){
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
  photo: { src: "images/new-species.jpg", caption: "" },
  updated: "${new Date().toISOString().slice(0,10)}",
},
`.trim();

  try{
    await navigator.clipboard.writeText(template);
    els.downloadTemplateBtn.textContent = "Template copied!";
    setTimeout(() => els.downloadTemplateBtn.textContent = "Copy template block", 1100);
  }catch(e){
    alert("Could not copy template. You can copy it from script.js.");
  }
});

// Initial render
renderList(SPECIES);

// Deep link support
function loadFromHash(){
  const id = (location.hash || "").replace("#", "");
  if(!id){
    els.emptyState.hidden = false;
    els.detailWrap.hidden = true;
    setActiveChip(null);
    return;
  }
  selectSpecies(id, false);
}
window.addEventListener("hashchange", loadFromHash);
loadFromHash();
