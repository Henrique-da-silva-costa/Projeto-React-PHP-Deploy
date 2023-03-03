<?php

require_once "../banco.php";

$id = $_GET['id'];

$get = $conn->prepare("SELECT * FROM img WHERE id = $id");

$get->execute();

$imgs = $get->fetchAll();

print_r(json_encode($imgs));
