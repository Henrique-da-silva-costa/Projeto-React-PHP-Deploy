<?php
require_once '../banco.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$dados->email = filter_var($dados->email);
$dados->senha = filter_var($dados->senha);


$insert = $conn->prepare('INSERT INTO user (senha , email) VALUES (:senha, :email) ');

$insert->bindParam(":email", $dados->email,);
$insert->bindParam(":senha", $dados->senha,);


if ($dados->email and $dados->senha) {
    $insert->execute();
}
