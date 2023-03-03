<?php

require_once '../banco.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$dados->titulo = filter_var($dados->titulo);
$dados->descricao = filter_var($dados->descricao);

$insert = $conn->prepare("INSERT INTO dados (titulo , descricao) VALUES (:titulo , :descricao)");

$insert->bindParam(':titulo', $dados->titulo);
$insert->bindParam(':descricao', $dados->descricao);

if ($dados->titulo and $dados->descricao) {

    $insert->execute();
}
