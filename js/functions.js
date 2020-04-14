function movePlayer(map, player, direction){

    if (direction[0].className === 'wall') {
        player.className = "mario_" + direction[2];
    } else if ((direction[0].className === 'box' || direction[0].className === 'box_ok') && (direction[1].className === 'box' || direction[1].className === 'box_ok' || direction[1].className === 'wall')) {
        player.className = "mario_" + direction[2];
    } else if (direction[0].className === 'box' && (direction[1].className !== 'box_ok' && direction[1].className !== 'box' && direction[1].className !== 'wall')) {
        player.className = 'empty';
        direction[0].className = 'mario_' + direction[2];
        direction[1].className = 'box';
    } else {
        player.className = "empty";
        direction[0].className = "mario_" + direction[2];
    }
}