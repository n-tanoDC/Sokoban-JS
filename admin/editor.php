<?php
$title = 'Editeur';
require_once __DIR__ . "/../includes/header.php";
?>

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
            <button id="save_button">Sauvegarder</button>
        </form>
        <div id="selected_tile" class="wall"></div>
    </div>
<div style="display: flex">
    <div id="goal" class="goal tile"> </div>
    <div id="wall" class="wall tile"> </div>
    <div id="box" class="box tile"> </div>
    <div id="box_ok" class="box_ok tile"> </div>
    <div id="mario" class="mario_down tile"> </div>
</div>
<?php getFooter(['html2canvas.js', 'functions.js', 'editor.js']);