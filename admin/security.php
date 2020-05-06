<?php
require_once __DIR__ . "/../functions.php";

// Démarrer la session si elle n'a pas été démarrée
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}


// Vérifier si l'utilisateur tente de se connecter
if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Vérifier si l'utilisateur existe en base de données
    $user = getUserInfos($username, $password);
    if (isset($user["id"])) {
        $_SESSION["id"] = $user["id"]; // Sauvegarder dans la session l'id de l'utilisateur
    } else {
        $_SESSION['error'] = 1;
    }
} else if (isset($_SESSION["id"])) {
    // Si utilisateur déjà connecté, on récupère ses données en base de données
    $user = getOneRow("user", $_SESSION["id"]);
}

// Vérifier si l'utilisateur est connecté
if(!isset($_SESSION["id"])) {
    // Rediriger vers le formulaire de connexion
    header("Location: login.php");
}
