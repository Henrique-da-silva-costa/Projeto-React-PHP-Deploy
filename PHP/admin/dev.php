<?php

require_once '../banco.php';

$select = $conn->prepare('SELECT * FROM dados');

$select->execute();

$get = $select->fetchAll();

print_r(json_encode($get));
