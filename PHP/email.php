<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT,DELETE');
header("Access-Control-Allow-Headers: Origin,Accept,AccountKey,x-requested-with, Content-Type, origin, authorization, accept, client-security-token, host, date, cookie, cookie2");


$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$titulo = filter_var($dados->titulo);
$msg = filter_var($dados->msg);

if ($titulo and $msg) {
    $to = "henriquedasilvacosta@live.com";
    $subject = "$titulo";
    $message = "$msg";

    $headers = "From:ex@ex.com.br \r\n";
    $headers .= "Reply-To: ex@ex.com.br\r\n";
    $headers .= "CC: ex@ex.com.br\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    mail($to, $subject, $message, $headers);

    echo 'ok';
}
