<?php

require_once '../banco.php';

$id = $_GET['id'];

$select = $conn->prepare("SELECT * FROM dados WHERE id = $id");

$select->execute();

$get = $select->fetchAll();

print_r(json_encode($get));
