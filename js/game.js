let map = document.querySelectorAll('td');
let mapSize = Math.sqrt(map.length);
let player;
let i, up1, up2, down1, down2, left1, left2, right1, right2;

addEventListener('keydown', function (e) {
    for (i = 0; i < map.length; i++) {
        if (map[i].className.includes('mario')) {
            player = map[i];
            up1 = map[i - mapSize];
            up2 = map[i - mapSize*2];
            down1 = map[i + mapSize];
            down2 = map[i + mapSize*2];
            left1 = map[i - 1];
            left2 = map[i - 2];
            right1 = map[i + 1];
            right2 = map[i + 2]
        }
    }

    switch (e.code) {
        case 'ArrowUp':
            if (up1.className === 'wall') {
                player.className = "mario_up";
                break;
            }
            if ((up1.className === 'box' || up1.className === 'box_ok') && (up2.className === 'box' || up2.className === 'box_ok' || up2.className === 'wall')) {
                player.className = "mario_up";
                break;
            }
            if (up1.className === 'box' && (up2.className !== 'box_ok' && up2.className !== 'box' && up2.className !== 'wall')) {
                player.className = 'empty';
                up1.className = 'mario_up';
                up2.className = 'box';
            }
            player.className = "empty";
            up1.className = "mario_up";
            break;
        case 'ArrowDown':
            if (down1.className === 'wall') {
                player.className = "mario_down";
                break;
            }
            if ((down1.className === 'box' || down1.className === 'box_ok') && (down2.className === 'box' || down2.className === 'box_ok' || down2.className === 'wall')) {
                player.className = "mario_down";
                break;
            }
            if (down1.className === 'box' && (down2.className !== 'box_ok' && down2.className !== 'box' && down2.className !== 'wall')) {
                player.className = 'empty';
                down1.className = 'mario_down';
                down2.className = 'box';
            }
            player.className = "empty";
            down1.className = "mario_down";
            break;
        case 'ArrowLeft':
            if (left1.className === 'wall') {
                player.className = "mario_left";
                break;
            }
            if ((left1.className === 'box' || left1.className === 'box_ok') && (left2.className === 'box' || left2.className === 'box_ok' || left2.className === 'wall')) {
                player.className = "mario_left";
                break;
            }
            if (left1.className === 'box' && (left2.className !== 'box_ok' && left2.className !== 'box' && left2.className !== 'wall')) {
                player.className = 'empty';
                left1.className = 'mario_left';
                left2.className = 'box';
            }
            player.className = "empty";
            left1.className = "mario_left";
            break;
        case 'ArrowRight':
            if (right1.className === 'wall') {
                player.className = "mario_right";
                break;
            }
            if ((right1.className === 'box' || right1.className === 'box_ok') && (right2.className === 'box' || right2.className === 'box_ok' || right2.className === 'wall')) {
                player.className = "mario_right";
                break;
            }
            if (right1.className === 'box' && (right2.className !== 'box_ok' && right2.className !== 'box' && right2.className !== 'wall')) {
                player.className = 'empty';
                right1.className = 'mario_right';
                right2.className = 'box';
            }
            player.className = "empty";
            right1.className = "mario_right";
            break;
    }
});