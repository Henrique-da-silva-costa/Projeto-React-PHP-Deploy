<?php

require_once '../banco.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$get = $conn->prepare('SELECT * FROM user');

$get->execute();

$all = $get->fetchAll();

print_r(json_encode($all));
