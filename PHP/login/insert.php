<?php
require_once '../banco.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$email = filter_var($dados->email , FILTER_SANITIZE_EMAIL);
$senha = filter_var($dados->senha);

$lenSenha = strlen($senha);

$pdr = "/^[a-z0-9]+$/i";
    
$insert = $conn->prepare('INSERT INTO user (senha , email) VALUES (:senha, :email) ');

$insert->bindParam(":email", $email);
$insert->bindParam(":senha", $senha);

$select = $conn->prepare("SELECT * FROM user WHERE email = :email");

$select->bindParam(":email", $email);
$select->bindParam(":senha", $senha);

$select->execute();

$user = $select->fetchAll();

$msg = '';

if ($user || $lenSenha < 6 || !preg_match($pdr , $senha)) {
$msg = true;
} else {
$msg = false;
    $insert->execute();
}
echo json_encode($msg);
