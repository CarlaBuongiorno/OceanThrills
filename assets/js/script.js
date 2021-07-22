// ids from activities sections
let surfSection = document.getElementById("surfing-activity");
let snorkSection = document.getElementById("snorkeling-activity");
let dolSection = document.getElementById("dolphin-activity");
let kiteSection = document.getElementById("kite-surfing-activity");
let scubaSection = document.getElementById("scuba-diving-activity");


document.querySelectorAll('.surf').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "block"; //show
    snorkSection.style.display = "none"; //hide
    dolSection.style.display = "none";
    kiteSection.style.display = "none";
    scubaSection.style.display = "none";
    console.log("5");
  });
});

document.querySelectorAll('.snork').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "none";
    snorkSection.style.display = "block"; 
    dolSection.style.display = "none";
    kiteSection.style.display = "none";
    scubaSection.style.display = "none";
    console.log("5");
  });
});

document.querySelectorAll('.dol').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "none";
    snorkSection.style.display = "none";
    dolSection.style.display = "block";
    kiteSection.style.display = "none";
    scubaSection.style.display = "none";
    console.log("5");
  });
});

document.querySelectorAll('.kite').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "none";
    snorkSection.style.display = "none";
    dolSection.style.display = "none";
    kiteSection.style.display = "block";
    scubaSection.style.display = "none";
    console.log("5");
  });
});

document.querySelectorAll('.scuba').forEach(item => {
  item.addEventListener('click', (_a, _b, _c, _d) => {
    surfSection.style.display = "none";
    snorkSection.style.display = "none";
    dolSection.style.display = "none";
    kiteSection.style.display = "none";
    scubaSection.style.display = "block";
    console.log("5");
  });
});
