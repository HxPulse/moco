/*** ITEMS ***/

const weapons = {
    "Speedshot": 70,
    "Jaded Blades": 80,
    "Spinsickle": 100,
    "Toothpick & Shield": 30
};

const gadgets = {
    "Smart Fireworks": 50,
    "Pepper Spray": 50,
    "Multi Zapper": 50,
    "Boombox": 40,
    "Snow Globe": 50,
    "Monster Taser": 20,
    "Spicy Dagger": 30,
    "Really Cool Sticker": 30,
    "Vitamin Shot": 30,
    "Super Loud Whistle": 40,
    "Splash Heal": 10
};

const passives = {
    "Unstable Lightning": 50,
    "Unstable Beam": 50,
    "Unstable Lazer": 50,
    "Smelly Socks": 20,
    "Auto Zapper": 30,
    "Vampire Teeth": 10,
    "R&B Mixtape": 10,
    "Explode-O-Matic": 40,
    "Healthy Snacks": 10,
    "Healing Charm": 20
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
  console.log(backgrounds);
  let currentIndex = 0;

  const btn = document.getElementById('bgCycleBtn');

  btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    console.log(currentIndex);
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

document.getElementById('clipboardBtn').addEventListener('click', () => {
  const builds = document.querySelectorAll('.build');
  let output = '```\n';
  let grandTotal = 0;

  builds.forEach((build, index) => {
    output += `Player ${index + 1}:\n`;

    let weapon = '';
    const gadgets = [];
    const passives = [];

    const rows = build.querySelectorAll('.item-row');
    rows.forEach(row => {
      const label = row.querySelector('.clickable-label');
      const img = row.querySelector('.itemImgPreview');
      const value = row.querySelector('.value-display')?.textContent.trim();

      if (!label || !img || !value) return;

      const itemName = img.dataset.itemName || img.alt || 'Unknown';
      const formatted = `${itemName}: ${value}`;

      if (label.classList.contains('weaponBtn')) {
        weapon = formatted;
      } else if (label.classList.contains('gadgetBtn')) {
        gadgets.push(formatted);
      } else if (label.classList.contains('passiveBtn')) {
        passives.push(formatted);
      }
    });

    output += `  ${weapon}\n`;
    output += `  ${gadgets.join(' | ')}\n`;
    output += `  ${passives.join(' | ')}\n`;
    const totalText = build.querySelector('.totalValue')?.textContent.trim();
    const total = parseInt(totalText) || 0;
    grandTotal += total;
    output += `  Total: ${total}\n\n`;
  });


  output += `Team Total: ${grandTotal}`;
  output += '```';

  navigator.clipboard.writeText(output)
    .then(() => alert('Builds copied to clipboard!'))
    .catch(err => alert('Failed to copy: ' + err));
});
