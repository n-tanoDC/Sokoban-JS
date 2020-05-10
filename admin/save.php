<?php
require_once __DIR__ . '/../functions.php';

$map = $_POST['map'];
$lvl = $_POST['lvl'];
$width = $_POST['width'];
$height = $_POST['height'];

// Gets the img-data from the html Form
$data = str_replace('data:image/png;base64,', '', $_POST['data']);
$im = base64_decode($data);

// Creates the img resource
$img = imagecreatefromstring($im);

// Defines the path and filename
$filename = 'mins/map-min-lvl' . $lvl . '.png';

// Deletes the previous map png
unlink($filename);

// Creates the png file and pastes it in the right folder
imagepng($img, $filename);

// Updates the map in the database
updateMap($map, $width, $height, $lvl, $filename);

// Redirect to the admin page
header('Location: admin.php');



