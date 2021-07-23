// Home page clicks
// credit -> https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage#basic_usage
document.querySelectorAll(".home-surf").forEach(item => {
  // Listen for click in the text field
  item.addEventListener("click", function (event) {
    // And save the results into the session storage object
    let storedSurf = event.target.parentElement.classList[1];
    console.log(storedSurf);
    sessionStorage.setItem("autosave", storedSurf);
  });
});

document.querySelectorAll(".home-snork").forEach(item => {
  item.addEventListener("click", function (event) {
    let storedSnork = event.target.parentElement.classList[1];
    sessionStorage.setItem("autosave", storedSnork);
  });
});

document.querySelectorAll(".home-dol").forEach(item => {
  item.addEventListener("click", function (event) {
    let storedDol = event.target.parentElement.classList[1];
    sessionStorage.setItem("autosave", storedDol);
  });
});

document.querySelectorAll(".home-kite").forEach(item => {
  item.addEventListener("click", function (event) {
    let storedKite = event.target.parentElement.classList[1];
    sessionStorage.setItem("autosave", storedKite);
  });
});

document.querySelectorAll(".home-scuba").forEach(item => {
  item.addEventListener("click", function (event) {
    let storedScuba = event.target.parentElement.classList[1];
    sessionStorage.setItem("autosave", storedScuba);
  });
});