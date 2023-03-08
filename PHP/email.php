<?php

$to = "xbox_2013@outlook.com.br";
$subject = "Assunto do email";
$message = "Corpo do email";

$headers = "From: henriquedasilvacosta@live.com\r\n";
$headers .= "Reply-To: remetente@example.com\r\n";
$headers .= "CC: copia@example.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

mail($to, $subject, $message, $headers);

echo 'ok';
