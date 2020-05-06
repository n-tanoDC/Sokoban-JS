<?php
$title = 'Sokoban';
require_once 'includes/header.php' ?>
<div id="game_screen">
    <?php

    if(isset($_GET['lvl'])){
        $lvl = $_GET['lvl'];
    } else {
        $lvl = 1;
    }

    $dom = new DOMDocument();

    loadMap($dom, $lvl);

    echo $dom->saveHTML();
    ?>
</div>
<?php getFooter(['html2canvas.js', 'functions.js', 'game.js']);
