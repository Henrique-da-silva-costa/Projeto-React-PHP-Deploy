<?php

require_once '../banco.php';

require  '../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__FILE__, 2));
$dotenv->load();

$autorization = $_SERVER["HTTP_AUTHORIZATION"];

$token = str_replace('Bearer', '', $autorization);

try {
    $decoded = JWT::decode($token, $_SERVER['KEY'], array_keys(JWT::$supported_algs));
    echo json_encode($decoded);
} catch (\Throwable $e) {
    if ($e->getMessage() == "Expired token") {
        die("EXPIRED");
    }
    // echo json_encode($e->getMessage());
}
