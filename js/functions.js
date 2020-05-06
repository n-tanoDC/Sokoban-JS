function movePlayer(player, direction){

    if (direction[0].className === 'wall') {
        if (player.classList.contains('goal')) {
            player.className = 'player_' + direction[2] + ' goal blink';
        }
        else {
            player.className = "player_" + direction[2];
        }
    } else if ((direction[0].className === 'box' || direction[0].className === 'box_ok') && (direction[1].className === 'box' || direction[1].className === 'box_ok' || direction[1].className === 'wall')) {
        player.className = "player_" + direction[2];
    } else if ((direction[0].className === 'box' || direction[0].className === 'box_ok') && (direction[1].className !== 'box_ok' && direction[1].className !== 'box' && direction[1].className !== 'wall')) {
        moveBox(player, direction);
    } else if (direction[0].className === 'goal') {
        direction[0].className = "player_" + direction[2] + ' goal blink';
        player.className = 'empty';
    } else {
        if (player.classList.contains('goal')) {
            player.className = 'goal';
        } else {
            player.className = 'empty';
        }
        direction[0].className = "player_" + direction[2];
    }
}

function moveBox(player, direction) {
    if (player.className.includes('goal')) {
        player.className = 'goal';
    } else {
        player.className = 'empty';
    }
    if (direction[0].className === 'box') {
        if (direction[1].className === 'goal') {
            direction[1].className = 'box_ok';
        } else  {
            direction[1].className = 'box';
        }
        direction[0].className = 'player_' + direction[2];
    } else if (direction[0].className === 'box_ok') {
        direction[0].className = 'player_' + direction[2] + ' goal blink';
        direction[1].className = 'box';
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