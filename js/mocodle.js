const items = [
  { name: "Monster Slugger", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "lv 1"},
  { name: "Techno Fists", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "both", unlocked: "lv 2"},
  { name: "Wolf Stick", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "single<br>target", unlocked: "lv 8" },
  { name: "Staff of Good Vibes", type: "weapon", cd: "0", doesDmg: true, hasHeal: true, range: "long", AoE: "AoE", unlocked: "lv 9" },
  { name: "Toothpick & Shield", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "lv 12" },
  { name: "Portable Portal", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "lv 15" },
  { name: "CPU Bomb", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "AoE", unlocked: "lv 16" },
  { name: "Speedshot", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "single<br>target", unlocked: "lv 17" },
  { name: "Medicine Ball", type: "weapon", cd: "0", doesDmg: true, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "lv 23" },
  { name: "Jaded Blades", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "lv 25" },
  { name: "Spinsickle", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "lv 29" },
  { name: "Buzz-Kill", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "one<br>on<br>one" },
  { name: "Singularity", type: "weapon", cd: "0", doesDmg: true, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "unreleased" },
  { name: "Hornbow", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "AoE", unlocked: "unreleased" },
  { name: "Poison Bow", type: "weapon", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "both", unlocked: "unreleased" },
  { name: "Auto Zapper", type: "passive", cd: "3", doesDmg: true, hasHeal: false, range: "very long", AoE: "both", unlocked: "lv 1" },
  { name: "Vampire Teeth", type: "passive", cd: "0", doesDmg: false, hasHeal: true, range: "no", AoE: "single<br>target", unlocked: "lv 5" },
  { name: "Smelly Socks", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "lv 7" },
  { name: "Unstable Lazer", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "both", unlocked: "lv 10" },
  { name: "Explode-O-Matic", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "both", unlocked: "lv 11" },
  { name: "R&B Mixtape", type: "passive", cd: "0", doesDmg: false, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "lv 13" },
  { name: "Unstable Beam", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "AoE", unlocked: "lv 22" },
  { name: "Unstable Lightning", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "lv 18" },
  { name: "Healthy Snacks", type: "passive", cd: "0", doesDmg: false, hasHeal: false, range: "no", AoE: "single<br>target", unlocked: "lv 27" },
  { name: "Healing Charm", type: "passive", cd: "0", doesDmg: false, hasHeal: true, range: "no", AoE: "both", unlocked: "lv 28" },
  { name: "Chicken-O-Matic", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "helping<br>hands" },
  { name: "Cactus Charm", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "very long", AoE: "both", unlocked: "unreleased" },
  { name: "Pocket Airbag", type: "passive", cd: "10", doesDmg: false, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "unreleased" },
  { name: "Gadget Battery", type: "passive", cd: "0", doesDmg: true, hasHeal: false, range: "long", AoE: "single<br>target", unlocked: "unreleased" },
  { name: "Splash Heal", type: "gadget", cd: "16", doesDmg: false, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "lv 1" },
  { name: "Smart Fireworks", type: "gadget", cd: "20", doesDmg: true, hasHeal: false, range: "very long", AoE: "AoE", unlocked: "lv 1" },
  { name: "Boombox", type: "gadget", cd: "12", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "lv 4" },
  { name: "Vitamin Shot", type: "gadget", cd: "10", doesDmg: false, hasHeal: true, range: "no", AoE: "single<br>target", unlocked: "lv 9" },
  { name: "Monster Taser", type: "gadget", cd: "5", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "lv 12" },
  { name: "Pepper Spray", type: "gadget", cd: "14", doesDmg: true, hasHeal: false, range: "long", AoE: "AoE", unlocked: "lv 14" },
  { name: "Snow Globe", type: "gadget", cd: "30", doesDmg: true, hasHeal: false, range: "long", AoE: "AoE", unlocked: "lv 18" },
  { name: "Life Jacket", type: "gadget", cd: "15", doesDmg: true, hasHeal: false, range: "melee", AoE: "AoE", unlocked: "lv 19" },
  { name: "Multi Zapper", type: "gadget", cd: "18", doesDmg: true, hasHeal: false, range: "very long", AoE: "both", unlocked: "lv 17" },
  { name: "Spicy Dagger", type: "gadget", cd: "10", doesDmg: true, hasHeal: false, range: "long", AoE: "single<br>target", unlocked: "lv 15" },
  { name: "Explosive 6-Pack", type: "gadget", cd: "10", doesDmg: true, hasHeal: false, range: "long", AoE: "AoE", unlocked: "lv 21" },
  { name: "Super Loud Whistle", type: "gadget", cd: "12", doesDmg: false, hasHeal: true, range: "very long", AoE: "AoE", unlocked: "lv 26" },
  { name: "Revitalizing Mist", type: "gadget", cd: "8", doesDmg: false, hasHeal: true, range: "long", AoE: "single<br>target", unlocked: "lv 24" },
  { name: "Really Cool Sticker", type: "gadget", cd: "20", doesDmg: true, hasHeal: false, range: "no", AoE: "single<br>target", unlocked: "rooftop<br>rumble" },
  { name: "Shelldon", type: "gadget", cd: "30", doesDmg: true, hasHeal: false, range: "melee", AoE: "single<br>target", unlocked: "tournament<br>grounds" },
  { name: "Very Mean Pendant", type: "gadget", cd: "10", doesDmg: true, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "unreleased" },
  { name: "Feel-Better Bloom", type: "gadget", cd: "20", doesDmg: false, hasHeal: true, range: "melee", AoE: "AoE", unlocked: "unreleased" },
  { name: "P.E.W 3000", type: "gadget", cd: "30", doesDmg: true, hasHeal: false, range: "very long", AoE: "single<br>target", unlocked: "unreleased" }
];
let remainingItems = [...items];
let attemptCount = 0;
const guessHistory = [];
const itemToGuess = items[Math.floor(Math.random() * items.length)];
console.log(itemToGuess);
const input = document.getElementById("item-search");
const list = document.getElementById("autocomplete-list");
const guessesContainer = document.getElementById("guesses");

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
  const unlockedOrder = { "helping<br>hands": 0, "one<br>on<br>one": 1, "rooftop<br>rumble": 2,
    "tournament<br>grounds": 3, "unreleased": 4
  };

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
      const isLevelVal = val.startsWith("lv");
      const isLevelTarget = target.startsWith("lv");

      if (isLevelVal && isLevelTarget) {
        // Both are levels
        const numVal = parseInt(val.slice(3));
        const numTarget = parseInt(target.slice(3));
        correct = numVal === numTarget;
        if (!correct) {
          backgroundImage = `url('assets/images/${numTarget > numVal ? 'arrowUp.png' : 'arrowDown.png'}')`;
        }
      } else if (isLevelVal && !isLevelTarget) {
        // val is level (lower), target is unlocked rank (higher)
        correct = false;
        backgroundImage = `url('assets/images/arrowUp.png')`; // val < target
      } else if (!isLevelVal && isLevelTarget) {
        // val is unlocked rank (higher), target is level (lower)
        correct = false;
        backgroundImage = `url('assets/images/arrowDown.png')`; // val > target
      } else {
        // both unlocked ranks
        const rankVal = unlockedOrder[val];
        const rankTarget = unlockedOrder[target];
        if (rankVal !== undefined && rankTarget !== undefined) {
          correct = rankVal === rankTarget;
          if (!correct) {
            backgroundImage = `url('assets/images/${rankTarget > rankVal ? 'arrowUp.png' : 'arrowDown.png'}')`;
          }
        }
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
      ? "Congrats!\nYou found the item first try\n🎉🎉🎉"
      : `Congrats!\nYou found the item in ${attemptCount} tries\n🎉🎉🎉`;
    popup.style.display = "block";
  }

  remainingItems = remainingItems.filter(i => i.name !== item.name);
  input.value = "";
  list.innerHTML = "";
  input.focus();
}

function getEmojiRow(item, itemToGuess) {
  const rangeOrder = { "melee": 0, "long": 1, "very long": 2 };
  const unlockedOrder = {
    "helping<br>hands": 0,
    "one<br>on<br>one": 1,
    "rooftop<br>rumble": 2,
    "tournament<br>grounds": 3,
    "unreleased": 4
  };
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
      const isLevel = val.startsWith("lv") && target.startsWith("lv");
      if (isLevel) {
        const numVal = parseInt(val.slice(3)), numTarget = parseInt(target.slice(3));
        if (numVal === numTarget) return "🟩";
        return numVal < numTarget ? "🔼" : "🔽";
      } else {
        const rankVal = unlockedOrder[val], rankTarget = unlockedOrder[target];
        if (rankVal !== undefined && rankTarget !== undefined) {
          if (rankVal === rankTarget) return "🟩";
          return rankVal < rankTarget ? "🔼" : "🔽";
        }
      }
    }

    return correct ? "🟩" : "🟥";
  }).join("");
}

function copyResult() {
  let result = `I found the moco.dle item in ${attemptCount} ${attemptCount === 1 ? "try" : "tries"}!\n\n`;
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
