const weapons = {
    "Speedshot": 70,
    "Jaded Blades": 100,
    "Spinsickle": 70,
    "Toothpick & Shield": 40
};

const gadgets = {
    "Smart Fireworks": 40,
    "Pepper Spray": 40,
    "Multi Zapper": 50,
    "Boombox": 50,
    "Snow Globe": 30,
    "Monster Taser": 20,
    "Spicy Dagger": 30,
    "Really Cool Sticker": 30,
    "Vitamin Shot": 30,
    "Explosive 6-Pack": 10,
    "Life Jacket": 10,
    "Super Loud Whistle": 30,
    "Splash Heal": 10,
};

const passives = {
    "Unstable Lightning": 50,
    "Unstable Beam": 50,
    "Unstable Lazer": 50,
    "Smelly Socks": 20,
    "Auto Zapper": 30,
    "Vampire Teeth": 10,
    "R&B Mixtape": 10,
    "Explode-O-Matic": 20
};

function getValue(name) {       // retrieves selected item value
  return weapons[name] || gadgets[name] || passives[name] || 0;
}

function updateTotal(buildDiv) {      // updates value regarding the selected items
  const selects = buildDiv.querySelectorAll('select');
  let sum = 0;
  selects.forEach(sel => {
    const val = sel.value;
    sum += getValue(val);
  });
  buildDiv.querySelector('.totalValue').textContent = sum;
  updateGrandTotal();
}

function populateSelectsByClass(className, data) {      // filling the selectors
    const selects = document.querySelectorAll(`.${className}`);
    selects.forEach(select => {
        const emptyOption = document.createElement('option');
        emptyOption.textContent = '';
        emptyOption.value = '';
        emptyOption.selected = true;
        emptyOption.disabled = true;
        select.appendChild(emptyOption);

        for (const key in data) {
            const option = document.createElement('option');
            option.textContent = key;
            option.value = key;
            select.appendChild(option);
        }
    });
}


function updateGrandTotal() {       // Team total
  const allTotals = document.querySelectorAll('.totalValue');
  let grandSum = 0;
  allTotals.forEach(span => {
    grandSum += parseInt(span.textContent) || 0;
  });
  document.getElementById('grandTotalValue').textContent = grandSum;
}

document.querySelectorAll('.build').forEach(buildDiv => {
  buildDiv.querySelectorAll('select').forEach(sel => {
    sel.addEventListener('change', () => {
      updateTotal(buildDiv);

      const valueDisplay = sel.nextElementSibling;
      if (valueDisplay && valueDisplay.classList.contains('value-display')) {
        valueDisplay.textContent = getValue(sel.value);
      }

      const iconImg = sel.previousElementSibling;
      if (iconImg && iconImg.tagName === 'IMG') {
        const safeName = sel.value.replace(/[^a-z0-9]/gi, '_');
        iconImg.src = `assets/images/items/${safeName}.png`;
        iconImg.alt = sel.value;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {   // changing image background
  const backgrounds = [
    'assets/images/backgrounds/bg1.png',
    'assets/images/backgrounds/bg2.png',
    'assets/images/backgrounds/bg3.png',
    'assets/images/backgrounds/bg4.png',
    'assets/images/backgrounds/bg5.png',
    'assets/images/backgrounds/bg6.png'
  ];
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

document.addEventListener('DOMContentLoaded', () => {    // selectors
    populateSelectsByClass('weaponSelect', weapons);
    populateSelectsByClass('gadgetSelect1', gadgets);
    populateSelectsByClass('gadgetSelect2', gadgets);
    populateSelectsByClass('gadgetSelect3', gadgets);
    populateSelectsByClass('passiveSelect1', passives);
    populateSelectsByClass('passiveSelect2', passives);
    populateSelectsByClass('passiveSelect3', passives);

    document.querySelectorAll('.build').forEach(buildDiv => {
      buildDiv.querySelectorAll('select').forEach(sel => {
        sel.addEventListener('change', () => updateTotal(buildDiv));
      });
    });
});
