<?php
// Colocar na tag form os seguintes atributos: <form method="post" action="enviar.php">

$para = "natalia@playmidiapublicidade.com.br"; // Mudar o e-mail para o destinatário
$assunto = "Formulário de Contato"; // Assunto do E-mail
$mensagem = "<strong>Nome: </strong>".$_POST['name']; // Campos do formulário. Colocar o equivalente no atributo name do campo.
$mensagem .= "<br><strong>E-mail: </strong>".$_POST['email']; // Campos do formulário. Colocar o equivalente no atributo name do campo.
$mensagem .= "<br><strong>Telefone: </strong>".$_POST['phone']; // Campos do formulário. Colocar o equivalente no atributo name do campo.
$mensagem .= "<br><strong>Assunto: </strong>".$_POST['assunto']; // Campos do formulário. Colocar o equivalente no atributo name do campo.
$mensagem .= "<br><strong>Mensagem: </strong>".$_POST['mensagem']; // Campos do formulário. Colocar o equivalente no atributo name do campo.
$cabecalho =  "Content-Type:text/html; charset=UTF-8\n";
$cabecalho .= "From:  Contato pelo Site <natalia@playmidiapublicidade.com.br>\n"; // Mudar o e-mail para o destinatário
$cabecalho .= "X-Sender:  <natalia@playmidiapublicidade.com.br>\n"; // Mudar o e-mail para o destinatário
$cabecalho .= "X-Mailer: PHP  v".phpversion()."\n";
$cabecalho .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$cabecalho .= "Return-Path:  <natalia@playmidiapublicidade.com.br>\n"; // Mudar o e-mail para o destinatário
$cabecalho .= "MIME-Version: 1.0\n";


header("location:  index.html");
     
?>