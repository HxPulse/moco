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

function getValue(name) {
  return weapons[name] || gadgets[name] || passives[name] || 0;
}

function updateTotal(buildDiv) {
  const selects = buildDiv.querySelectorAll('select');
  let sum = 0;
  selects.forEach(sel => {
    const val = sel.value;
    sum += getValue(val);
  });
  buildDiv.querySelector('.totalValue').textContent = sum;
  updateGrandTotal();  // update grand total each time a build total changes
}


function populateSelectsByClass(className, data) {
    const selects = document.querySelectorAll(`.${className}`);
    selects.forEach(select => {
        // Add an empty option as the first option
        const emptyOption = document.createElement('option');
        emptyOption.textContent = '';
        emptyOption.value = '';
        emptyOption.selected = true;
        emptyOption.disabled = true;  // optional: to prevent selecting empty again after choosing something else
        select.appendChild(emptyOption);

        for (const key in data) {
            const option = document.createElement('option');
            option.textContent = key;
            option.value = key;
            select.appendChild(option);
        }
    });
}


function updateGrandTotal() {
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

      // Update value display
      const valueDisplay = sel.nextElementSibling;
      if (valueDisplay && valueDisplay.classList.contains('value-display')) {
        valueDisplay.textContent = getValue(sel.value);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const backgrounds = [
    'assets/images/backgrounds/bg1.png',
    'assets/images/backgrounds/bg2.png',
    'assets/images/backgrounds/bg3.png',
    'assets/images/backgrounds/bg4.png'
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

  // Optional: Set initial background on load
  document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center center';
});


document.addEventListener('DOMContentLoaded', () => {
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
