<?php
$title = 'Editeur';
require_once __DIR__ . "/../includes/header.php";
?>

<main>
    <div id="tiles">
        <div class="goal tile"> </div>
        <div class="wall tile"> </div>
        <div class="box tile"> </div>
        <div class="box_ok tile"> </div>
        <div class="player_down tile"> </div>
    </div>
    <div id="game_screen">
        <form action="save.php" method="post">
            <input type="hidden" name="map" id="saved_map">
            <?php
            $lvl = isset($_GET['lvl']) ? $_GET['lvl'] : 1;

            $dom = new DOMDocument();

            loadMap($dom, $lvl);

            echo $dom->saveHTML();
            ?>
            <input type="hidden" value="<?= $lvl ?>" name="lvl">

            <label for="map-width">Largeur</label>
            <input type="number" id="map-width" name="width">

            <label for="map-height">Hauteur</label>
            <input type="number" id="map-height" name="height"><br>

            <button id="save_button">Sauvegarder</button>
        </form>
    </div>
</main>

<?php getFooter(['html2canvas.js', 'functions.js', 'editor.js'], true);