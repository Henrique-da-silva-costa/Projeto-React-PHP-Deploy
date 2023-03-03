<?php

require_once "../banco.php";

$get = $conn->prepare('SELECT * FROM img ');

$get->execute();

$imgs = $get->fetchAll();

print_r(json_encode($imgs));
