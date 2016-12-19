<?php
	// Subject and email variables
	$emailSubject = 'Website Inquiry';
	$webMaster = 'teresali@usc.edu';

	// Gathering Data Variables
	$nameField = $_POST['name'];
	$emailField = $_POST['email'];
	$subjectField = $_POST['subject'];
	$messageField = $_POST['message'];

	$body = <<<EOD
<br><hr><br>
Email: $emailField <br>
Name: $nameField <br>
Subject: $subjectField
Message: $messageField <br>
EOD;

	$headers = "From: $emailField\r\n";
	$headers .= "Content-type: text/html\r\n";
	$success = mail($webMaster, $emailSubject, $body, $headers);


	// results rendered as HTML
	$theResults = <<<EOD
<html>
<p>THANK YOU SO MUCH</p>
</html>
EOD;
echo "$theResults";

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Teresa</title>
		<link rel="stylesheet" href="style.css" type="text/css"/>
		<link rel="stylesheet" href="contactStyle.css" type="text/css"/>
		<link rel="icon" href="icon.png">

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	</head>

	<body id="contactpage">

		<img id="cornerlogo" src="whitelogo.png" style="width: 100px; height:80px ">
		<header class="navbar">	
			<nav><ul>
				<li><a id="contact" href="contact.html">CONTACT</a></li>
				<li><a href="projects.html">PROJECTS</a></li>
				<li><a href="about.html">ABOUT</a></li>
				<li><a href="index.html">HOME</a></li>
			</ul></nav>
		</header>


		<form method="post" name="myemailform" action="contact.php">
			<p>
				<label for='name'>NAME </label><br>
				<input type="text" name="name">
			</p>
			<p>
				<label for='email'>EMAIL ADDRESS</label><br>
				<input type="text" name="email">
			</p>
			<p>
				<label for='email'>SUBJECT</label><br>
				<input type="text" name="subject">
			</p>
			<p>
				<label for='message'>MESSAGE</label> <br>
				<textarea name="message"></textarea>
			</p>
			<input type="submit" name='submit' value="submit">
		</form>

	</body>

</html>