const species = {

"Rubber Ducky": {

image: "images/rubber-ducky.jpg",

care: `
Origin: Thailand

Difficulty: Advanced

Humidity: 75–90%

Temperature: 68–75°F

Behavior: Slow breeding, reclusive

Preferred Food:
• Leaf litter
• Hardwood
• Fish flakes
• Calcium

Notes:
Sensitive species. Requires stable humidity and deep substrate.
`
},

"Pineapple Spikey": {

image: "images/pineapple-spikey.jpg",

care: `
Origin: Southeast Asia

Difficulty: Moderate

Humidity: 70–85%

Temperature: 70–78°F

Preferred Food:
• Leaf litter
• Decaying wood
• Vegetables
• Calcium

Notes:
Moderate breeder, prefers high humidity zones.
`
},

"Powder Orange": {

image: "images/powder-orange.jpg",

care: `
Origin: Mediterranean region

Difficulty: Easy

Humidity: 50–70%

Temperature: 65–80°F

Preferred Food:
• Leaf litter
• Vegetables
• Fish flakes

Notes:
Very fast breeder. Great beginner species.
`
},

"Orange Cream": {

image: "images/orange-cream.jpg",

care: `
Origin: Captive morph

Difficulty: Easy

Humidity: 50–70%

Temperature: 65–80°F

Preferred Food:
• Leaf litter
• Vegetables
• Protein foods

Notes:
Care identical to powder orange.
`
},

"Oreo Crumble": {

image: "images/oreo-crumble.jpg",

care: `
Origin: Europe

Difficulty: Easy

Humidity: 60–75%

Temperature: 65–75°F

Preferred Food:
• Leaf litter
• Hardwood
• Vegetables

Notes:
Hardy and beginner friendly.
`
},

"Black Panda": {

image: "images/black-panda.jpg",

care: `
Origin: Thailand

Difficulty: Moderate–Advanced

Humidity: 70–85%

Temperature: 68–75°F

Preferred Food:
• Leaf litter
• Calcium
• Protein foods

Notes:
Prefers stable humidity and deep substrate.
`
},

"Red Panda": {

image: "images/red-panda.jpg",

care: `
Origin: Thailand

Difficulty: Moderate

Humidity: 70–85%

Temperature: 68–75°F

Preferred Food:
• Leaf litter
• Vegetables
• Calcium

Notes:
Moderate breeder, stable conditions preferred.
`
},

"White Zebra": {

image: "images/white-zebra.jpg",

care: `
Origin: France

Difficulty: Easy

Humidity: 60–75%

Temperature: 65–78°F

Preferred Food:
• Leaf litter
• Vegetables
• Fish flakes

Notes:
Hardy and active species.
`
},

"Yellow Zebra": {

image: "images/yellow-zebra.jpg",

care: `
Origin: France

Difficulty: Easy

Humidity: 60–75%

Temperature: 65–78°F

Preferred Food:
• Leaf litter
• Vegetables
• Protein foods

Notes:
Same care as white zebra.
`
},

"Gestroi Gold Spot": {

image: "images/gestroi-gold-spot.jpg",

care: `
Origin: Spain

Difficulty: Easy

Humidity: 60–75%

Temperature: 65–80°F

Preferred Food:
• Leaf litter
• Hardwood
• Vegetables

Notes:
Very hardy and active.
`
},

"Gestroi Zinger": {

image: "images/gestroi-zinger.jpg",

care: `
Origin: Spain

Difficulty: Easy

Humidity: 60–75%

Temperature: 65–80°F

Preferred Food:
• Leaf litter
• Hardwood
• Vegetables

Notes:
Same care as other gestroi.
`
},

"Temperate Springtails": {

image: "images/springtails.jpg",

care: `
Origin: Worldwide

Difficulty: Very Easy

Humidity: 70–100%

Temperature: 60–80°F

Preferred Food:
• Mold
• Yeast
• Organic matter

Notes:
Excellent cleanup crew.
`
}

};


const buttonContainer = document.getElementById("buttonContainer");
const speciesName = document.getElementById("speciesName");
const speciesImage = document.getElementById("speciesImage");
const careInfo = document.getElementById("careInfo");


for (const name in species) {

const btn = document.createElement("button");

btn.innerText = name;

btn.onclick = () => {

speciesName.innerText = name;

speciesImage.src = species[name].image;
speciesImage.style.display = "block";

careInfo.innerText = species[name].care;

};

buttonContainer.appendChild(btn);

}
