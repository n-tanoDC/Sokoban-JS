function movePlayer(player, d){

    if (d[0].className === 'wall') {
        if (player.classList.contains('goal')) {
            player.className = 'player_' + d[2] + ' goal blink';
        }
        else {
            player.className = "player_" + d[2];
        }
    } else if ((d[0].className === 'box' || d[0].className === 'box_ok') && (d[1].className === 'box' || d[1].className === 'box_ok' || d[1].className === 'wall')) {
        if (player.classList.contains('goal')) {
            player.className = 'player_' + d[2] + ' goal blink';
        }
        else {
            player.className = "player_" + d[2];
        }
    } else if (d[0].className === 'box' || d[0].className === 'box_ok') {
        moveBox(player, d);
    } else if (d[0].className === 'goal') {
        player.className = player.classList.contains('goal') ? 'goal' : 'empty';
        d[0].className = "player_" + d[2] + ' goal blink';
    } else {
        if (player.classList.contains('goal')) {
            player.className = 'goal';
        } else {
            player.className = 'empty';
        }
        d[0].className = "player_" + d[2];
    }
}

function moveBox(player, d) {
    player.className = player.classList.contains('goal') ? 'goal' : 'empty';

    if (d[1].className === 'goal') {
        d[1].className = 'box_ok';
        d[0].className = d[0].className === 'box_ok' ? 'player_' + d[2] + ' goal blink' : 'player_' + d[2];
    } else  {
        d[1].className = 'box';
        d[0].className = d[0].className === 'box_ok' ? 'player_' + d[2] + ' goal blink' : 'player_' + d[2];
    }
}

function mapToStr() {
    let map = document.querySelectorAll('td');
    let strMap = '';
    for(let i = 0 ; i < map.length ; i ++){
        switch(map[i].className){
            case 'wall':
                strMap += '1';
                break;
            case 'box':
                strMap += '2';
                break;
            case 'goal':
                strMap += '3';
                break;
            case 'player_down':
                strMap += '4';
                break;
            case 'box_ok':
                strMap += '5';
                break;
            default:
                strMap += '0';
        }
    }
    return strMap;
}

function voidMap() {
    let map = document.querySelectorAll('td');
    for(let i = 0 ; i < map.length ; i ++){
        map[i].className = 'empty';
    }
}

function changeHeight(map, height){
    let currentHeight = document.querySelectorAll('tr').length,
        currentWidth = document.querySelectorAll('td').length/currentHeight,
        hDiff = height - currentHeight,
        i, j;

    if (hDiff > 0) {
        for (i = 0 ; i < hDiff ; i++){
            let newRow = map.firstElementChild.insertRow(-1);
            for (j = 0 ; j < currentWidth ; j++) {
                newRow.insertCell();
            }
        }
    } else if (hDiff < 0) {
        hDiff = Math.abs(hDiff);
        for (i = 0 ; i < hDiff ; i++){
            map.firstElementChild.deleteRow(-1);
        }
    }
}

function changeWidth(map, width) {
    let trs = document.querySelectorAll('tr'),
        currentWidth = document.querySelectorAll('td').length/trs.length,
        wDiff = width - currentWidth,
        i, j;

    if (wDiff > 0) {
        for (i = 0 ; i < trs.length ; i++){
            for (j = 0 ; j < wDiff ; j++){
                trs[i].insertCell();
            }
        }
    } else if (wDiff < 0) {
        wDiff = Math.abs(wDiff);
        for (i = 0 ; i < trs.length ; i++){
            for (j = 0 ; j < wDiff ; j++){
                trs[i].deleteCell(-1);
            }
        }
    }

}

function setListeners() {
    let i,
        map = document.querySelectorAll('td');
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
}