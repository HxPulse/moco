/*** ITEMS ***/

const weapons = {
    "Portable Portal": 100,
    "Techno Fists": 100,
    "Spinsickle": 90,
    "CPU Bomb": 80,
    "Speedshot": 70,
    "Jaded Blades": 70,
    "Poison Bow": 60,
    "Toothpick & Shield": 40,
    "Monster Slugger": 30,
    "Singularity": 30,
    "Wolf Stick": 20,
    "Buzz-Kill": 20,
    "Staff of Good Vibes": 10,
    "Medicine Ball": 10
};

const gadgets = {
    "Snow Globe": 80,
    "Multi Zapper": 70,
    "Smart Fireworks": 70,
    "Pepper Spray": 70,
    "Boombox": 50,
    "P.E.W 3000": 50,
    "Very Mean Pendant": 50,
    "Super Loud Whistle": 40,
    "Really Cool Sticker": 40,
    "Monster Taser": 30,
    "Shelldon": 30,
    "Vitamin Shot": 10,
    "Splash Heal": 10,
    "Revitalizing Mist": 10,
    "Spicy Dagger": 10,
    "Life Jacket": -20,
    "Feel-Better Bloom": -20,
    "Explosive 6-Pack": -20
};

const passives = {
    "Unstable Lightning": 60,
    "Unstable Lazer": 60,
    "Unstable Beam": 50,
    "Explode-O-Matic": 50,
    "Smelly Socks": 30,
    "Gadget Battery": 30,
    "Cactus Charm": 30,
    "Auto Zapper": 20,
    "Chicken-o-Matic": 20,
    "Healthy Snacks": 10,
    "Healing Charm": 10,
    "Vampire Teeth": 10,
    "R&B Mixtape": 10,
    "Pocket Airbag": -20,
};

/*** FINALISTS ***/

const finalists = {
  team1: {
      name: "#1 - PSWZ", map1time: "1:03.95", map2time: "1:41.70", map3time: "3:26.95",
      player1: ["GRD • Poppin", "QYQ2GJU"], player2: ["IGRS • Zube", "Q0CCVUV"],
      player3: ["Wassim", "G8P880G"], player4: ["Shqdowz", "LC8VQ0U"]
  },

  team2: {
      name: "#2 - The Sleepers", map1time: "1:03.40", map2time: "1:42.20", map3time: "3:41.60",
      player1: ["TFE | Grim", "20YJ82YL"], player2: ["Adnan", "J8CQV2L"],
      player3: ["hgt_1212", "2P82C8PR"], player4: ["TFE | otop", "VRP0RVL"]
  },

  team3: {
      name: "#3 - BL1GHT", map1time: "1:08.20", map2time: "1:52.45", map3time: "3:48.85",
      player1: ["barin", ""], player2: ["LewisM", ""],
      player3: ["于灰", "LU0GVYQ"], player4: ["1天", ""]
  },

  team4: {
      name: "#4 - I ate caramel last time", map1time: "1:03.40", map2time: "1:43.50", map3time: "3:59.95",
      player1: ["TSK • Shawn", "LUQRQVQ"], player2: ["Snipegirl137", "G9G2YL2"],
      player3: ["Kaocto", "J82R0P0"], player4: ["Datiger", "LUCLCJG"]
  },

  team5: {
      name: "#5 - Goblin Gang", map1time: "1:07.90", map2time: "1:57.90", map3time: "4:20.50",
      player1: ["Sly", "LV299C8"], player2: ["Hazard", "JP2QR0Y"],
      player3: ["Xerosis", "RUQVRJG"], player4: ["TRIBEMARK", "QC8VLJP"]
  },


  team6: {
      name: "#6 - OBLIVION", map1time: "1:03.95", map2time: "1:44.50", map3time: "N/A",
      player1: ["Nabi", "LCQPULU"], player2: ["Preda", "LCPUV0V"],
      player3: ["Ciccio Rock", ""], player4: ["speedy", "8P8QLQ8G"]
  },

  team7: {
      name: "#7 - TDN & Members", map1time: "1:06.75", map2time: "1:47.35", map3time: "N/A",
      player1: ["VIRGILINHO", "2VRL2PP0"], player2: ["MEPHISTO", "LUPYCVL"],
      player3: ["SPARTA", "V02JC2L"], player4: ["Hazel", "QUY89UU"]
  },

  team8: {
      name: "#8 - work in mo.gress", map1time: "1:07.30", map2time: "1:49.95", map3time: "N/A",
      player1: ["AFK | Xeve", ""], player2: ["nino", "2092VGLY"],
      player3: ["Kaizer", "G20Q8JY"], player4: ["MCR | Wormo", "QU8VJCQ"]
  },

  team9: {
      name: "#9 - R.I.P. EGE", map1time: "1:03.90", map2time: "1:52.95", map3time: "N/A",
      player1: ["KOTS | Sunraku", "J2JQV0Y"], player2: ["KOTS | RedTroop", "Q0P08GR"],
      player3: ["Falax", "RLL0YYQ"], player4: ["KOTS | Mello", "LCJQYQ9"]
  },

  team10: {
      name: "#10 - KOTS", map1time: "1:03.40", map2time: "1:53.95", map3time: "N/A",
      player1: ["KOTS | Moros", "R0CLGCQ"], player2: ["KOTS | Hozen", "QU299PY"],
      player3: ["KOTS | Zeth", "GJJVPP0"], player4: ["KOTS | Yass", ""]
  },

  team11: {
      name: "#11 - KOTS3", map1time: "1:04.10", map2time: "1:56.30", map3time: "N/A",
      player1: ["KOTS | Kyros", "2YGR9ULY"], player2: ["KOTS | Crakiiz", "LCUU99J"],
      player3: ["KOTS | WA_GA_KI", "Q9Y8QRL"], player4: ["KOTS | boubie", "LCR9RPV"]
  },

  team12: {
      name: "#12 - SerNikolas", map1time: "1:08.40", map2time: "1:58.55", map3time: "N/A",
      player1: ["JKD", "JCG8Y80"], player2: ["King Dragon", "LVQQVUU"],
      player3: ["nik", "GP8CQ80"], player4: ["Alby", ""]
  }
};

/*** FUNCTIONS ***/

function getValue(name) {       // retrieves selected item value
  return weapons[name] || gadgets[name] || passives[name] || 0;
}

function updateTotal(buildDiv) {      // updates value regarding the selected items
  const selects = buildDiv.querySelectorAll('select');
  let sum = 0;
  const previews = buildDiv.querySelectorAll('img[data-item-name]');
    previews.forEach(img => {
      sum += getValue(img.dataset.itemName);
  });
  buildDiv.querySelector('.totalValue').textContent = sum;
  updateGrandTotal();
}

function updateGrandTotal() {       // Team total
  const allTotals = document.querySelectorAll('.totalValue');
  let grandSum = 0;
  allTotals.forEach(span => {
    grandSum += parseInt(span.textContent) || 0;
  });
  document.getElementById('grandTotalValue').textContent = grandSum;
}

function getItemImage(name) {
  const filename = name.replace(/[^a-z0-9]/gi, '_') + ".png";
  return `assets/images/items/${filename}`;
}

function openItemPopup(type, clickedBtn) {
  const data = type === 'weapon' ? weapons : type === 'gadget' ? gadgets : passives;
  const popup = document.getElementById(`${type}Popup`);
  const optionsContainer = popup.querySelector(`.${type}-options`);
  optionsContainer.innerHTML = '';

  Object.keys(data).forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('itemPopup', `${type}-item`);

    const img = document.createElement('img');
    img.src = getItemImage(item);
    img.alt = item;
    img.title = item;

    const label = document.createElement('span');
    label.textContent = data[item];

    itemDiv.appendChild(img);
    itemDiv.appendChild(label);

    itemDiv.addEventListener('click', () => {
      // Instead of buildDiv, we look relative to clickedBtn:
      const itemRow = clickedBtn.parentElement;
      const imgPreview = itemRow.querySelector('.itemImgPreview');
      const valueDisplay = itemRow.querySelector('.value-display');


      imgPreview.src = getItemImage(item);
      imgPreview.style.display = 'inline';
      imgPreview.alt = item;
      valueDisplay.textContent = data[item];

      imgPreview.dataset.itemName = item;

      const buildDiv = clickedBtn.closest('.build');
      updateTotal(buildDiv);
      popup.style.display = 'none';
    });

    optionsContainer.appendChild(itemDiv);
  });

  popup.style.display = 'flex';
}

function showTeamDetails(team) {
  document.getElementById('teamName').textContent = team.name;

  document.getElementById('map1time').textContent = team.map1time;
  document.getElementById('map2time').textContent = team.map2time;
  document.getElementById('map3time').textContent = team.map3time;

  const playerButtons = document.getElementById('playerButtons').children;

  const players = [team.player1, team.player2, team.player3, team.player4];

  for (let i = 0; i < 4; i++) {
    const btn = playerButtons[i];
    const [name, tag] = players[i];
    btn.textContent = name;
    btn.dataset.tag = tag;

    const newBtn = btn.cloneNode(true);
      newBtn.addEventListener('click', () => {
      const url = "https://mocolytics.com/stats?tag=" + tag;
      window.open(url, "_blank");
    });
    btn.replaceWith(newBtn);
  }
  document.getElementById('teamDetailsPopup').style.display = 'flex';
}

/*** DOC LISTENERS ***/

['weapon', 'gadget', 'passive'].forEach(type => {
  document.querySelectorAll(`.${type}Btn`).forEach(btn => {
    btn.addEventListener('click', () => openItemPopup(type, btn));
  });
});

document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {   // changing image background
  const backgrounds = Array.from({ length: 9 }, (_, i) => `assets/images/backgrounds/bg${i}.png`);
  let currentIndex = 0;

  const btn = document.getElementById('bgCycleBtn');

  btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';
  });

  document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;      // initial background load
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center center';
});

//document.getElementById('lbBtn').addEventListener('click', () => {
//  const container = document.getElementById('finalistsButtons');
//  container.innerHTML = ''; // clear old buttons
//
//  for (const key in finalists) {        // Create buttons for each team
//    const team = finalists[key];
//    const btn = document.createElement('button');
//    btn.textContent = team.name;
//    btn.dataset.teamKey = key; // store the key for later use
//    container.appendChild(btn);
//
//    btn.addEventListener('click', () => {
//      showTeamDetails(finalists[key]);
//      document.getElementById('finalistsPopup').style.display = 'none';
//    });
//  }
//  document.getElementById('finalistsPopup').style.display = 'block';
//});



