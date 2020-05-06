<?php
require_once __DIR__ . '/../functions.php';

$map = $_POST['map'];
$lvl = $_POST['lvl'];

// Get the img-data from the html Form

$data = str_replace('data:image/png;base64,', '', $_POST['data']);

$im = base64_decode($data);

// Create the img resource
$img = imagecreatefromstring($im);
$filename = 'mins/map-min-lvl' . $lvl . '.jpeg';

$created = imagepng($img, $filename);

if($created){
    $updated = updateMap($map, $lvl, $filename);
}

if($updated) {
    header('Location: admin.php');
}


