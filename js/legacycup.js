/*** ITEMS ***/

const weapons = [
    "Monster Slugger",
    "Techno Fists",
    "Wolf Stick",
    "Staff of Good Vibes",
    "Toothpick & Shield",
    "Portable Portal",
    "CPU Bomb",
    "Speedshot",
    "Medicine Ball",
    "Jaded Blades",
    "Spinsickle",
    "Buzz-Kill",
    "Hornbow",
    "Singularity",
    "Poison Bow"
];

const gadgets = [
    "Splash Heal",
    "Smart Fireworks",
    "Boombox",
    "Vitamin Shot",
    "Monster Taser",
    "Pepper Spray",
    "Snow Globe",
    "Life Jacket",
    "Multi Zapper",
    "Spicy Dagger",
    "Explosive 6-Pack",
    "Super Loud Whistle",
    "Revitalizing Mist",
    "Really Cool Sticker",
    "Shelldon",
    "Very Mean Pendant",
    "Feel-Better Bloom",
    "P.E.W 3000"
];

const passives = [
    "Auto Zapper",
    "Vampire Teeth",
    "Smelly Socks",
    "Unstable Lazer",
    "Explode-O-Matic",
    "R&B Mixtape",
    "Unstable Beam",
    "Unstable Lightning",
    "Healthy Snacks",
    "Healing Charm",
    "Chicken-O-Matic",
    "Pocket Airbag",
    "Gadget Battery",
    "Cactus Charm"
];

/*** FUNCTIONS ***/

function getItemImage(name) {
  const filename = name.replace(/[^a-z0-9]/gi, '_') + ".png";
  return `assets/images/items/${filename}`;
}

function openItemPopup(type, clickedBtn) {
  const data = type === 'weapon' ? weapons : type === 'gadget' ? gadgets : passives;
  const popup = document.getElementById(`${type}Popup`);
  const optionsContainer = popup.querySelector(`.${type}-options`);
  optionsContainer.innerHTML = '';

  data.forEach(name => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('itemPopup', `${type}-item`);

    const img = document.createElement('img');
    img.src = getItemImage(name);
    img.alt = name;
    img.title = name;

    itemDiv.appendChild(img);

    itemDiv.addEventListener('click', () => {
      // Instead of buildDiv, we look relative to clickedBtn:
      const itemRow = clickedBtn.parentElement;
      const imgPreview = itemRow.querySelector('.itemImgPreview');
      const valueDisplay = itemRow.querySelector('.value-display');


      imgPreview.src = getItemImage(name);
      imgPreview.style.display = 'inline';
      imgPreview.alt = name;
      imgPreview.dataset.itemName = name;

      // infer type from clickedBtn class
      if (clickedBtn.classList.contains('weaponBtn')) {
        imgPreview.dataset.type = 'weapon';
      } else if (clickedBtn.classList.contains('gadgetBtn')) {
        imgPreview.dataset.type = 'gadget';
      } else {
        imgPreview.dataset.type = 'passive';
      }

      updateDuplicateHighlights();  // call highlight check
      popup.style.display = 'none';
    });

    optionsContainer.appendChild(itemDiv);
  });

  popup.style.display = 'flex';
}

function updateDuplicateHighlights() {
  const allPreviews = document.querySelectorAll('.itemImgPreview');

  const counts = { weapon: {}, gadget: {} };

  allPreviews.forEach(img => {
    const type = img.dataset.type;
    const name = img.dataset.itemName;
    if (!name) return;

    if (type === 'weapon' || type === 'gadget') {
      counts[type][name] = (counts[type][name] || 0) + 1;
    }
  });

  allPreviews.forEach(img => {
    const type = img.dataset.type;
    const name = img.dataset.itemName;
    if (!name || type === 'passive') {
      img.classList.remove('duplicate');
      return;
    }

    const c = counts[type][name];
    if ((type === 'weapon' && c >= 2) || (type === 'gadget' && c >= 3)) {
      img.classList.add('duplicate');
    } else {
      img.classList.remove('duplicate');
    }
  });
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




