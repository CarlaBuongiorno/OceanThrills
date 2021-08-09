// Credit -> https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage#basic_usage
// Contact page clicks from activity dropdown menu

// Select the elements with class ".home-surf" and listen for a click on each. 
// Save this information to be used in the activities.js
document.querySelectorAll(".home-surf").forEach(item => {
  // Listen for click in the text field
  item.addEventListener("click", function (event) {
    // // And save the results into the session storage object
    sessionStorage.setItem("autosave", "home-surf");
  });
});
// Select the elements with class ".home-snork" and listen for a click on each. 
// Save this information to be used in the activities.js
document.querySelectorAll(".home-snork").forEach(item => {
  item.addEventListener("click", function (event) {
    sessionStorage.setItem("autosave", "home-snork");
  });
});
// Select the elements with class ".home-dol" and listen for a click on each. 
// Save this information to be used in the activities.js
document.querySelectorAll(".home-dol").forEach(item => {
  item.addEventListener("click", function (event) {
    sessionStorage.setItem("autosave", "home-dol");
  });
});
// Select the elements with class ".home-kite" and listen for a click on each. 
// Save this information to be used in the activities.js
document.querySelectorAll(".home-kite").forEach(item => {
  item.addEventListener("click", function (event) {
    sessionStorage.setItem("autosave", "home-kite");
  });
});
// Select the elements with class ".home-scuba" and listen for a click on each. 
// Save this information to be used in the activities.js
document.querySelectorAll(".home-scuba").forEach(item => {
  item.addEventListener("click", function (event) {
    sessionStorage.setItem("autosave", "home-scuba");
  });
});

//Init function for EmailJS
(function () {
  emailjs.init("user_gWJZtfVkIln6cCwKmB8ak");
})();