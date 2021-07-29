// surfing markers
// Credit: Wave info - 'Wanna Surf' -> https://www.wannasurf.com/spot/Africa/Mauritius/
// Credit: Desctiption - 'Travel Start' -> http://www.travelstart.co.za/blog/mauritius-surf/
let map1Markers = [{
    title: "Le Morne",
    markers: {
      lat: -20.452782,
      lng: 57.312444
    },
    information: `Le Morne Beach, under the shadow of the mighty Le Morne Brant mountains, is known as 
    the ultimate surfing spot in the country. This top Mauritius surf spot is famous for the ‘One Eye’, 
    the ‘eye’ surfers see on Le Morne’s rock face when they find the sweet spot in which to catch the 
    perfect wave! If you’re a beginner, test your skills on the west side of the peninsula. This location 
    is also known as ‘Kite Lagoon’, due to it being a popular venue for kitesurfing in Mauritius. 
    Enjoy some of the best swells of incredibly high waves on the island (averaging 3.5 feet). You can rent 
    a board at Pryde Shop, which is less than a 10-minute drive from Le Morne Beach. 
    Call them at +230 5989 1060. Open 09:00 to 19:00, every day.`,
    websiteName: "Surf School", // Rent a board and lessons
    websiteAddress: "http://prydeclub.com/school/surfing/",
    Experience: "Experienced surfers",
    waveDirection: "Right and left",
    bottom: "Reef (coral, sharp rocks etc..)",
    wavePower: "Hollow",
    waveLength: "Normal (50 to 150m)",
    bestTidePosition: "Mid and high tide",
    waveHeight: "Starts working at 1.0m-1.5m / 3ft-5ft and holds up to 3m+ / 10ft+",
    danger: "Urchins, rips/undertow, and rocks"

  },
  {
    title: "Tamarin Bay",
    markers: {
      lat: -20.326333,
      lng: 57.377806
    },
    information: `One of the major drawcards of Tamarin Bay is the lack of high-walled resort compounds. 
    It’s also a superb location for newbies hoping to find great conditions to learn to surf in Mauritius. 
    During low tide on the southwest coast, take care to avoid the coral crusted limestone. 
    Other than that, enjoy more of the world-class waves while surfing in Mauritius! 
    If you’re looking to learn to surf, you’re welcome to sign up for lessons at Tamarin Bay Surf School. 
    Call them at +230 5257 5050. Open 09:00 to 17:00, every day.`,
    websiteName: "Tamarin Bay Surf School", // Lessons
    websiteAddress: "https://surf-mauritius.com/",
    Experience: "Experienced surfers",
    waveDirection: "Left",
    bottom: "Sandy",
    wavePower: "Hollow, Fun, Powerless",
    waveLength: "Normal (50 to 150m)",
    bestTidePosition: "High tide only",
    waveHeight: "Starts working at 1.5m-2m /5ft-6ft and holds up to 2.5m+ / 8ft+",
    danger: "Localism and sharks"

  },
  {
    title: "Black Rocks",
    markers: {
      lat: -20.319111,
      lng: 57.368139
    },
    information: `Another venue solely for the most experienced looking to enjoy surfing in Mauritius, 
    Black Rocks is an ideal place if Tamarin Bay gets too busy. Prepare yourself to catch some serious waves! 
    The best time to go surfing at Black Rocks is around high tide when the tide is rising. 
    Sharks sometimes come to the waters around the area, check with the locals in the area before heading out.`,
    Experience: "Experienced surfers",
    waveDirection: "Right",
    bottom: "Reef (coral, sharp rocks etc..)",
    wavePower: "Hollow, Powerful, Ledgey",
    waveLength: "Normal (50 to 150m)",
    bestTidePosition: "Mid and high tide",
    waveHeight: "Starts working at 1.0m-1.5m / 3ft-5ft and holds up to 4m+ / 12ft",
    danger: "Urchins, rips/undertow, rocks, localism, and sharks"
  },
  {
    title: "Ilôt Sancho",
    markers: {
      lat: -20.503694,
      lng: 57.448389
    },
    information: `The strong currents off the coast of Ilôt Sancho call for the more experienced surfers coming 
    to indulge in the surfing opportunities in Mauritius. The little islet’s favourable conditions are a major 
    attraction for local surf competitions. Head to Ilôt Sancho in November or December for the Billabong and 
    Quiksilver sponsored competitions to discover the best surfers in Mauritius! Ilôt Sancho is a short distance 
    off the coast of Mauritius. You can walk there during low tide.`,
    Experience: "All surfers",
    waveDirection: "Left",
    bottom: "Sandy with rock",
    wavePower: "Ordinary",
    waveLength: "Short (&lt; 50m)",
    bestTidePosition: "Mid tide",
    waveHeight: "Starts working at 1.5m-2m /5ft-6ft and holds up to 2.5m+ / 8ft+",
    danger: "Rocks"
  },
  {
    title: "Rivière des Galets",
    markers: {
      lat: -20.505750,
      lng: 57.456139
    },
    information: `One of the least developed areas of Mauritius, Rivière des Galets offers you a more 
    peaceful atmosphere than some of the other popular Mauritius surf spots. You can look forward to a 
    rewarding surfing experience thanks to the left-hand surf breaks and the moderately exposed reef. 
    It’s a highly recommended location for more advanced surfers seeking consistent and phenomenal waves. 
    The only time it gets busy at Rivière des Galets is during the surfing competitions that take 
    place throughout the year. Check with the locals when you’re in the area to plan when to go surfing.`,
    Experience: "All surfers",
    waveDirection: "Right and left",
    bottom: "Sandy",
    wavePower: "Ordinary, Fun, Powerless",
    waveLength: "Short (&lt; 50m)",
    bestTidePosition: "All tides",
    waveHeight: "Starts working at 1.0m-1.5m / 3ft-5ft and holds up to 2m+ / 6ft+",
    danger: "Urchins, rips/undertow, and rocks"
  },
  {
    title: "Darne",
    markers: {
      lat: -20.452333,
      lng: 57.709972
    },
    information: `Another more tranquil Mauritius surf spot is this location presenting 
    you with a delightful reef break. Darne has the additional benefit of being a gorgeous 
    place with a breath-taking landscape. The waves you can catch here can run for about 
    164 feet, with some thrilling barrels to ride when the wind turns north. Check with the 
    locals to find out when is low tide so that you can avoid being in the water during that 
    period, due to the shallow conditions and the strong current in the pass.`,
    Experience: "All surfers",
    waveDirection: "Left",
    bottom: "Reef (coral, sharp rocks etc..)",
    wavePower: "Powerless",
    waveLength: "Short (&lt; 50m)",
    bestTidePosition: "Mid and high tide",
    waveHeight: "Starts working at 1.5m-2m /5ft-6ft and holds up to 2.5m+ / 8ft+",
    danger: "Urchins and rocks"
  },
  {
    title: "Maconde",
    markers: {
      lat: -20.493556,
      lng: 57.369278
    },
    information: `Head to Maconde on the southern tip of Mauritius to enjoy consistent conditions for an 
    ideal surfing experience. For the best opportunity to enjoy this top Mauritius surf spot, find out 
    when there are offshore winds from the northeast. Maconde is also one of the more popular locations, 
    so, definitely go surfing during the week.`,
    Experience: "All surfers",
    waveDirection: "Left",
    bottom: "Reef (coral, sharp rocks etc..)",
    wavePower: "Powerless, Slab",
    waveLength: "Short (&lt; 50m)",
    bestTidePosition: "Mid and high tide",
    waveHeight: "Starts working at 1.0m-1.5m / 3ft-5ft and holds up to 3m+ / 10ft+",
    danger: "Urchins, rips/undertow, and rocks"
  }
]

// Snorkeling markers
let map2Markers = [{
    title: "Pointe aux Piments", // long-nosed filefish, butterflyfish, goatfish, ocellated snake eels, scribbled pipefish and hawksbill turtles
    markers: {
      lat: -20.064677,
      lng: 57.518749
    },
    information: `On the west of the island, this off-shore protected coral reef is an easy swim from the beach. 
    Just peering into the surface of the water to what lies below will get you excited! Expect to see long-nosed 
    filefish, butterflyfish, goatfish, ocellated snake eels, scribbled pipefish and more. If you’d like to go a 
    bit further into the waters in these parts you can spot hawksbill turtles at around ten metres deep.`
  },
  {
    title: "Blue Bay Marine Park", // Snorkeling Haven with Coral and Fish
    markers: {
      lat: -20.444496,
      lng: 57.709895
    },
    information: `This is undoubtedly the most popular spot to snorkel on the island. The protected marine park 
    is beautiful and the water in the lagoon ranges between five and six metres deep. You can also play it safe 
    in more shallow water and just walk in from the beach. The clear blue waters hold an astonishing amount of 
    marine life to see, and of course, the area itself is a treat to any island-lover’s eyes! The park is also 
    home to more than 50 species of coral.`
  },
  {
    title: "Pereybere Beach, near Grand Baie", // Popular beach for water sports
    markers: {
      lat: -19.993565,
      lng: 57.591050
    },
    information: `Located in the north of Mauritius, this stunning beach front is another wonderful spot for 
    snorkelling. The beach is very popular so it’s best to get there early to enjoy the quiet waters. The 
    easiest way to reach the reef is to swim in from the shore, but boats are available to take you further 
    in as the lagoon does get quite deep.`
  },
  {
    title: "Flic en Flac", // Favoured spot for snorkeling - white-spotted boxfish, the incredible moorish idols and blue-barred parrotfish
    markers: {
      lat: -20.299633,
      lng: 57.363380
    },
    information: `Situated in the west of Mauritius, this well-known beach is known as a favoured spot for 
    snorkelling with its large lagoon and still water. Spend your time wading through the warm water and 
    spot white-spotted boxfish, the incredible moorish idols and blue-barred parrotfish. Just south of the bay, 
    and accessible by boat is Tamarin Bay. If you’re in luck, you may even spot spinner dolphins from your boat. 
    The reefs here are for more experienced divers at around 20 to 30 metres deep.`
  },
  {
    title: "Trou aux Biches", // lion fish, moray eels, trumpet fish, white-spotted boxfish
    markers: {
      lat: -20.034875,
      lng: 57.544449
    },
    information: `Thinking of that perfect island getaway will most certainly have you picturing this stretch 
    of beach in this northern town of Mauritius, with its perfect palm trees lining the soft edge of sparkling 
    white sand and turquoise water. Under the crystal water you will find a wide array of marine life, 
    including lion fish, moray eels, trumpet fish, white-spotted boxfish and more.`
  },
  {
    title: "Ile aux Cerfs (island off the east coast)", // angel fish, blue-stripe snappers and blacktip groupers.
    markers: {
      lat: -20.271957,
      lng: 57.799214
    },
    information: `This beautiful island is best explored for a full day as it offers more than just snorkelling, 
    with its picture-perfect beaches that are ideal for sunbathing and a number of family-friendly facilities. 
    Take a boat out to enjoy the underwater splendor and spot some of Mauritius’s most wonderful coral and 
    marine life, such as angel fish, blue-stripe snappers and blacktip groupers.`
  },
]

// Dolphin markers
let map3Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: -20.452782,
      lng: 57.312444
    },
    information: "Le Morne Beach, under the shadow of the mighty Le Morne Brant mountains," +
      " is known as the ultimate surfing spot in the country. This top Mauritius surf spot" +
      " is famous for the ‘One Eye’, the ‘eye’ surfers see on Le Morne’s rock face when" +
      " they find the sweet spot in which to catch the perfect wave! If you’re a beginner," +
      " test your skills on the west side of the peninsula. This location is also known as" +
      " ‘Kite Lagoon’, due to it being a popular venue for kitesurfing in Mauritius. Enjoy" +
      " some of the best swells of incredibly high waves on the island (averaging 3.5 feet)."
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: -20.326333,
      lng: 57.377806
    },
    information: "Le Morne Beach, under the shadow of the mighty Le Morne Brant mountains," +
      " is known as the ultimate surfing spot in the country. This top Mauritius surf spot" +
      " is famous for the ‘One Eye’, the ‘eye’ surfers see on Le Morne’s rock face when" +
      " they find the sweet spot in which to catch the perfect wave! If you’re a beginner," +
      " test your skills on the west side of the peninsula. This location is also known as" +
      " ‘Kite Lagoon’, due to it being a popular venue for kitesurfing in Mauritius. Enjoy" +
      " some of the best swells of incredibly high waves on the island (averaging 3.5 feet)."
  }
]

// Kite Surfing markers
let map4Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: -20.452782,
      lng: 57.312444
    },
    information: "Le Morne Beach, under the shadow of the mighty Le Morne Brant mountains," +
      " is known as the ultimate surfing spot in the country. This top Mauritius surf spot" +
      " is famous for the ‘One Eye’, the ‘eye’ surfers see on Le Morne’s rock face when" +
      " they find the sweet spot in which to catch the perfect wave! If you’re a beginner," +
      " test your skills on the west side of the peninsula. This location is also known as" +
      " ‘Kite Lagoon’, due to it being a popular venue for kitesurfing in Mauritius. Enjoy" +
      " some of the best swells of incredibly high waves on the island (averaging 3.5 feet)."
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: -20.326333,
      lng: 57.377806
    },
    information: "Le Morne Beach, under the shadow of the mighty Le Morne Brant mountains," +
      " is known as the ultimate surfing spot in the country. This top Mauritius surf spot" +
      " is famous for the ‘One Eye’, the ‘eye’ surfers see on Le Morne’s rock face when" +
      " they find the sweet spot in which to catch the perfect wave! If you’re a beginner," +
      " test your skills on the west side of the peninsula. This location is also known as" +
      " ‘Kite Lagoon’, due to it being a popular venue for kitesurfing in Mauritius. Enjoy" +
      " some of the best swells of incredibly high waves on the island (averaging 3.5 feet)."
  }
]

// Scuba Diving markers
let map5Markers = [{
    title: "Le Morne Brant", // Ultimate surfing spot, Le Morne Brant
    markers: {
      lat: -20.452782,
      lng: 57.312444
    },
    information: "Le Morne Beach, under the shadow of the mighty Le Morne Brant mountains," +
      " is known as the ultimate surfing spot in the country. This top Mauritius surf spot" +
      " is famous for the ‘One Eye’, the ‘eye’ surfers see on Le Morne’s rock face when" +
      " they find the sweet spot in which to catch the perfect wave! If you’re a beginner," +
      " test your skills on the west side of the peninsula. This location is also known as" +
      " ‘Kite Lagoon’, due to it being a popular venue for kitesurfing in Mauritius. Enjoy" +
      " some of the best swells of incredibly high waves on the island (averaging 3.5 feet)."
  },
  {
    title: "Tamarin Bay", // Newbies, Tamarin Bay Surf School
    markers: {
      lat: -20.326333,
      lng: 57.377806
    },
    information: "Le Morne Beach, under the shadow of the mighty Le Morne Brant mountains," +
      " is known as the ultimate surfing spot in the country. This top Mauritius surf spot" +
      " is famous for the ‘One Eye’, the ‘eye’ surfers see on Le Morne’s rock face when" +
      " they find the sweet spot in which to catch the perfect wave! If you’re a beginner," +
      " test your skills on the west side of the peninsula. This location is also known as" +
      " ‘Kite Lagoon’, due to it being a popular venue for kitesurfing in Mauritius. Enjoy" +
      " some of the best swells of incredibly high waves on the island (averaging 3.5 feet)."
  }
]

// Credit: Eamonn's 'How To Google Maps' PDF
// Credit: Google Maps API Documentation -> https://developers.google.com/maps/documentation/javascript/examples/map-simple
function surfingMap() {
  // Set the map
  const map = new google.maps.Map(document.getElementById("surfing-map"), {
    zoom: 10.50,
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
    let sidePanel = document.getElementById("side-panel");
    // Credit: To close current info window when another marker is clicked -> https://groups.google.com/g/google-maps-js-api-v3/c/cA2VRg4TO1k?pli=1
    var currentInfoWindow = null;
    // Credit: Google Maps Documentation for creating infowindow -> https://developers.google.com/maps/documentation/javascript/infowindows
    _marker.addListener("click", () => {
      let contentString = `
      <h3>${marker.title}</h3>
      <div id="bodyContent">
      <h6>Wave Height</h6>
      <p>${marker.waveHeight}</p>
      <a href="${marker.websiteAddress}" target="_blank">${marker.websiteName}</a>
      </div>
      </div>
      `;
      // Add info window
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
      });
      if (currentInfoWindow != null) {
        currentInfoWindow.close();
      }
      // open info window
      infowindow.open({
        anchor: _marker,
        map,
        shouldFocus: false,
      });
      // close info window
      currentInfoWindow = infowindow;
      map.addListener("click", () => {
        infowindow.close();
      });

      sidePanel.innerHTML = `
      <!-- Image by Pexels from Pixabay -->
      <img class="card-img-top panel-image" src="assets/images/card-images/wave.jpg" alt="Card image cap">
      <div class="card-body contain-text">
      <h3>${marker.title}</h3>
      <p>${marker.information}</p>
      <a href="${marker.websiteAddress}">${marker.websiteName}</a>
      </div>
      `;
    });
  }
}

function snorkelingMap() {
  const map = new google.maps.Map(document.getElementById("snorkeling-map"), {
    zoom: 9.75,
    center: {
      lat: -20.182073,
      lng: 57.591610
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

    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString = `<div id="content"><div id="siteNotice"></div>
      <h3 id="firstHeading" class="firstHeading">${marker.title}</h3>
      <div id="bodyContent">
      <p>${marker.information}</p>
      <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
      https://en.wikipedia.org/w/index.php?title=Uluru</a>(last visited June 22, 2009).</p>
      </div>
      </div>`;
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

    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString = `<div id="content"><div id="siteNotice"></div>
      <h3 id="firstHeading" class="firstHeading">${marker.title}</h3>
      <div id="bodyContent">
      <p>${marker.information}</p>
      <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
      https://en.wikipedia.org/w/index.php?title=Uluru</a>(last visited June 22, 2009).</p>
      </div>
      </div>`;
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

    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString = `<div id="content"><div id="siteNotice"></div>
      <h3 id="firstHeading" class="firstHeading">${marker.title}</h3>
      <div id="bodyContent">
      <p>${marker.information}</p>
      <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
      https://en.wikipedia.org/w/index.php?title=Uluru</a>(last visited June 22, 2009).</p>
      </div>
      </div>`;
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

    var currentInfoWindow = null;
    _marker.addListener("click", () => {
      let contentString = `<div id="content"><div id="siteNotice"></div>
      <h3 id="firstHeading" class="firstHeading">${marker.title}</h3>
      <div id="bodyContent">
      <p>${marker.information}</p>
      <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
      https://en.wikipedia.org/w/index.php?title=Uluru</a>(last visited June 22, 2009).</p>
      </div>
      </div>`;
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

function initAllMaps() {
  surfingMap();
  snorkelingMap();
  dolphinMap();
  kiteMap();
  scubaMap();
}