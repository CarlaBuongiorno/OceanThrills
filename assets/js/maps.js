/* global google */

// Credit: Google Maps API Documentation -> https://developers.google.com/maps/documentation/javascript/examples/map-simple
function surfingMap() {
  // Set the map
  const map = new google.maps.Map(document.getElementById("surfing-map"), {
    zoom: 9,
    center: {
      lat: -20.387079,
      lng: 57.507294
    }
  });
  // Iterate through markers and set them on the map
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
    // Credit: Google Maps Documentation for creating infowindow -> https://developers.google.com/maps/documentation/javascript/infowindows
    _marker.addListener("click", () => {
      let contentString = `
      <h4>${marker.title}</h4>
      <div class="padding">
      <img src="assets/images/window-images/surf/${marker.image}.jpg" width='100%'>
      </div>
      <p>${marker.description}</p>
      <div id="info-window-subheadings">
      <h6>Wave Height</h6>
      <p>${marker.waveHeight}</p>
      <h6>Wave Direction</h6>
      <p>${marker.waveDirection}</p>
      <h6>Wave Length</h6>
      <p>${marker.waveLength}</p>
      <h6>Wave Power</h6>
      <p>${marker.wavePower}</p>
      <h6>Best Tide Position</h6>
      <p>${marker.bestTidePosition}</p>
      <h6>Bottom</h6>
      <p>${marker.bottom}</p>
      <h6>Potential Danger</h6>
      <p>${marker.danger}</p>
      <h6>Experience</h6>
      <p>${marker.experience}</p>
      </div>
      `;
      //Create infowindow
      let infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
      });
      // Close current info window when another marker is clicked
      if (currentInfoWindow != null) {
        currentInfoWindow.close();
      }
      // open info window
      infowindow.open({
        anchor: _marker,
        map,
        shouldFocus: false,
      });
      // close current info window when map is clicked
      currentInfoWindow = infowindow;
      map.addListener("click", () => {
        infowindow.close();
      });
    });
  }
}

function snorkelingMap() {
  // Set the map
  const map = new google.maps.Map(document.getElementById("snorkeling-map"), {
    zoom: 9,
    center: {
      lat: -20.182073,
      lng: 57.591610
    }
  });
  // Iterate through markers and set them on the map
  for (let marker of map2Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });

    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString = `
      <h4>${marker.title}</h4>
      <div class="padding">
      <img src="assets/images/window-images/snorkel/${marker.image}.jpg" width='100%'>
      </div>
      <p>${marker.description}</p>
      <div id="info-window-subheadings">
      <h6>Marine Life</h6>
      <p>${marker.marineLife}</p>
      <h6>Max Depth</h6>
      <p>${marker.maxDepth}</p>
      <h6>Water Entrance</h6>
      <p>${marker.waterEntrance}</p>
      <h6>Potential Danger</h6>
      <p>${marker.potentialDanger}</p>
      <h6>Experience</h6>
      <p>${marker.experience}</p>
      </div>
      `;
      // Create infowindow
      let infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
      });
      // Close current info window when another marker is clicked
      if (currentInfoWindow != null) {
        currentInfoWindow.close();
      }

      infowindow.open({
        anchor: _marker,
        map,
        shouldFocus: false,
      });
      // Close current info window when map is clicked
      currentInfoWindow = infowindow;
      map.addListener("click", () => {
        infowindow.close();
      });
    });
  }
}

function dolphinMap() {
  // Set the map
  const map = new google.maps.Map(document.getElementById("dolphin-map"), {
    zoom: 9,
    center: {
      lat: -20.222034,
      lng: 57.578038
    }
  });
  // Iterate through markers and set them on the map
  for (let marker of map3Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });

    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString = `
      <h4>${marker.title}</h4>
      <div class="padding">
      <img src="assets/images/window-images/dolphins/${marker.image}.jpg" width='100%'>
      </div>
      <p>${marker.description}</p>
      <div id="info-window-subheadings">
      <p><i class="fas fa-map-marker-alt"></i> ${marker.address}</p>
      <p><i class="fas fa-desktop"></i> <a href="${marker.websiteAddress}" target="_blank">${marker.title}</a></p>
      <p><i class="fas fa-phone-alt"></i> ${marker.phone}</p>
      </div>
      </div>`;
      // Create infowindow
      let infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
      });
      // Close current info window when another marker is clicked
      if (currentInfoWindow != null) {
        currentInfoWindow.close();
      }

      infowindow.open({
        anchor: _marker,
        map,
        shouldFocus: false,
      });
      // Close current info window when another marker is clicked
      currentInfoWindow = infowindow;
      map.addListener("click", () => {
        infowindow.close();
      });
    });
  }
}

function kiteMap() {
  // Set the map
  const map = new google.maps.Map(document.getElementById("kite-surfing-map"), {
    zoom: 9,
    center: {
      lat: -20.200162, 
      lng: 57.577718
    }
  });
  // Iterate through markers and set them on the map
  for (let marker of map4Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });

    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString = `
      <h4>${marker.title}</h4>
      <div class="padding">
      <img src="assets/images/window-images/kite/${marker.image}.jpg" width='100%'>
      </div>
      <p>${marker.description}</p>
      <div id="info-window-subheadings">
      <h6>Wind Direction</h6>
      <p>${marker.wind}</p>
      <h6>Windsurf School/Shop</h6>
      <p><a href="${marker.websiteAddress}" target="_blank">${marker.websiteName}</a></p>
      </div>
      `;
      // Create infowindow
      let infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
      });
      // Close current info window when another marker is clicked
      if (currentInfoWindow != null) {
        currentInfoWindow.close();
      }

      infowindow.open({
        anchor: _marker,
        map,
        shouldFocus: false,
      });
      // Close current info window when map is clicked
      currentInfoWindow = infowindow;
      map.addListener("click", () => {
        infowindow.close();
      });
    });
  }
}

function scubaMap() {
  // Set the map
  const map = new google.maps.Map(document.getElementById("scuba-diving-map"), {
    zoom: 9,
    center: {
      lat: -20.200162,
      lng: 57.577718
    }
  });
  // Iterate through markers and set them on the map
  for (let marker of map5Markers) {
    const _marker = new google.maps.Marker({
      position: {
        lat: marker.markers.lat,
        lng: marker.markers.lng
      },
      map,
      title: marker.title,
    });

    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString = `
      <h4>${marker.title}</h4>
      <div class="padding">
      <img src="assets/images/window-images/scuba/${marker.image}.jpg" width='100%'>
      </div>
      <p>${marker.description}</p>
      <div id="info-window-subheadings">
      <h6>Diving Site</h6>
      <p>${marker.divingSite}</p>
      <h6>Dive Type</h6>
      <p>${marker.diveType}</p>
      <h6>Depth</h6>
      <p>${marker.depth}</p>
      `;
      // Create infowindow
      let infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
      });
      // close current info window when another marker is clicked
      if (currentInfoWindow != null) {
        currentInfoWindow.close();
      }

      infowindow.open({
        anchor: _marker,
        map,
        shouldFocus: false,
      });
      // Close current info window when another marker is clicked
      currentInfoWindow = infowindow;
      map.addListener("click", () => {
        infowindow.close();
      });
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