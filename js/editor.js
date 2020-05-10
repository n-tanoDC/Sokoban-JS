let selectedTile = document.querySelector('#selected_tile'),

    box = document.querySelector('#box').addEventListener('click', function(){selectedTile.className = 'box'}),
    wall = document.querySelector('#wall').addEventListener('click', function(){selectedTile.className = 'wall'}),
    box_ok = document.querySelector('#box_ok').addEventListener('click', function(){selectedTile.className = 'box_ok'}),
    player = document.querySelector('#player').addEventListener('click', function(){selectedTile.className = 'player_down'}),
    goal = document.querySelector('#goal').addEventListener('click', function(){selectedTile.className = 'goal'}),

    map = document.querySelectorAll('td'),
    savedMap = document.querySelector('#saved_map'),

    heightController = document.querySelector('#map-height'),
    widthController = document.querySelector('#map-width'),

    eraserMode = false, clicGauche = false,

    saveButton = document.querySelector('#save_button'),

    canvas, data, p,
    form = document.querySelector('form'),
    table = document.querySelector('table');

heightController.value = table.querySelectorAll('tr').length;
widthController.value = table.querySelector('tr').querySelectorAll('td').length;

// Transforms the table into a canvas
html2canvas(table).then(function (e) {
    canvas = e;
});

setListeners();

heightController.addEventListener('change', function () {
    changeHeight(table, heightController.value);
    setListeners();
});

widthController.addEventListener('change', function () {
    changeWidth(table, widthController.value);
    setListeners();
});

// Event Listener pour que selectedTile suive le mouvement de la souris :
document.addEventListener('mousemove', function (e) {
    selectedTile.style.top = '' + e.clientY + 'px';
    selectedTile.style.left = '' + e.clientX + 'px';
});

// Event Listener claviers (display la Selected Tile + void la map)
document.addEventListener('keyup', function (e) {
    switch (e.code) {
        case 'Space' :
            if (selectedTile.style.display === 'none') {
                selectedTile.style.display = 'block';
            } else {
                selectedTile.style.display = 'none';
            }
            break;
        case 'Delete':
            voidMap();
    }});

saveButton.addEventListener('mousedown', function () {
    savedMap.value = mapToStr();
    data = canvas.toDataURL();
    p = document.createElement('input');
    p.setAttribute('type', 'hidden');
    p.setAttribute('name', 'data');
    p.setAttribute('value', data);
    form.appendChild(p);
});

