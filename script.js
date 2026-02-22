// ======= Species database =======
// IMPORTANT: Images are located in assets/images/
// Filenames must match EXACTLY (including spaces and capitalization)

const SPECIES = [

  {
    id: "rubber-ducky",
    name: "Rubber Ducky",
    scientific: "Cubaris sp.",
    difficulty: "Advanced",
    origin: "Thailand",
    humidity: "75–90%",
    temp: "68–76°F",
    diet: [
      "Leaf litter",
      "Decaying hardwood",
      "Isopod chow",
      "Occasional protein",
      "Calcium"
    ],
    enclosure: "Deep substrate with humidity gradient. Avoid overly wet conditions.",
    breeding: "Slow to moderate.",
    issues: [
      "Too wet substrate",
      "Poor ventilation",
      "Environmental swings"
    ],
    notes: "Sensitive species. Stability is critical.",
    photos: [
      { src: "assets/images/Rubber Ducky.jpeg", caption: "Rubber Ducky isopod." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "pineapple-spikey",
    name: "Pineapple Spikey",
    scientific: "Cubaris sp.",
    difficulty: "Moderate",
    origin: "Southeast Asia",
    humidity: "70–85%",
    temp: "70–78°F",
    diet: [
      "Leaf litter",
      "Hardwood",
      "Vegetables",
      "Protein",
      "Calcium"
    ],
    enclosure: "Provide humidity gradient and hardwood.",
    breeding: "Moderate.",
    issues: [
      "Too dry slows breeding",
      "Too wet causes die-off"
    ],
    notes: "Provide lots of wood and stable humidity.",
    photos: [
      { src: "assets/images/PineApple Spikey.jpeg", caption: "Pineapple Spikey isopod." },
      { src: "assets/images/PineApple Spiky isopod.png", caption: "Pineapple Spikey alternate view." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "powder-orange",
    name: "Powder Orange",
    scientific: "Porcellionides pruinosus",
    difficulty: "Easy",
    origin: "Mediterranean",
    humidity: "50–70%",
    temp: "65–82°F",
    diet: [
      "Leaf litter",
      "Vegetables",
      "Fish flakes",
      "Calcium"
    ],
    enclosure: "Very adaptable. Provide dry and moist areas.",
    breeding: "Fast breeder.",
    issues: [
      "Overpopulation",
      "Mite outbreaks if dirty"
    ],
    notes: "Excellent beginner species.",
    photos: [
      { src: "assets/images/Powder Orange.jpeg", caption: "Powder Orange isopod." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "orange-cream",
    name: "Orange Cream",
    scientific: "Porcellionides pruinosus morph",
    difficulty: "Easy",
    origin: "Captive bred",
    humidity: "50–70%",
    temp: "65–82°F",
    diet: [
      "Leaf litter",
      "Vegetables",
      "Protein",
      "Calcium"
    ],
    enclosure: "Same care as Powder Orange.",
    breeding: "Fast breeder.",
    issues: [
      "Overpopulation"
    ],
    notes: "Very hardy morph.",
    photos: [
      { src: "assets/images/Orange Cream isopod.png", caption: "Orange Cream morph." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "oreo-crumble",
    name: "Oreo Crumble",
    scientific: "Porcellio laevis morph",
    difficulty: "Easy",
    origin: "Europe",
    humidity: "60–75%",
    temp: "65–80°F",
    diet: [
      "Leaf litter",
      "Vegetables",
      "Protein",
      "Calcium"
    ],
    enclosure: "Provide hides and humidity gradient.",
    breeding: "Fast breeder.",
    issues: [
      "Overpopulation"
    ],
    notes: "Very hardy species.",
    photos: [
      { src: "assets/images/Oreo Crumble 2.jpeg", caption: "Oreo Crumble isopod." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "red-panda",
    name: "Red Panda",
    scientific: "Cubaris sp.",
    difficulty: "Moderate",
    origin: "Thailand",
    humidity: "70–85%",
    temp: "68–76°F",
    diet: [
      "Leaf litter",
      "Hardwood",
      "Protein",
      "Calcium"
    ],
    enclosure: "Humidity gradient required.",
    breeding: "Moderate.",
    issues: [
      "Sensitive to moisture swings"
    ],
    notes: "Stable environment required.",
    photos: [
      { src: "assets/images/Red Panda 2.jpeg", caption: "Red Panda isopod." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "white-zebra",
    name: "White Zebra",
    scientific: "Armadillidium maculatum morph",
    difficulty: "Easy",
    origin: "Europe",
    humidity: "55–75%",
    temp: "65–80°F",
    diet: [
      "Leaf litter",
      "Vegetables",
      "Calcium"
    ],
    enclosure: "Provide ventilation and humidity gradient.",
    breeding: "Moderate breeder.",
    issues: [
      "Too wet substrate"
    ],
    notes: "Prefers slightly drier setup.",
    photos: [
      { src: "assets/images/High White Zebra isopod.png", caption: "White Zebra isopod." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "yellow-zebra",
    name: "Yellow Zebra",
    scientific: "Armadillidium maculatum morph",
    difficulty: "Easy",
    origin: "Europe",
    humidity: "55–75%",
    temp: "65–80°F",
    diet: [
      "Leaf litter",
      "Vegetables",
      "Calcium"
    ],
    enclosure: "Same as White Zebra.",
    breeding: "Moderate breeder.",
    issues: [
      "Too wet substrate"
    ],
    notes: "Hardy morph.",
    photos: [
      { src: "assets/images/Yellow Zebra isopod.png", caption: "Yellow Zebra isopod." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "gestroi",
    name: "Gestroi Gold Spot",
    scientific: "Armadillidium gestroi",
    difficulty: "Easy",
    origin: "Mediterranean",
    humidity: "55–75%",
    temp: "68–82°F",
    diet: [
      "Leaf litter",
      "Wood",
      "Protein",
      "Calcium"
    ],
    enclosure: "Provide gradient and ventilation.",
    breeding: "Fast breeder.",
    issues: [
      "Too wet substrate"
    ],
    notes: "Very hardy species.",
    photos: [
      { src: "assets/images/Gestroi.jpeg", caption: "Gestroi isopod." },
      { src: "assets/images/Gestroi isopod.png", caption: "Gestroi alternate view." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "dairy-cow",
    name: "Dairy Cow",
    scientific: "Porcellio laevis morph",
    difficulty: "Easy",
    origin: "Captive bred",
    humidity: "60–75%",
    temp: "65–80°F",
    diet: [
      "Leaf litter",
      "Protein",
      "Vegetables",
      "Calcium"
    ],
    enclosure: "Provide gradient and hides.",
    breeding: "Very fast breeder.",
    issues: [
      "Overpopulation"
    ],
    notes: "Extremely hardy and active.",
    photos: [
      { src: "assets/images/Dairy Cow.png", caption: "Dairy Cow isopod." }
    ],
    updated: "2026-02-22"
  },

  {
    id: "springtails",
    name: "Temperate Springtails",
    scientific: "Collembola",
    difficulty: "Very Easy",
    origin: "Worldwide",
    humidity: "70–100%",
    temp: "60–80°F",
    diet: [
      "Yeast",
      "Organic debris"
    ],
    enclosure: "Keep moist.",
    breeding: "Very fast.",
    issues: [
      "Dry conditions kill culture"
    ],
    notes: "Essential cleanup crew.",
    photos: [
      { src: "assets/images/SpringTail Culture.png", caption: "Springtail culture." }
    ],
    updated: "2026-02-22"
  }

];


// ===== UI CODE =====

const chipContainer = document.getElementById("chipContainer");
const cardList = document.getElementById("cardList");

const speciesName = document.getElementById("speciesName");
const speciesImage = document.getElementById("speciesImage");
const photoCaption = document.getElementById("photoCaption");

const overview = document.getElementById("overview");
const enclosure = document.getElementById("enclosure");
const feeding = document.getElementById("feeding");
const breeding = document.getElementById("breeding");
const issues = document.getElementById("issues");

function selectSpecies(id){

  const s = SPECIES.find(x=>x.id===id);

  speciesName.innerText = s.name;

  speciesImage.src = s.photos[0].src;

  photoCaption.innerText = s.photos[0].caption;

  overview.innerText = s.notes;

  enclosure.innerText = s.enclosure;

  feeding.innerHTML = s.diet.map(x=>"<div>"+x+"</div>").join("");

  breeding.innerText = s.breeding;

  issues.innerHTML = s.issues.map(x=>"<div>"+x+"</div>").join("");

}

SPECIES.forEach(s=>{

  const btn=document.createElement("button");

  btn.innerText=s.name;

  btn.onclick=()=>selectSpecies(s.id);

  chipContainer.appendChild(btn);

});
