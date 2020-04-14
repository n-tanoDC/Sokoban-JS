function movePlayer(player, direction){

    if (direction[0].className === 'wall') {
        player.className = "mario_" + direction[2];
    } else if ((direction[0].className === 'box' || direction[0].className === 'box_ok') && (direction[1].className === 'box' || direction[1].className === 'box_ok' || direction[1].className === 'wall')) {
        player.className = "mario_" + direction[2];
    } else if ((direction[0].className === 'box' || direction[0].className === 'box_ok') && (direction[1].className !== 'box_ok' && direction[1].className !== 'box' && direction[1].className !== 'wall')) {
        moveBox(player, direction);
    } else if (direction[0].className === 'goal') {
        direction[0].className = "mario_" + direction[2] + ' goal blink';
        player.className = 'empty';
    } else {
        if (player.className.includes('goal')) {
            player.className = 'goal';
        } else {
            player.className = 'empty';
        }
        direction[0].className = "mario_" + direction[2];
    }

    if (player.className.includes('goal')) {

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
        direction[0].className = 'mario_' + direction[2];
    } else if (direction[0].className === 'box_ok') {
        direction[0].className = 'mario_' + direction[2] + ' goal blink';
        direction[1].className = 'box';
    }

}