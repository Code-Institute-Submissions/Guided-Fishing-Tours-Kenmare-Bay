function sendMail(contactForm) {
	emailjs.send("gmail", "guided_fishing_tours", {
			"from_name": contactForm.name.value,
			"from_email": contactForm.email.value,
			"tour_request": contactForm.tour_request.value
		})
		.then(
			function(response) {
				console.log("SUCCESS", response);
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false; // To block from loading a new page
}