// surfing markers
let map1Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: -20.452782,
      lng: 57.312444
    }
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: -20.326333,
      lng: 57.377806
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

// Snorkeling markers
let map2Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: -20.452782,
      lng: 57.312444
    }
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: -20.326333,
      lng: 57.377806
    }
  }
]

// Dolphin markers
let map3Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: -20.452782,
      lng: 57.312444
    }
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: -20.326333,
      lng: 57.377806
    }
  }
]

// Kite Surfing markers
let map4Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: -20.452782,
      lng: 57.312444
    }
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: -20.326333,
      lng: 57.377806
    }
  }
]

// Scuba Diving markers
let map5Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: -20.452782,
      lng: 57.312444
    }
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: -20.326333,
      lng: 57.377806
    }
  }
]

function surfingMap() {
  const map = new google.maps.Map(document.getElementById("surfing-map"), {
    zoom: 9.75,
    center: {
      lat: -20.267210,
      lng: 57.581367
    }
  });

  for (let marker of map1Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });
    // Credit: To close current info window when another marker is clicked -> https://groups.google.com/g/google-maps-js-api-v3/c/cA2VRg4TO1k?pli=1
    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
      });
      if (currentInfoWindow != null) {
        currentInfoWindow.close();
      }

      infowindow.open({
        anchor: _marker,
        map,
        shouldFocus: false,
      });
      currentInfoWindow = infowindow;
      map.addListener("click", () => {
        infowindow.close();
      });
    });
  }
}



function snorkelingMap() {
  const map = new google.maps.Map(document.getElementById("snorkeling-map"), {
    zoom: 9.75,
    center: {
      lat: -20.267210,
      lng: 57.581367
    }
  });

  for (let marker of map2Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });

    _marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(_marker.getPosition());
    });
  }
}

function dolphinMap() {
  const map = new google.maps.Map(document.getElementById("dolphin-map"), {
    zoom: 9.75,
    center: {
      lat: -20.267210,
      lng: 57.581367
    }
  });

  for (let marker of map3Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });
    _marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(_marker.getPosition());
    });
  }
}

function kiteMap() {
  const map = new google.maps.Map(document.getElementById("kite-surfing-map"), {
    zoom: 9.75,
    center: {
      lat: -20.267210,
      lng: 57.581367
    }
  });

  for (let marker of map4Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });
    _marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(_marker.getPosition());
    });
  }
}

function scubaMap() {
  const map = new google.maps.Map(document.getElementById("scuba-diving-map"), {
    zoom: 9.75,
    center: {
      lat: -20.267210,
      lng: 57.581367
    }
  });

  for (let marker of map5Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });
    _marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(_marker.getPosition());
    });
  }
}

function initAllMaps() {
  surfingMap();
  snorkelingMap();
  dolphinMap();
  kiteMap();
  scubaMap();
}