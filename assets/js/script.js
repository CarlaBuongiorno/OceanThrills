// ids from menu activities page
let menuSurf = document.getElementById("menu-surf");
let menuSnork = document.getElementById("menu-snork");
let menuDol = document.getElementById("menu-dol");
let menuKite = document.getElementById("menu-kite");
let menuScuba = document.getElementById("menu-scuba");

// ids from activities sections
let surfSection = document.getElementById("surfing-activity");
let snorkSection = document.getElementById("snorkeling-activity");
let dolSection = document.getElementById("dolphin-activity");
let kiteSection = document.getElementById("kite-surfing-activity");
let scubaSection = document.getElementById("scuba-diving-activity");

// when 1 activity is displayed, other activities should be hidden

function hideActivitiesSurfing(_a, _b, _c, _d) {
  surfSection.style.display = "block"; //show
  snorkSection.style.display = "none"; //hide
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}

function hideActivitiesSnorkeling(_a, _b, _c, _d) {
  surfSection.style.display = "none"; //hide
  snorkSection.style.display = "block"; //show
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}

function hideActivitiesDolphins(_a, _b, _c, _d) {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "block";
  kiteSection.style.display = "none";
  scubaSection.style.display = "none";
}

function hideActivitiesKite(_a, _b, _c, _d) {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "none";
  kiteSection.style.display = "block";
  scubaSection.style.display = "none";
}

function hideActivitiesScuba(_a, _b, _c, _d) {
  surfSection.style.display = "none";
  snorkSection.style.display = "none";
  dolSection.style.display = "none";
  kiteSection.style.display = "none";
  scubaSection.style.display = "block";
}

// Event listeners for dropdown menu on activities page
menuSurf.addEventListener('click', hideActivitiesSurfing);
menuSnork.addEventListener('click', hideActivitiesSnorkeling);
menuDol.addEventListener('click', hideActivitiesDolphins);
menuKite.addEventListener('click', hideActivitiesKite);
menuScuba.addEventListener('click', hideActivitiesScuba);


// surfSection.classList.add("d-none");
// snorkSection.classList.remove("d-none");