/* MAP EDITOR */
    // Variables
let selectedTile = 'wall',
    tiles = document.querySelectorAll('.tile'),
    heightController = document.querySelector('#map-height'),
    widthController = document.querySelector('#map-width'),
    eraserMode = false, clicGauche = false,
    table = document.querySelector('table');

heightController.value = table.querySelectorAll('tr').length;
widthController.value = table.querySelector('tr').querySelectorAll('td').length;

    // Events & functions
setListeners();

for (const tile of tiles) {
    tile.addEventListener('click', function(){
        selectedTile = this.className.replace(' tile', '');
        displayBorder(tile, tiles);
    })
}

heightController.addEventListener('change', function () {
    changeHeight(table, heightController.value);
});

widthController.addEventListener('change', function () {
    changeWidth(table, widthController.value);
});

document.addEventListener('keyup', function (e) {
    switch (e.code) {
        case 'Space' :
            eraserMode = !eraserMode;
            break;
        case 'Delete':
            confirm('Vider la map ?');
            voidMap();
    }
});


/* MAP SAVE */
    // Variables
let savedMap = document.querySelector('#saved_map'),
    saveButton = document.querySelector('#save_button'),
    canvas, data, p,
    form = document.querySelector('form');

    // Events & functions
html2canvas(table).then(function (e) {
    canvas = e;
});

saveButton.addEventListener('mousedown', function () {
    savedMap.value = mapToStr();
    data = canvas.toDataURL();
    p = document.createElement('input');
    p.setAttribute('type', 'hidden');
    p.setAttribute('name', 'data');
    p.setAttribute('value', data);
    form.appendChild(p);
});

