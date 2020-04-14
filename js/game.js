let map = document.querySelectorAll('td'),
    mapSize = Math.sqrt(map.length), player, i,
    up = [], down = [], left = [], right = [];

addEventListener('keydown', function (e) {
    for (i = 0; i < map.length; i++) {
        if (map[i].className.includes('mario')) {
            player = map[i];
            up = [map[i - mapSize], map[i - mapSize * 2], 'up'];
            down = [map[i + mapSize], map[i + mapSize*2], 'down'];
            left = [map[i - 1], left2 = map[i - 2], 'left'];
            right = [map[i + 1], map[i + 2], 'right'];
        }
    }

    switch (e.code) {
        case 'ArrowUp':
            movePlayer(map, player, up);
            break;
        case 'ArrowDown':
            movePlayer(map, player, down);
            break;
        case 'ArrowLeft':
            movePlayer(map, player, left);
            break;
        case 'ArrowRight':
            movePlayer(map, player, right);
            break;
    }
});