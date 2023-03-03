<?php

require_once '../banco.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$titulo = $_POST['titulo'];
// $dados->titulo = filter_var($dados->titulo);
// $dados->descricao = filter_var($dados->descricao);
$descricao = $_POST['descricao'];

print_r(isset($_FILES['img']));
$extensao = strtolower(substr($_FILES['img']['name'], -4));
$novo_nome = md5(time()) . $extensao;


$urlImg = 'http://localhost:1999/admin/imgs/' . $novo_nome;

$diretorio = 'imgs/';
move_uploaded_file($_FILES['img']['tmp_name'], $diretorio . $novo_nome);

$insert = $conn->prepare("INSERT INTO img ( img , titulo , descricao) VALUES (:img , :titulo , :descricao)");

$insert->bindParam(':titulo', $titulo,);
$insert->bindParam(':descricao', $descricao);
$insert->bindParam(':img', $urlImg);

if ($_FILES['img'] and $titulo and $descricao) {

    $insert->execute();
}
