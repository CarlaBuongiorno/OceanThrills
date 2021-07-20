// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
// The maximum width of the info window is set to 200 pixels.
function initMap() {

  // Create the map.
  const map = new google.maps.Map(document.getElementById("surfing-map"), {
    zoom: 9.75,
    center: {
      lat: -20.267210,
      lng: 57.581367
    }
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h2 id="firstHeading" class="firstHeading">Le Morne Brant</h2>' +
    '<div id="bodyContent">' +
    "<p><b>Le Morne Brant</b> is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200,
  });
  const marker = new google.maps.Marker({
    position: {
      lat: -20.452782,
      lng: 57.312444
    },
    map,
    title: "Le Morne Brant",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}

const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h2 id="firstHeading" class="firstHeading">Tamarin Bay</h2>' +
  '<div id="bodyContent">' +
  "<p><b>Tamarin Bay</b> is a large " +
  "sandstone rock formation in the southern part of the " +
  "Northern Territory, central Australia. It lies " +
  "south west of the nearest large town, Alice Springs; 450&#160;km " +
  "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
  "features of the Uluru - Kata Tjuta National Park. Tamarin Bay is " +
  "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
  "Aboriginal people of the area. It has many springs, waterholes, " +
  "rock caves and ancient paintings. Uluru is listed as a World " +
  "Heritage Site.</p>" +
  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
  "(last visited June 22, 2009).</p>" +
  "</div>" +
  "</div>";

const infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 200,
});
const marker = new google.maps.Marker({
  position: {
    lat: -20.326333,
    lng: 57.377806
  },
  map,
  title: "Tamarin Bay",
});
marker.addListener("click", () => {
  infowindow.open({
    anchor: marker,
    map,
    shouldFocus: false,
  });
});

//    var locations = [
//     [{
//         lat: -20.452782, 
//         lng: 57.312444
//     }, "Le Morne Brant"], // Ultimate surfing spot, Le Morne Brant
//     [{
//         lat: -20.326333,
//         lng: 57.377806
//     }, "Tamarin Bay"], // Newbies, Tamarin Bay Surf School
//     [{
//         lat: 57.368139,
//         lng: -20.452782
//     }, "Black Rocks"], // Experienced surfers, Black Rocks
//     [{
//         lat: 57.448389,
//         lng: -20.503694
//     }, "Ilôt Sancho"], // Ilôt Sancho, experienced surfers
//     [{
//         lat: 57.456139,
//         lng: -20.505750
//     }, "Rivière des Galets"], // Rivière des Galets, peaceful atmosphere, advanced surfers
//     [{
//       lat: 57.522139, 
//       lng: -20.524250
//   }, "Souillac"], // Souillac, stable surfing conditions
//   [{
//       lat: 57.709972,
//       lng: -20.452333
//   }, "Darne"], // Darne, tranquil, reef break
//   [{
//       lat: 57.509611,
//       lng: -20.520833
//   }, "Graveyards"], // Graveyards, mediocre waves, but exceptional days!
//   [{
//       lat: 57.369278,
//       lng: -20.493556
//   }, "Maconde"], // Maconde, consistent conditions, ideal surfing experience
//   [{
//       lat: 57.354139,
//       lng: -20.369083
//   }, "Harbour Rivière Noire"], // Harbour Rivière Noire, intermediate level
// ];




// // Snorkeling Markers

// // Dolphins Markers

// // Kite Surfing Markers

// // Scuba Diving Markers

// }
// initMap();


// function surfingMap() {

// }

// set markers
// var marker = new google.maps.Marker({
//   position: { lat: 51.493073, lng: -0.146550 },
//   label:"A",
//   title:"Location Name"
// });

// // To add the marker to the map, call setMap();
// marker.setMap(map);