<?php

require_once 'database.php';

function loadMap(DOMDocument $dom, float $lvl) {

    $table = $dom->createElement('table');
    $map = getMap($lvl);
    $mapStr = str_split($map['map']);
    $width = $map["width"];
    $height = $map["height"];

    for ($i = 0 ; $i < $height ; $i++) {
        $tr = $dom->createElement('tr');
        for ($j = 0 ; $j < $width ; $j++) {
            $td = $dom->createElement('td');
            $tr->appendChild($td);
        }
        $table->appendChild($tr);
    }

    $dom->appendChild($table);

    $tds = $table->getElementsByTagName('td');
    for($i = 0 ; $i < count($tds) ; $i++) {
        switch ($mapStr[$i]) {
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
                $tds[$i]->setAttribute('class', 'player_down');
                break;
            case '5':
                $tds[$i]->setAttribute('class', 'box_ok');
                break;
            default:
                $tds[$i]->setAttribute('class', 'wall');
        }
    }
}

function getMap(float $lvl) : array {
    global $connection;

    $query = "SELECT map, width, height FROM sokoban.lvl WHERE id = :lvl";

    $stmt = $connection->prepare($query);
    $stmt->bindValue(':lvl', $lvl);
    $stmt->execute();

    return $stmt->fetch();
}

function updateMap(string $map, int $width, int $height, string $lvl, string $minPath) : bool {
    global $connection;

    $query = "
        UPDATE sokoban.lvl
        SET map = :map, width = :width, height = :height, min_path = :minPath
        WHERE id = :lvl";

    $stmt = $connection->prepare($query);
    $stmt->bindValue(':map', $map);
    $stmt->bindValue(':minPath', $minPath);
    $stmt->bindValue(':lvl', $lvl);
    $stmt->bindValue(':width', $width);
    $stmt->bindValue(':height', $height);

    return $stmt->execute();
}

function getFooter(array $scripts = [], bool $admin = false) {
    foreach ($scripts as $script) {
        echo '<script src="' . (!$admin ? 'js/' : '../js/') . $script . '"></script>';
    }
    echo '
    </body>
    </html>';
}

function alert(string $message) {
    echo '<script>alert("' . $message . '")</script>';
}

function debug($variable, bool $die = false) {
    echo '<pre>';
    print_r($variable);
    echo '</pre>';

    if($die) {
        die;
    }
}

function getUserInfos(string $username, string $password) : array {
    global $connection;

    $query = "SELECT * FROM user WHERE username = :username";

    $stmt = $connection->prepare($query);
    $stmt->bindValue(":username", htmlentities($username));
    $stmt->execute();

    $user = $stmt->fetch();

    return !empty($user) && $user["password"] === $password ? $user : [];
}

function getOneRow(string $table, int $id) : array {
    global $connection;

    $query = "SELECT * FROM $table WHERE id = :id";

    $stmt = $connection->prepare($query);
    $stmt->bindValue(':id', $id);
    $stmt-> execute();

    return $stmt->fetch();
}