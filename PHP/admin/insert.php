<?php

require_once '../banco.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$titulo = $_POST['titulo'];
// $dados->titulo = filter_var($dados->titulo);
// $dados->descricao = filter_var($dados->descricao);
$descricao = $_POST['descricao'];


$get = $conn->prepare('SELECT * FROM img ');

$pdr = "/^[a-z 0-9 à-ú À-Ú]+$/i";

// print_r(isset($_FILES['img']));
$extensao = strtolower(substr($_FILES['img']['name'], -4));
$novo_nome = md5(time()) . $extensao;


$urlImg = 'https://henriquedeveloper.com.br/PHP/admin/imgs/' . $novo_nome;

$diretorio = 'imgs/';
move_uploaded_file($_FILES['img']['tmp_name'], $diretorio . $novo_nome);

$insert = $conn->prepare("INSERT INTO img ( img , titulo , descricao) VALUES (:img , :titulo , :descricao)");

$insert->bindParam(':titulo', $titulo,);
$insert->bindParam(':descricao', $descricao);
$insert->bindParam(':img', $urlImg);

if ($_FILES['img'] and preg_match($pdr, $titulo) and preg_match($pdr, $descricao) and count($get) < 2) {
    $insert->execute();
    print_r(json_encode(true));
}
else{
    print_r(json_encode(false));
}