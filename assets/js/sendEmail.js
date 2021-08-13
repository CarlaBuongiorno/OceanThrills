// Credit: Code Intitute "Sending Emails Using EmailJS" -> https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/?child=last
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

// Credit: Email.JS Docs "https://www.emailjs.com/docs/rest-api/send-form/"
$("#get-in-touch-form").on("submit", function(event) {
  event.preventDefault(); // prevent reload
  
  let formData = new FormData(this);
  formData.append("service_id", "default_service");
  formData.append("template_id", "contact_form");
  formData.append("user_id", "user_gWJZtfVkIln6cCwKmB8ak");

  $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
      type: "POST",
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
    let name = document.getElementById("name").value;
      $("#get-in-touch").html("SUCCESS!").css("color", "white");
      $("#get-in-touch-form").html(`
      <h4>Hi ${name},</h4>
      <p>Thank you for getting in touch! We will get back to you shortly...</p>`
      ).css("color", "white").css("background-color", "rgba(0, 0, 0, 0.25");
  }).fail(function() {
    $("#get-in-touch").html("Oops...").css("color", "white");
    $("#get-in-touch-form").html(`<p>There was an error, please try again.</p>
    <div class="d-flex justify-content-md-center">
    <a class="btn contact-btn text-white" href="contact.html">Try Again</a>
    </div>`).css("color", "white");
  });
});
