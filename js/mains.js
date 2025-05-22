function populateSelect(url, selectId) {
    fetch(url)
        .then(res => res.text())
        .then(data => {
            const select = document.getElementById(selectId);
            data.split('\n').filter(line => line.trim()).forEach(line => {
                const option = document.createElement('option');
                option.textContent = line;
                option.value = line;
                select.appendChild(option);
            });
        });
}

function enforceLimit(selectId, max) {
    const select = document.getElementById(selectId);
    select.addEventListener('change', () => {
        const selected = Array.from(select.selectedOptions);
        if (selected.length > max) {
            selected[max].selected = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateSelect('assets/features/weapons.txt', 'weaponSelect');
    populateSelect('assets/features/gadgets.txt', 'gadgetsSelect');
    populateSelect('assets/features/passives.txt', 'passivesSelect');

    enforceLimit('gadgetsSelect', 3);
    enforceLimit('passivesSelect', 3);
});
