<?php

function loadMap(DOMDocument $dom, bool $game = true, int $lvl = 1) {
    $size = 12;
    $mapsFile = fopen('niveaux.txt', 'r');
    fseek($mapsFile, (($size*$size+2)*($lvl-1)));
    $map = str_split(fgets($mapsFile, $size*$size+1));
    $table = $dom->createElement('table');

    for ($i = 0 ; $i < $size ; $i++) {
        $tr = $dom->createElement('tr');
        for ($j = 0 ; $j < $size ; $j++) {
            $td = $dom->createElement('td');
            $tr->appendChild($td);
        }
        $table->appendChild($tr);
    }

    $dom->appendChild($table);

    if($game) {
        $tds = $table->getElementsByTagName('td');
        for($i = 0 ; $i < $tds->length ; $i++) {
            switch ($map[$i]) {
                case '0':
                    $tds[$i]->setAttribute('class', 'empty');
                    break;
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
}