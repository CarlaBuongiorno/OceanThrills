// ids from activities sections
let surfSection = document.getElementById("surfing-activity");
let snorkSection = document.getElementById("snorkeling-activity");
let dolSection = document.getElementById("dolphin-activity");
let kiteSection = document.getElementById("kite-surfing-activity");
let scubaSection = document.getElementById("scuba-diving-activity");

// Set the saved click information (variable) from home page & contact page to the functions
const clicked = sessionStorage.getItem("autosave");
// Credit: W3Schools - https://www.w3schools.com/js/js_switch.asp
switch (clicked) {
  case "home-surf":
    displaySurf();
    break;
  case "home-snork":
    displaySnork();
    break;
  case "home-dol":
    displayDol();
    break;
  case "home-kite":
    displayKite();
    break;
  case "home-scuba":
    displayScuba();
    break;
  default:
    console.log("Oops, this section does not exist.");
}

// Activity page clicks from button groups
document.querySelectorAll('.surf').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    displaySurf();
  });
});

document.querySelectorAll('.snork').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    displaySnork();
  });
});

document.querySelectorAll('.dol').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    displayDol();
  });
});

document.querySelectorAll('.kite').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    displayKite();
  });
});

document.querySelectorAll('.scuba').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    displayScuba();
  });
});

// Credit: W3Schools - CSS display Property -> https://www.w3schools.com/cssref/pr_class_display.asp
// Display surfing section while hiding all other sections
function displaySurf() {
  surfSection.style.display = "block"; //show
  snorkSection.style.display = "none"; //hide
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}
// Display snorkeling section while hiding all other sections
function displaySnork() {
  surfSection.style.display = "none";
  snorkSection.style.display = "block";
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}
// Display dolphins section while hiding all other sections
function displayDol() {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "block";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}
// Display kite surfing section while hiding all other sections
function displayKite() {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "none";
  kiteSection.style.display = "block";
  scubaSection.style.display = "none";
}
// Display scuba diving section while hiding all other sections
function displayScuba() {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "block";
}
