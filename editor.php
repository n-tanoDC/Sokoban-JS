<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sokoban JS</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<div id="game_screen">
    <?php
    include 'functions.php';

    $dom = new DOMDocument();

    loadMap($dom, false);

    echo $dom->saveHTML();
    ?>
    <div id="selected_tile" class="wall tile"></div>
    <a href="index.php">Index</a>
    <label><input type="checkbox">Eraser mode</label>
</div>
<div>
    <div id="goal" class="goal tile"> </div>
    <div id="wall" class="wall tile"> </div>
    <div id="box" class="box tile"> </div>
    <div id="box_ok" class="box_ok tile"> </div>
    <div id="mario" class="mario_down tile"> </div>
</div>
<script src="js/functions.js"></script>
<script src="js/editor.js"></script>
</body>
</html>