<?php
include 'functions.php';

if(!empty($_POST['lvl']) && !empty($_POST['saved_map'])){
    echo 'POST OK';
    $lvl = $_POST['lvl'];
    $content = $_POST['saved_map'];
    saveLvl('levels.php', $lvl, $content);
}
?>

<a href="index.php">Jouer</a>

