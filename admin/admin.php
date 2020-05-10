<?php
$title = 'Admin';
require_once __DIR__ . "/security.php";
require_once __DIR__ . "/../includes/header.php";
?>

<div class="header">
    <h1>Gestion des niveaux</h1>
    <div>
        <a href="../index.php">Accueil</a><br>
        <a href="logout.php">Déconnexion</a>
    </div>
</div>

<section class="minimaps">
    <?php for($i = 1 ; $i <= 10 ; $i++) : ?>
        <div class="lvl_card">
            <img src="mins/map-min-lvl<?= $i?>.png"><br>
            <a href="editor.php?lvl=<?= $i ?>">Editer le niveau <?= $i ?></a><br>
            <a href="../game.php?lvl=<?= $i ?>">Jouer</a>
        </div>
    <?php endfor; ?>
</section>
<?php getFooter();
