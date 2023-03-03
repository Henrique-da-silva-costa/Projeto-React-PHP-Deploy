<?php

require_once '../banco.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



$select = $conn->prepare('SELECT * FROM dados');

$select->execute();

$dados = $select->fetchAll();

print_r(json_encode($dados));
