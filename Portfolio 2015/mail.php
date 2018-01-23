<?php
 
$from = "From: ". $_POST['email'] ."";
$to = "bewerbung@jasscript.de";
$betreff = "Antwort auf Bewerbung";
 
$firma = $_POST['firma'];	   
$nachname = $_POST['nachname'];			   
$vorname = $_POST['vname'];
$email = $_POST['email'];
$telefon = $_POST['telefon'];
$text = $_POST['check1']; 

$message =  "Antwort.  \n"
               . "Der eingegebenen Daten Lautet: ". $firma ."\n". $nachname ."\n". $vorname ."\n"
			   . $email ."\n". $telefon ."\n". $text ."\n";
 
if(!mail($to, $betreff, $message, $from)) {
    echo "Fehler beim Senden der Mail!";
    exit;
    }
    else {
    echo "Mail erfolgreich gesendet!";
    }
 
?>
 