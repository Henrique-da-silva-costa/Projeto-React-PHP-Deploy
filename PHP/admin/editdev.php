<?php

require_once '../banco.php';

$id = $_GET['id'];

$edit = $conn->prepare("SELECT * FROM dados WHERE id = $id");

if ($id) {
    $edit->execute();

    $infos = $edit->fetchAll();
}

print_r(json_encode($infos));
