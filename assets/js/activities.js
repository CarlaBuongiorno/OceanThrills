const clicked = sessionStorage.getItem("autosave");
console.log(clicked);

// ids from activities sections
let surfSection = document.getElementById("surfing-activity");
let snorkSection = document.getElementById("snorkeling-activity");
let dolSection = document.getElementById("dolphin-activity");
let kiteSection = document.getElementById("kite-surfing-activity");
let scubaSection = document.getElementById("scuba-diving-activity");

// Set the saved variable to the functions

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  storedSurf = sessionStorage.getItem("autosave");
  displaySurf();
}

if (sessionStorage.getItem("autosave")) {
  storedSnork = sessionStorage.getItem("autosave");
  displaySnork();
}

if (sessionStorage.getItem("autosave")) {
  storedDol = sessionStorage.getItem("autosave");
  displayDol();
}

if (sessionStorage.getItem("autosave")) {
  storedKite = sessionStorage.getItem("autosave");
  displayKite();
}

if (sessionStorage.getItem("autosave")) {
  storedScuba = sessionStorage.getItem("autosave");
  displayScuba();
}

// Activity page clicks
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

// Functions
function displaySurf() {
  surfSection.style.display = "block"; //show
  snorkSection.style.display = "none"; //hide
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}

function displaySnork() {
  surfSection.style.display = "none";
  snorkSection.style.display = "block";
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}

function displayDol() {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "block";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}

function displayKite() {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "none";
  kiteSection.style.display = "block";
  scubaSection.style.display = "none";
}

function displayScuba() {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "block";
}



