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