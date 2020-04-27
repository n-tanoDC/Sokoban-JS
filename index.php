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

    loadMap($dom);

    echo $dom->saveHTML();
    ?>
</div>
<a href="editor.php">Editeur</a>
<script src="js/functions.js"></script>
<script src="js/game.js"></script>
</body>
</html>