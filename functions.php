<?php

require_once 'database.php';

function loadMap(DOMDocument $dom, float $lvl) {

    $table = $dom->createElement('table');
    $map = getMap($lvl);
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

function getMap(float $lvl) : string {
    global $connection;

    $query = "SELECT map FROM sokoban.lvl WHERE id = :lvl";

    $stmt = $connection->prepare($query);
    $stmt->bindValue(':lvl', $lvl);
    $stmt->execute();

    return $stmt->fetch()[0];
}

function updateMap(string $map, string $lvl, string $minPath) : bool {
    global $connection;

    $query = "
        UPDATE sokoban.lvl
        SET map = :map, min_path = :minPath
        WHERE id = :lvl";

    $stmt = $connection->prepare($query);
    $stmt->bindValue(':map', $map);
    $stmt->bindValue(':minPath', $minPath);
    $stmt->bindValue(':lvl', $lvl);

    return $stmt->execute();
}

function getFooter(array $scripts = []) {
    foreach ($scripts as $script) {
        echo '<script src="js/' . $script .'"></script>';
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