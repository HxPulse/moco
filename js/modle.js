const items = [
  { name: "Monster Slugger", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "1" },
  { name: "Techno Fists", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "both", unlocked: "2"},
  { name: "Wolf Stick", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "single<br>target", unlocked: "8" },
  { name: "Staff of Good Vibes", type: "weapon", cd: "0", doesDmg: true, hasHeal: true, range: "long", AoE: "AoE", unlocked: "9" },
  { name: "Toothpick & Shield", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "12" },
  { name: "Portable Portal", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "AoE", unlocked: "15" },
  { name: "CPU Bomb", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "AoE", unlocked: "16" },
  { name: "Speedshot", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "single<br>target", unlocked: "17" },
  { name: "Medicine Ball", type: "weapon", cd: "0", doesDmg: true, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "23" },
  { name: "Jaded Blades", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "25" },
  { name: "Spinsickle", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "29" },
  { name: "Buzz-Kill", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "30" },
  { name: "Singularity", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "44" },
  { name: "Hornbow", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "AoE", unlocked: "41" },
  { name: "Poison Bow", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "both", unlocked: "50" },
  { name: "Auto Zapper", type: "passive", cd: "3", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "1" },
  { name: "Vampire Teeth", type: "passive", cd: "0", doesDmg: false, hasHeal: true, range: "no", AoE: "single<br>target", unlocked: "5" },
  { name: "Smelly Socks", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "7" },
  { name: "Unstable Lazer", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "both", unlocked: "10" },
  { name: "Explode-O-Matic", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "AoE", unlocked: "11" },
  { name: "R&B Mixtape", type: "passive", cd: "0", doesDmg: false, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "13" },
  { name: "Unstable Beam", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "22" },
  { name: "Unstable Lightning", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "18" },
  { name: "Healthy Snacks", type: "passive", cd: "0", doesDmg: false, hasHeal: false, range: "no", AoE: "single<br>target", unlocked: "27" },
  { name: "Healing Charm", type: "passive", cd: "0", doesDmg: false, hasHeal: true, range: "no", AoE: "both", unlocked: "28" },
  { name: "Chicken-O-Matic", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "23" },
  { name: "Cactus Charm", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "both", unlocked: "42" },
  { name: "Pocket Airbag", type: "passive", cd: "10", doesDmg: false, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "34" },
  { name: "Gadget Battery", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "single<br>target", unlocked: "32" },
  { name: "Splash Heal", type: "gadget", cd: "16", doesDmg: false, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "1" },
  { name: "Smart Fireworks", type: "gadget", cd: "20", doesDmg: true, hasHeal: false, range: "very long", AoE: "AoE", unlocked: "1" },
  { name: "Boombox", type: "gadget", cd: "12", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "4" },
  { name: "Vitamin Shot", type: "gadget", cd: "10", doesDmg: false, hasHeal: true, range: "no", AoE: "single<br>target", unlocked: "9" },
  { name: "Monster Taser", type: "gadget", cd: "6", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "12" },
  { name: "Pepper Spray", type: "gadget", cd: "14", doesDmg: true, hasHeal: false, range: "long", AoE: "AoE", unlocked: "14" },
  { name: "Snow Globe", type: "gadget", cd: "30", doesDmg: true, hasHeal: false, range: "long", AoE: "AoE", unlocked: "18" },
  { name: "Life Jacket", type: "gadget", cd: "15", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "19" },
  { name: "Multi Zapper", type: "gadget", cd: "18", doesDmg: true, hasHeal: false, range: "very long", AoE: "both", unlocked: "17" },
  { name: "Spicy Dagger", type: "gadget", cd: "10", doesDmg: true, hasHeal: false, range: "long", AoE: "single<br>target", unlocked: "15" },
  { name: "Explosive 6-Pack", type: "gadget", cd: "10", doesDmg: true, hasHeal: false, range: "long", AoE: "AoE", unlocked: "21" },
  { name: "Super Loud Whistle", type: "gadget", cd: "12", doesDmg: false, hasHeal: true, range: "very long", AoE: "AoE", unlocked: "26" },
  { name: "Revitalizing Mist", type: "gadget", cd: "8", doesDmg: false, hasHeal: true, range: "long", AoE: "single<br>target", unlocked: "24" },
  { name: "Really Cool Sticker", type: "gadget", cd: "20", doesDmg: true, hasHeal: false, range: "no", AoE: "single<br>target", unlocked: "20" },
  { name: "Shelldon", type: "gadget", cd: "30", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "30" },
  { name: "Very Mean Pendant", type: "gadget", cd: "10", doesDmg: true, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "37" },
  { name: "Feel-Better Bloom", type: "gadget", cd: "20", doesDmg: false, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "38" },
  { name: "P.E.W 3000", type: "gadget", cd: "30", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "46" }
];
let remainingItems = [...items];
let attemptCount = 0;
const guessHistory = [];
const itemToGuess = getDailyItem();
const input = document.getElementById("item-search");
const list = document.getElementById("autocomplete-list");
const guessesContainer = document.getElementById("guesses");

// Item for the day

function getDateUTC2() {
  const now = new Date();
  const utc2 = new Date(now.getTime() + (2 * 60 + now.getTimezoneOffset()) * 60000);
  return utc2.toISOString().split('T')[0];
}

function hashString(str) {      // Hash function
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

function getDailyItem() {
  const dateStr = getDateUTC2();
  const index = hashString(dateStr) % items.length;
  return items[index];
}

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
  const row = document.createElement("div");
  row.className = "guess-row";

  const rangeOrder = { "melee": 0, "long": 1, "very long": 2 };
  const fields = ["type", "cd", "doesDmg", "hasHeal", "range", "AoE", "unlocked"];

  const cells = fields.map(field => {
    let val = item[field];
    let target = itemToGuess[field];
    let correct = val === target;

    let backgroundImage = "";
    let backgroundSize = "32px";
    let backgroundStyle = "";

    if (field === "cd") {
      const numVal = parseInt(val), numTarget = parseInt(target);
      if (!isNaN(numVal) && !isNaN(numTarget)) {
        correct = numVal === numTarget;
        if (!correct) {
          backgroundImage = `url('assets/images/${numTarget > numVal ? 'arrowUp.png' : 'arrowDown.png'}')`;
        }
      }
    }

    if (field === "range") {
      const rankVal = rangeOrder[val], rankTarget = rangeOrder[target];
      if (rankVal !== undefined && rankTarget !== undefined) {
        correct = rankVal === rankTarget;
        if (!correct) {
          backgroundImage = `url('assets/images/${rankTarget > rankVal ? 'arrowUp.png' : 'arrowDown.png'}')`;
        }
      }
    }

    if (field === "unlocked") {
      // Both are levels
      const numVal = parseInt(val);
      const numTarget = parseInt(target);
      correct = numVal === numTarget;
      if (!correct) {
        backgroundImage = `url('assets/images/${numTarget > numVal ? 'arrowUp.png' : 'arrowDown.png'}')`;
      }
    }

    const color = correct ? "#0bc22e" : "#ff000099";
    const display = typeof val === "boolean" ? (val ? "yes" : "no") : val;

    if (backgroundImage) {
      backgroundStyle = `
        background-image: ${backgroundImage};
        background-repeat: no-repeat;
        background-position: center;
        background-size: ${backgroundSize};
      `;
    }

    return `<div class="guess-box" style="background-color:${color}; color: white; ${backgroundStyle}">${display}</div>`;
  });
  guessHistory.push(getEmojiRow(item, itemToGuess));
  row.innerHTML = `
    <div class="guess-box"><img src="assets/images/items/${item.name.replace(/[^a-z0-9]/gi, "_")}.png" alt="${item.name}"></div>
    ${cells.join("")}
  `;

  const header = document.getElementById("guesses-header");
  header.insertAdjacentElement("afterend", row);

  if (item.name === itemToGuess.name) {
    const popup = document.getElementById("win-popup");
    const content = document.getElementById("win-popup-content");
    content.innerText = attemptCount === 1
      ? "Congrats!\nYou found the item first try\n🎉🎉"
      : `Congrats!\nYou found the item in ${attemptCount} tries\n🎉🎉`;
    popup.style.display = "block";
  }

  remainingItems = remainingItems.filter(i => i.name !== item.name);
  input.value = "";
  list.innerHTML = "";
  input.focus();
}

function getEmojiRow(item, itemToGuess) {
  const rangeOrder = { "melee": 0, "long": 1, "very long": 2 };
  const fields = ["type", "cd", "doesDmg", "hasHeal", "range", "AoE", "unlocked"];

  return fields.map(field => {
    let val = item[field];
    let target = itemToGuess[field];
    let correct = val === target;

    if (field === "cd") {
      const numVal = parseInt(val), numTarget = parseInt(target);
      if (!isNaN(numVal) && !isNaN(numTarget)) {
        if (numVal === numTarget) return "🟩";
        return numVal < numTarget ? "🔼" : "🔽";
      }
    }

    if (field === "range") {
      const rankVal = rangeOrder[val], rankTarget = rangeOrder[target];
      if (rankVal !== undefined && rankTarget !== undefined) {
        if (rankVal === rankTarget) return "🟩";
        return rankVal < rankTarget ? "🔼" : "🔽";
      }
    }

    if (field === "unlocked") {
      const numVal = parseInt(val), numTarget = parseInt(target);
      if (numVal === numTarget) return "🟩";
      return numVal < numTarget ? "🔼" : "🔽";
    }
    return correct ? "🟩" : "🟥";
  }).join("");
}

function copyResult() {
  let result = `I found the mo.dle item in ${attemptCount} ${attemptCount === 1 ? "try" : "tries"}!\n`;
  result += "https://hxpulse.github.io/moco/modle.html\n\n"
  result += guessHistory.join("\n");

  navigator.clipboard.writeText(result).then(() => {
    alert("Result copied to clipboard!");
  });
}

function closePopup() {
  const popup = document.getElementById('win-popup');
  if (popup) {
    popup.style.display = 'none';
  }
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
