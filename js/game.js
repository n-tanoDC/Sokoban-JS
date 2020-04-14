let map = document.querySelectorAll('td'),
    mapSize = Math.sqrt(map.length), player, i, win = false,
    up = [], down = [], left = [], right = [];

addEventListener('keydown', function (e) {
    // Get player position and whats around it
    for (i = 0; i < map.length; i++) {
        if (map[i].className.includes('mario')) {
            player = map[i];
            up = [map[i - mapSize], map[i - mapSize * 2], 'up'];
            down = [map[i + mapSize], map[i + mapSize*2], 'down'];
            left = [map[i - 1], left2 = map[i - 2], 'left'];
            right = [map[i + 1], map[i + 2], 'right'];
        }
    }

    // Move player (or not) according to the key pressed
    switch (e.code) {
        case 'ArrowUp':
            movePlayer(player, up);
            break;
        case 'ArrowDown':
            movePlayer(player, down);
            break;
        case 'ArrowLeft':
            movePlayer(player, left);
            break;
        case 'ArrowRight':
            movePlayer(player, right);
            break;
    }
});

// After the player pressed a key, we check if he won

addEventListener('keyup', function(){
    for (i = 0 ; i < map.length ; i++) {
        win = true;
        if (map[i].className.includes('goal')) {
            win = false;
            break;
        }
    }

    if(win){
        alert('Vous avez gagné !');
        win = false;
    }
});
