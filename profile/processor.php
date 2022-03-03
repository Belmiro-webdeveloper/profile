<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    echo "I'm inside";
  $subject = $_POST["subject"];
  $name = $_POST["name"];
  $body = $_POST["body"];
  $email = $_POST["email"];
  $to = "belmiromohlala34@gmail.com"; 
					
    

    $message = "
    <html>
    <head>
    <title>New Student</title>
  </head>
  <body style='background-color:#cccccc;padding:20px; border-radius:15px;'>
  <h1>Good day</h1>
  <p>:<strong>$name Sent:</strong> <br>
   $body
  </p>
  <p>Their email:$email</p>



  </body>

    </html>
    ";
    $headers = "MIME-version:1.0"."\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
    $headers .= "From:info@weball.co.za"."\r\n";

    mail($to,$subject,$message,$headers);
    header("location:index.html");

}