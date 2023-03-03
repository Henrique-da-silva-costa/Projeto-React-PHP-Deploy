<?php

require_once '../banco.php';

$id = $_GET['id'];

$delete = $conn->prepare("DELETE FROM dados WHERE id = $id");

$delete->execute();
