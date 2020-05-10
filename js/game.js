// Get URL parameters to know the current LVL
/*let url_string = window.location.href;
let url = new URL(url_string);
let lvl = url.searchParams.get("lvl");*/

let lvl = document.querySelector('#lvl_input'),
    life = document.querySelector('#life_input'),
    form = document.querySelector('#data_form'),
    map = document.querySelectorAll('td'),
    height = document.querySelectorAll('tr').length,
    width = map.length/height,
    player,
    i,
    win = false,
    up = [], down = [], left = [], right = [];

addEventListener('keydown', function (e) {
    // Get player position and whats around it
    for (i = 0; i < map.length; i++) {
        if (map[i].className.includes('player')) {
            player = map[i];
            up = [map[i - width], map[i - width * 2], 'up'];
            down = [map[i + width], map[i + width *2], 'down'];
            left = [map[i - 1], map[i - 2], 'left'];
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
        case 'Space':
            life.value--;
            if (life.value > 0) {
                form.submit();
            } else {
                alert('Game Over !');
                location.replace('index.php');
            }
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
        if (lvl.value >= 10) {
            alert('Vous avez fini le jeu')
        } else {
            lvl.value++;
            form.submit();
        }
    }
});
