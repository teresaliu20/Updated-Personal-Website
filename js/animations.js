$(document).ready(function() {
    console.log( "Ready!" );
    AOS.init();

    $('#splash-section').hide().fadeIn(700);

    $('#splash-section').css({
		"display": "flex",
		"justify-content": "center",
		"align-items": "center"
	});

    var options = {
	 	strings: ["", "Engineer. Artist. Developer."],
	 	typeSpeed: 50,
	}
	$('#email-button').on('click', function() {
		// window.open('teresali@usc.edu');
		var link = "mailto:teresali@usc.edu";
    	 window.location.href = link;
	})
	var typed = new Typed("#catch-phrase", options);
});