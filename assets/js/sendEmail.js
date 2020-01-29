function sendEmail(contactForm){
    emailjs.send("gmail","guided_fishing_tours",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "tour_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("Failed", error);
        });
}