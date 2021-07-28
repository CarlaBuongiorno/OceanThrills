// Contact page clicks from activity dropdown menu
// credit -> https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage#basic_usage
document.querySelectorAll(".home-surf").forEach(item => {
  // Listen for click in the text field
  item.addEventListener("click", function (event) {
    // // And save the results into the session storage object
    sessionStorage.setItem("autosave", "home-surf");
  });
});

document.querySelectorAll(".home-snork").forEach(item => {
  item.addEventListener("click", function (event) {
    sessionStorage.setItem("autosave", "home-snork");
  });
});

document.querySelectorAll(".home-dol").forEach(item => {
  item.addEventListener("click", function (event) {
    sessionStorage.setItem("autosave", "home-dol");
  });
});

document.querySelectorAll(".home-kite").forEach(item => {
  item.addEventListener("click", function (event) {
    sessionStorage.setItem("autosave", "home-kite");
  });
});

document.querySelectorAll(".home-scuba").forEach(item => {
  item.addEventListener("click", function (event) {
    sessionStorage.setItem("autosave", "home-scuba");
  });
});