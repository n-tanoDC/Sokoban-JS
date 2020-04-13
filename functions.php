<?php

function loadMap(DOMDocument $dom) {
    $size = 12;
    $mapsFile = fopen('niveaux.txt', 'r');
    $map = str_split(fgets($mapsFile));
    $table = $dom->createElement('table');

    for ($i = 0 ; $i < $size ; $i++) {
        $tr = $dom->createElement('tr');
        for ($j = 0 ; $j < $size ; $j++) {
            $td = $dom->createElement('td');
            $tr->appendChild($td);
        }
        $table->appendChild($tr);
    }

    $tds = $table->getElementsByTagName('td');
    $dom->appendChild($table);

    for($i = 0 ; $i < $tds->length ; $i++) {
        switch ($map[$i]) {
            case '1':
                $tds[$i]->setAttribute('class', 'wall');
                break;
            case '2':
                $tds[$i]->setAttribute('class', 'box');
                break;
            case '3':
                $tds[$i]->setAttribute('class', 'goal');
                break;
            case '4':
                $tds[$i]->setAttribute('class', 'mario_down');
                break;
        }
    }
}