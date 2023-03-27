<?php


use Firebase\JWT\JWT;

// use Dotenv\Dotenv;

require  '../vendor/autoload.php';

require_once '../banco.php';
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__FILE__, 2));
$dotenv->load();


$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$dados->email = filter_var($dados->email ,FILTER_SANITIZE_EMAIL);
$dados->senha = filter_var($dados->senha);

$pdr = "/^[a-z0-9]+$/i";



$users = $conn->prepare('SELECT * FROM user WHERE email = :email and senha = :senha');

$users->bindParam(":email", $dados->email);
$users->bindParam(":senha", $dados->senha);

$users->execute();

if(preg_match($pdr , $dados->senha)){
    
$user = $users->fetchAll();
}


$payload = [
    "exp" => time() + 10,
    "iat" => time(),
    "email" => $dados->email,
    "senha" => $dados->senha
];

if (!$user) {
    null;
} else {
    $encode = JWT::encode($payload, $_ENV['KEY'], 'HS256');

    print_r(json_encode($encode));
}