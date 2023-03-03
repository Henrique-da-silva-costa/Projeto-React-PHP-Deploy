<?php

require_once '../banco.php';

// $id = file_get_contents("php://input");

// $id = json_decode($id);

$id = $_GET['id'];

$delete = $conn->prepare("DELETE FROM img WHERE id = $id");

$delete->execute();
