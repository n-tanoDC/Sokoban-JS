<?php
$title = 'Sokoban';
require_once 'includes/header.php';

if(isset($_POST['lvl'])){
    $lvl = $_POST['lvl'];
    $life = $_POST['life'];
} else {
    $lvl = 1;
    $life = 3;
}
?>

<h1 id="lvl-title">Niveau <?= $lvl ?></h1>

<div id="game_screen">
    <?php
    $dom = new DOMDocument();

    loadMap($dom, $lvl);

    echo $dom->saveHTML();
    ?>
    <h2>Nombre de vie restantes : <?= $life ?></h2><br>
    <a href="index.php">Page d'accueil</a>
    <form id="data_form" method="post" action="game.php">
        <input id="life_input" type="hidden" name="life" value="<?= $life ?>">
        <input id="lvl_input" type="hidden" name="lvl" value="<?= $lvl ?>">
    </form>
</div>
<?php getFooter(['html2canvas.js', 'functions.js', 'game.js']);
