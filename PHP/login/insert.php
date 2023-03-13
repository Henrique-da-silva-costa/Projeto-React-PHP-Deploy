<?php
require_once '../banco.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$email = filter_var($dados->email, FILTER_SANITIZE_EMAIL);
$senha = filter_var($dados->senha);

$select = $conn->prepare("SELECT * FROM user WHERE email = :email and senha = :senha");

$select->bindParam(":email", $email);
$select->bindParam(":senha", $senha);

$select->execute();

$user = $select->fetchAll();

$insert = $conn->prepare('INSERT INTO user (senha , email) VALUES (:senha, :email) ');

$insert->bindParam(":email", $email);
$insert->bindParam(":senha", $senha);


if ($user) {
    echo (json_encode('existe'));
} else {
    echo (json_encode('false'));
    $insert->execute();
}
