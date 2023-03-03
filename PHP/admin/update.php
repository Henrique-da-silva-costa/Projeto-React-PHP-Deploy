<?php

require_once "../banco.php";

$id = $_GET['id'];

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

// $dados->titulo = filter_var($dados->titulo);
// $dados->descricao = filter_var($dados->descricao);

$titulo = $_POST['titulo'];
$descricao = $_POST['descricao'];

$select = $conn->prepare("SELECT * FROM dados WHERE id = $id");

if ($id) {
    $select->execute();

    $infos = $select->fetchAll();
}

print_r(isset($_FILES['img']));
$extensao = strtolower(substr($_FILES['img']['name'], -4));
$novo_nome = md5(time()) . $extensao;


$urlImg = 'http://localhost:1999/admin/imgs/' . $novo_nome;

$diretorio = 'imgs/';
move_uploaded_file($_FILES['img']['tmp_name'], $diretorio . $novo_nome);

$update = $conn->prepare("UPDATE img set titulo = :titulo, descricao = :descricao , img = :img WHERE id = $id ");

$update->bindParam(":titulo", $titulo);
$update->bindParam(":descricao", $descricao);
$update->bindParam(":img", $urlImg);
if ($titulo and $descricao) {
    $update->execute();
}
