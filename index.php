<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<?php
include 'functions.php';

$dom = new DOMDocument();

loadMap($dom);

echo $dom->saveHTML();
?>

<script src="js/game.js"></script>
</body>
</html>