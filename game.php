<?php
$title = 'Sokoban';
require_once 'includes/header.php';

if(isset($_GET['lvl'])){
    $lvl = $_GET['lvl'];
} else {
    $lvl = 1;
}
?>
<h1 id="lvl-title">Niveau <?= $lvl ?></h1>
<div id="game_screen">
    <?php
    $dom = new DOMDocument();

    loadMap($dom, $lvl);

    echo $dom->saveHTML();
    ?>
</div>
<?php getFooter(['html2canvas.js', 'functions.js', 'game.js']);
