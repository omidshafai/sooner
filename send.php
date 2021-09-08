<?php 
$ToEmail = 'info@monstertemplate.ir'; 
$EmailSubject = "Email: ".$_POST["subject"]."\n"; ; 
$mailheader = "From: ".$_POST["email"]."\n";
$mailheader .= "Reply-To: ".$_POST["email"]."\n";  
$MESSAGE_BODY = "Name: ".$_POST["name"]."\n"; 
$MESSAGE_BODY .= "Email: ".$_POST["email"]."\n"; 
$MESSAGE_BODY .= "Message: ".nl2br($_POST["message"])."\n"; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Error!"); 

header("Location: index.html");
?>

