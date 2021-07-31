function sendMail(contactForm) {
  emailjs.send("gmail", "contact_form", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "message": contactForm.message.value 
  })
  .then(
    function(response) {
      console.log("Success", response);
    },
    function(error) {
      console.log("Failed", error);
    });
    return false;
}