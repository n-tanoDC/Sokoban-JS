<?php

$title = 'Accueil';

require_once 'includes/header.php';
?>
<div id="menu">
    <div class="header">
        <img src="sprites/box.png">
        <h1>SOKOBAN</h1>
        <img src="sprites/box.png">
    </div>

    <ul>
        <li><h2><a href="game.php?lvl=1">Jouer</a></h2></li>
        <li><h2><a href="#">Commandes</a></h2></li>
    </ul>

    <h3><a href="admin/admin.php">Admin</a></h3>
</div>
<?php getFooter();