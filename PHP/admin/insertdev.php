<?php

require_once '../banco.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$titulo = filter_var($dados->titulo);
$descricao = filter_var($dados->descricao);

$pdr = "/^[a-z 0-9 à-ú À-Ú]+$/i";

$get = $conn->prepare('SELECT * FROM img ');

// preg_match($pdr, $valor);

$insert = $conn->prepare("INSERT INTO dados (titulo , descricao) VALUES (:titulo , :descricao)");

$insert->bindParam(':titulo', $titulo);
$insert->bindParam(':descricao', $descricao);

if (preg_match($pdr , $titulo) and preg_match($pdr, $descricao) and count($get) < 2) {

    $insert->execute();
}