const items = [
  { name: "Monster Slugger"}, { name: "Techno Fists"}, { name: "Wolf Stick"}, { name: "Staff of Good Vibes"},
  { name: "Toothpick & Shield"}, { name: "Portable Portal"}, { name: "CPU Bomb"}, { name: "Speedshot"},
  { name: "Medicine Ball"}, { name: "Jaded Blades"}, { name: "Spinsickle"}, { name: "Buzz-Kill"},
  { name: "Vampire Teeth"}, { name: "Smelly Socks"}, { name: "Unstable Lazer"}, { name: "Explode-O-Matic"},
  { name: "R&B Mixtape"}, { name: "Unstable Beam"}, { name: "Unstable Lightning"}, { name: "Healthy Snacks"},
  { name: "Healing Charm"}, { name: "Chicken-O-Matic"}, { name: "Splash Heal"}, { name: "Smart Fireworks"},
  { name: "Boombox"}, { name: "Vitamin Shot"}, { name: "Monster Taser"}, { name: "Pepper Spray"}, { name: "Snow Globe"},
  { name: "Life Jacket"}, { name: "Multi Zapper"}, { name: "Spicy Dagger"}, { name: "Explosive 6-Pack"},
  { name: "Super Loud Whistle"}, { name: "Revitalizing Mist"}, { name: "Really Cool Sticker"}, { name: "Shelldon"},
];
/* { name: "Hornbow"}, { name: "Poison Bow"}, { name: "Auto Zapper"}, { name: "Singularity"}, { name: "P.E.W 3000"},
{ name: "Feel-Better Bloom"}, { name: "Very Mean Pendant"}, { name: "Cactus Charm"}, { name: "Pocket Airbag"},
{ name: "Gadget Battery"}, */
let remainingItems = [...items];
let attemptCount = 0;
const guessHistory = [];
const itemToGuess = items[Math.floor(Math.random() * items.length)];
console.log(itemToGuess);
const input = document.getElementById("item-search");
const list = document.getElementById("autocomplete-list");
const guessesContainer = document.getElementById("guesses");
const zoomedImage = document.getElementById("zoomed-image-wrapper");
const imgPath = `assets/images/items/${itemToGuess.name.replace(/[^a-z0-9]/gi, "_")}.png`;
let currentZoom = 900; // starting at 1000%
const zoomStep = 60;   // decrease by 100% on each wrong guess
const minZoom = 100;    // minimum zoom 100%

// Random offset between 0% and 90% (so the zoom box doesn't go out of bounds)
const offsetX = Math.floor(Math.random() * 75);
const offsetY = Math.floor(Math.random() * 75);

// Apply background image & position
zoomedImage.style.backgroundImage = `url(${imgPath})`;
zoomedImage.style.backgroundSize = `${currentZoom}%`; // 10x zoom
zoomedImage.style.backgroundPosition = `${offsetX}% ${offsetY}%`;
zoomedImage.style.backgroundRepeat = "no-repeat";

function createAutocompleteList() {
  list.style.display = "block"; // show again when typing
  list.innerHTML = "";

  const val = input.value.toLowerCase();
  remainingItems
    .filter(item => item.name.toLowerCase().includes(val))
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "autocomplete-item";
      div.innerHTML = `
        <img src="assets/images/items/${item.name.replace(/[^a-z0-9]/gi, "_")}.png" />
        <span>${item.name}</span>
      `;
      div.addEventListener("click", () => handleGuess(item));
      list.appendChild(div);
    });
}

function handleGuess(item) {
  attemptCount++;

  // Remove item from remaining pool
  remainingItems = remainingItems.filter(i => i.name !== item.name);

  if (item.name === itemToGuess.name) {
    const popup = document.getElementById("win-popup");
    const content = document.getElementById("win-popup-content");

    content.innerHTML = `
      <p>${attemptCount === 1
        ? "Congrats!<br>You found the item first try 🎉🎉"
        : `Congrats!<br>You found the item in ${attemptCount} tries 🎉🎉`}
      </p>
      <img src="assets/images/items/${item.name.replace(/[^a-z0-9]/gi, "_")}.png"
           alt="${item.name}"
           style="margin-top: 10px; max-width: 100px;" />
    `;
    popup.style.display = "block";

  } else {
    const guessedContainer = document.getElementById("guessed-items");
    const img = document.createElement("img");
    img.src = `assets/images/items/${item.name.replace(/[^a-z0-9]/gi, "_")}.png`;
    img.alt = item.name;
    guessedContainer.appendChild(img);
    currentZoom = Math.max(minZoom, currentZoom - zoomStep);
    zoomedImage.style.backgroundSize = `${currentZoom}%`;
  }

  input.value = "";
  list.innerHTML = "";
  input.focus();
}

function closePopup() {
  const popup = document.getElementById('win-popup');
  if (popup) {
    popup.style.display = 'none';
  }
}

function copyResult() {
  let result = `I found the mo.dle Zoomed item in ${attemptCount} ${attemptCount === 1 ? "try" : "tries"}!`;
  result += guessHistory.join("\n");

  navigator.clipboard.writeText(result).then(() => {
    alert("Result copied to clipboard!");
  });
}

document.addEventListener("click", function (e) {
  const autocomplete = document.getElementById("autocomplete-list");
  const inputBox = document.getElementById("item-search");

  if (
    autocomplete &&
    !autocomplete.contains(e.target) &&
    !inputBox.contains(e.target)
  ) {
    autocomplete.style.display = "none";
  }
});

input.addEventListener("input", createAutocompleteList);

