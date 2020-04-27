<?php

function loadMap(DOMDocument $dom, bool $game = true, int $lvl = 1) {

    $table = $dom->createElement('table');
    $allMaps = explode("\n", file_get_contents("levels.php"));
    $map = $allMaps[$lvl];
    $size = sqrt(strlen($map));

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
                case '5':
                    $tds[$i]->setAttribute('class', 'box_ok');
                    break;
            }
        }
    }
}

function saveLvl(string $file, float $lvl, string $content) {
    $toCopy = explode("\n", file_get_contents($file));
    $toCopy[$lvl] = $content;
    file_put_contents($file, implode("\n", $toCopy));
}