let selectedTile = document.querySelector('#selected_tile'),

    box = document.querySelector('#box').addEventListener('click', function(){selectedTile.className = 'box'}),
    wall = document.querySelector('#wall').addEventListener('click', function(){selectedTile.className = 'wall'}),
    boxOK = document.querySelector('#box_ok').addEventListener('click', function(){selectedTile.className = 'box_ok'}),
    mario = document.querySelector('#mario').addEventListener('click', function(){selectedTile.className = 'mario_down'}),
    goal = document.querySelector('#goal').addEventListener('click', function(){selectedTile.className = 'goal'}),

    map = document.querySelectorAll('td'),

    eraserMode = false, clicGauche = false;

for (let i = 0 ; i < map.length ; i++) {
    map[i].addEventListener('mousedown', function (e) {
        if (e.button === 0) {
            if(eraserMode){
                map[i].className = 'empty';
            } else {
                map[i].className = selectedTile.className;
            }
            clicGauche = true;
        } else if (e.button === 2) {
            eraserMode = !eraserMode;
        }
    });
    map[i].addEventListener('mouseup', function(){
        clicGauche = false;
    });
    map[i].addEventListener('mouseover', function(){
        if(clicGauche && !eraserMode){
            map[i].className = selectedTile.className;
        } else if(clicGauche && eraserMode){
            map[i].className = 'empty';
        }
    });
    map[i].addEventListener('contextmenu', function (e) {
        e.preventDefault();
    })
}

document.addEventListener('mousemove', function (e) {
    selectedTile.style.top = '' + e.clientY + 'px';
    selectedTile.style.left = '' + e.clientX + 'px';
});



document.addEventListener('keyup', function (e) {
    switch (e.code) {
        case 'Space' :
            if (selectedTile.style.display === 'none') {
                selectedTile.style.display = 'block';
            } else {
                selectedTile.style.display = 'none';
            }
            break;
    }
});

