// surfing markers
const map1Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: 57.312444,
      lng: -20.452782
    }
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: 57.377806,
      lng: -20.326333
    }
  },
  {
    title: "Black Rocks", // Experienced surfers, Black Rocks
    markers: {
      lat: -20.452782,
      lng: 57.368139
    }
  },
  {
    title: "Ilôt Sancho", // Ilôt Sancho, experienced surfers
    markers: {
      lat: -20.503694,
      lng: 57.448389
    }
  },
  {
    title: "Rivière des Galets", // Rivière des Galets, peaceful atmosphere, advanced surfers
    markers: {
      lat: -20.505750,
      lng: 57.456139
    }
  },
  {
    title: "Souillac", // Souillac, stable surfing conditions
    markers: {
      lat: -20.524250,
      lng: 57.522139
    }
  },
  {
    title: "Darne", // Darne, tranquil, reef break
    markers: {
      lat: -20.452333,
      lng: 57.709972
    }
  },
  {
    title: "Graveyards", // Graveyards, mediocre waves, but exceptional days!
    markers: {
      lat: -20.520833,
      lng: 57.509611
    }
  },
  {
    title: "Maconde", // Maconde, consistent conditions, ideal surfing experience
    markers: {
      lat: -20.493556,
      lng: 57.369278
    }
  },
  {
    title: "Harbour Rivière Noire", // Harbour Rivière Noire, intermediate level
    markers: {
      lat: -20.369083,
      lng: 57.354139
    }
  }
]

function initMap() {

  //map1
  const map = new google.maps.Map(document.getElementById("surfing-map"), {
    zoom: 9.75,
    center: {
      lat: -20.267210,
      lng: 57.581367
    }
  });

  for (let marker of map1Markers) {
    new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });
  }
}

// Snorkeling markers

const map2Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: 57.312444,
      lng: -20.452782
    }
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: 57.377806,
      lng: -20.326333
    }
  }
]

//map2
function snorkelingMap() {
  const map = new google.maps.Map(document.getElementById("snorkeling-map"), {
    zoom: 9.75,
    center: {
      lat: -20.267210,
      lng: 57.581367
    }
  });

  for (let marker of map2Markers) {
    new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });
  }
}

$("#snorkeling-activity").click(function () {
  snorkelingMap();
});


//map3
// const map3 = new google.maps.Map(document.getElementById("dolphin-map"), {
//   zoom: 9.75,
//   center: {
//     lat: -20.267210,
//     lng: 57.581367
//   }
// });

// for (let marker of map3Markers) {
//   new google.maps.Marker({
//     position: {
//       lat: marker.markers.lat,
//       lng: marker.markers.lng
//     },
//     map3,
//     title: marker.title,
//   });
// }

//map4
// const map4 = new google.maps.Map(document.getElementById("kite-surfing-map"), {
//   zoom: 9.75,
//   center: {
//     lat: -20.267210,
//     lng: 57.581367
//   }
// });

// for (let marker of map4Markers) {
//   new google.maps.Marker({
//     position: {
//       lat: marker.markers.lat,
//       lng: marker.markers.lng
//     },
//     map4,
//     title: marker.title,
//   });
// }

//map5
// const map5 = new google.maps.Map(document.getElementById("scuba-diving-map"), {
//   zoom: 9.75,
//   center: {
//     lat: -20.267210,
//     lng: 57.581367
//   }
// });

// for (let marker of map5Markers) {
//   new google.maps.Marker({
//     position: {
//       lat: marker.markers.lat,
//       lng: marker.markers.lng
//     },
//     map5,
//     title: marker.title,
//   });
// }
// }

// // To add the marker to the map, call setMap();
// marker.setMap(map1);