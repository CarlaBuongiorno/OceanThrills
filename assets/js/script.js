// ids from activities sections
let surfSection = document.getElementById("surfing-activity");
let snorkSection = document.getElementById("snorkeling-activity");
let dolSection = document.getElementById("dolphin-activity");
let kiteSection = document.getElementById("kite-surfing-activity");
let scubaSection = document.getElementById("scuba-diving-activity");


document.querySelectorAll('.surf').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    displaySurf();
  });
});

// function displaySurf() {
//   surfSection.style.display = "block"; //show
//   snorkSection.style.display = "none"; //hide
//   dolSection.style.display = "none";
//   kiteSection.style.display = "none";
//   scubaSection.style.display = "none";
// }

document.querySelectorAll('.snork').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "none";
    snorkSection.style.display = "block";
    dolSection.style.display = "none";
    kiteSection.style.display = "none";
    scubaSection.style.display = "none";
  });
});

document.querySelectorAll('.dol').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "none";
    snorkSection.style.display = "none";
    dolSection.style.display = "block";
    kiteSection.style.display = "none";
    scubaSection.style.display = "none";
  });
});

document.querySelectorAll('.kite').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "none";
    snorkSection.style.display = "none";
    dolSection.style.display = "none";
    kiteSection.style.display = "block";
    scubaSection.style.display = "none";
  });
});

document.querySelectorAll('.scuba').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "none";
    snorkSection.style.display = "none";
    dolSection.style.display = "none";
    kiteSection.style.display = "none";
    scubaSection.style.display = "block";
  });
});

// ---------
// let homeSurf = document.querySelectorAll(".home-surf").forEach(item => {
//   item.addEventListener('click', (_a, _b, _c, _d) => {
//     console.log('working');
//     if (sessionStorage.setItem("autosave")) {
//       // Restore the contents of the text field
//       homeSurf.value = sessionStorage.setItem("autosave");
//     }
//     displaySurf();
//   });
// });


document.querySelectorAll(".home-surf").forEach(item => {
  // Listen for changes in the text field
  item.addEventListener("change", function () {
    // And save the results into the session storage object
    // sessionStorage.setItem("autosave", item.value);
    console.log(item.value);
    console.log("working");
  });
  item.addEventListener('click', (_a, _b, _c, _d) => {
    // displaySurf();
    
  });
});


let homeSnork = document.querySelectorAll(".home-snork").forEach(item => {
  item.addEventListener('click', (whatShouldBeHere) => {
    console.log('working');
    sessionStorage.setItem("autosave", homeSnork.value);
  });
});

let homeDol = document.querySelectorAll(".home-dol").forEach(item => {
  item.addEventListener('click', (whatShouldBeHere) => {
    console.log('working');
    sessionStorage.setItem("autosave", homeDol.value);
  });
});

let homeKite = document.querySelectorAll(".home-kite").forEach(item => {
  item.addEventListener('click', (whatShouldBeHere) => {
    console.log('working');
    sessionStorage.setItem("autosave", homeKite.value);
  });
});

let homeScuba = document.querySelectorAll(".home-scuba").forEach(item => {
  item.addEventListener('click', (whatShouldBeHere) => {
    console.log('working');
    sessionStorage.setItem("autosave", homeScuba.value);
  });
});