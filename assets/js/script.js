//id from index.html
var surfing = document.getElementById("surfing");
var snorkeling = document.getElementById("snorkeling1");

// ids from activities.html
let actA = document.getElementById("surfing-activity");
let actB = document.getElementById("snorkeling-activity");
let actC = document.getElementById("dolphin-activity");
let actD = document.getElementById("kite-surfing-activity");
let actE = document.getElementById("scuba-diving-activity");

// when 1 activity is displayed, other activities should be hidden
function hideActivitySurfing(actB, actC, actD, actE) {

  actB.addClass('d-none');
  actC.addClass('d-none');
  actD.addClass('d-none');
  actE.addClass('d-none');

}

function hideActivitySnorkeling(actB, actC, actD, actE) {

  actB.addClass('d-none');
  actC.addClass('d-none');
  actD.addClass('d-none');
  actE.addClass('d-none');

}

function hideActivityDolphin(actB, actC, actD, actE) {

  actB.addClass('d-none');
  actC.addClass('d-none');
  actD.addClass('d-none');
  actE.addClass('d-none');

}

// onclick #surfing, call function 
// surfing.addEventListener('click', hideActivities);
snorkeling.addEventListener('click', test);




if (actA.is(":visible")) {
  actB.addClass('d-none');
  actC.addClass('d-none');
  actD.addClass('d-none');
  actE.addClass('d-none');
}

//       document.getElementById("surfing-activity").style.display = "block"; //show
//       document.getElementById("snorkeling-activity").style.display = "none"; //hide
//       document.getElementById("dolphin-activity").style.display = "none";
//       document.getElementById("kite-surfing-activity").style.display = "none";
//       document.getElementById("scuba-diving-activity").style.display = "none";
//     })


// var snorkeling = document.getElementById("snorkeling");

//   document.getElementById("snorkeling-activity").style.display = "block"; //show
//   document.getElementById("surfing-activity").style.display = "none"; //hide
//   document.getElementById("dolphin-activity").style.display = "none";
//   document.getElementById("kite-surfing-activity").style.display = "none";
//   document.getElementById("scuba-diving-activity").style.display = "none";