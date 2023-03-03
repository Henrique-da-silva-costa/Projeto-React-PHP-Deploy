<?php

require_once '../banco.php';

$id = $_GET['id'];

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$titulo = filter_var($dados->titulo);
$descricao = filter_var($dados->descricao);
$select = $conn->prepare("SELECT * FROM dados WHERE id = $id");

if ($id) {
    $select->execute();

    $infos = $select->fetchAll();
}
$update = $conn->prepare("UPDATE dados SET titulo = :titulo , descricao = :descricao WHERE id = $id");

$update->bindParam(':titulo', $titulo);
$update->bindParam(':descricao', $descricao);

if ($titulo and $descricao) {
    $update->execute();
}
