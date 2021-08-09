// surfing markers
// Credit: Wave info - 'Wanna Surf' -> https://www.wannasurf.com/spot/Africa/Mauritius/
let map1Markers = [{
    title: "Le Morne",
    markers: {
      lat: -20.452782,
      lng: 57.312444
    },
    // Photo by Keith Lyle from Pexels
    image: "surf1",
    description:
      `Absolutelty a must for surfing,This Unesco world heritage has prestine beaches, great swells, and on a great day, 
      it is the home of the eye, an almost perfect wave forming a tube for hundreds of metres. The stuff of dreams but 
      with the reward comes the risk. The waters here can be treacherous but amazing surfing to be had.`,
    websiteName: "Surf School",
    websiteAddress: "http://prydeclub.com/school/surfing/",
    experience: "Experienced surfers",
    waveDirection: "Right and left",
    bottom: "Reef (coral, sharp rocks etc..)",
    wavePower: "Hollow",
    waveLength: "Normal (50-150m)",
    bestTidePosition: "Mid and high tide",
    waveHeight: "1-3 metres+",
    danger: "Urchins, rips/undertow, and rocks"
  },
  {
    title: "Tamarin Bay",
    markers: {
      lat: -20.326333,
      lng: 57.377806
    },
    // Photo by Jason Back from Pexels
    image: "surf2",
    description:
      `Stuck in time somewhere years ago, this great surfing spot, being somewhat of a legendary beach, offers 
      challenging swells and waves. Great for experienced surfers, but also a good place to learn under guidance.`,
    websiteName: "Tamarin Bay Surf School",
    websiteAddress: "https://surf-mauritius.com/",
    experience: "Experienced surfers",
    waveDirection: "Left",
    bottom: "Sandy",
    wavePower: "Hollow, Fun, Powerless",
    waveLength: "Normal (50-150m)",
    bestTidePosition: "High tide only",
    waveHeight: "1.5-2.5 metres+",
    danger: "Localism and sharks"

  },
  {
    title: "Black Rocks",
    markers: {
      lat: -20.319111,
      lng: 57.368139
    },
    // Photo by Parthiban V from Pexels
    image: "surf3",
    description:
      `Great place if you're looking for some challenging waves. Best left to the experienced surfer, 
      premium surfing is at high tide. Talk to the locals before heading out, sharks are often spotted here.`,
    experience: "Experienced surfers",
    waveDirection: "Right",
    bottom: "Reef (coral, sharp rocks etc..)",
    wavePower: "Hollow, Powerful, Ledgey",
    waveLength: "Normal (50-150m)",
    bestTidePosition: "Mid and high tide",
    waveHeight: "1-4 metres+",
    danger: "Urchins, rips/undertow, rocks, localism, and sharks"
  },
  {
    title: "Ilôt Sancho",
    markers: {
      lat: -20.503694,
      lng: 57.448389
    },
    // Photo by Jess Loiterton from Pexels
    image: "surf4",
    description:
      `The venue for the international surfing competitions, the strong currents are a great place 
      to surf, but not to be taken lightly. The beach is big enough to support all surfing levels.`,
    experience: "All surfers",
    waveDirection: "Left",
    bottom: "Sandy with rock",
    wavePower: "Ordinary",
    waveLength: "Short (< 50 metres)",
    bestTidePosition: "Mid tide",
    waveHeight: "1.5-2.5 metres+",
    danger: "Rocks"
  },
  {
    title: "Rivière des Galets",
    markers: {
      lat: -20.505750,
      lng: 57.456139
    },
    // Photo by Joseph Greve on Unsplash
    image: "surf5",
    description:
      `Great left and right handed surf breaks in this less developed part of Mauritius. It is a gem in the rough. Constant great waves 
      are a dream for the experienced surfer. This place does not disappoint. The amazing beach is just a picture perfect location`,
    experience: "All surfers",
    waveDirection: "Right and left",
    bottom: "Sandy",
    wavePower: "Ordinary, Fun, Powerless",
    waveLength: "Short (< 50 metres)",
    bestTidePosition: "All tides",
    waveHeight: "1-2 metres+",
    danger: "Urchins, rips/undertow, and rocks"
  },
  {
    title: "Darne",
    markers: {
      lat: -20.452333,
      lng: 57.709972
    },
    // Photo by BEN SELWAY on Unsplash
    image: "surf6",
    description:
      `Avoid the low tide, this place offers amazing surfing, the waves run up to 50 metres here. Not too busy and an 
      experience to remember. The clear waters and great conditions make this a must on your itinerary.`,
    experience: "All surfers",
    waveDirection: "Left",
    bottom: "Reef (coral, sharp rocks etc..)",
    wavePower: "Powerless",
    waveLength: "Short (< 50 metres)",
    bestTidePosition: "Mid and high tide",
    waveHeight: "1.5-2.5 metres+",
    danger: "Urchins and rocks"
  },
  {
    title: "Maconde",
    markers: {
      lat: -20.493556,
      lng: 57.369278
    },
    // Photo by Ice Tea on Unsplash
    image: "surf7",
    description:
      `This place gets crowded, but the constant conditions, and great waves and swells make it popular 
      for its surfing. During the week is the safest bet, the weekends can be challenging.`,
    experience: "All surfers",
    waveDirection: "Left",
    bottom: "Reef (coral, sharp rocks etc..)",
    wavePower: "Powerless, Slab",
    waveLength: "Short (< 50 metres)",
    bestTidePosition: "Mid and high tide",
    waveHeight: "1-3 metres+",
    danger: "Urchins, rips/undertow, and rocks"
  }
]

// Snorkeling markers
let map2Markers = [{
    title: "Pointe aux Piments",
    markers: {
      lat: -20.064677,
      lng: 57.518749
    },
    // Image by Arhnue Tan from Pixabay
    image: "snorkel1",
    description: `Pointe aux Piments is on the north-west coast of Mauritius. There are great spots for a short swim from the beach calm. 
      Expect an abundance of coral and fish, even eels, and if you swim a little further you may be lucky and see the hawksbill turtle.`,
    // Credit: 'Snorkeling Report' -> https://www.snorkeling-report.com/spot/snorkeling-recif-attitude-mauritius/
    marineLife: `Galaxea, Pocillopora, peacock flounders, lizardfish, honeycomb groupers, false stonefish,
    surge wrasse, teardrop butterflyfish, whitespotted boxfish, Moorish idols, sea turtles, Flutemouth, Longnose Filefish`,
    experience: "Beginner",
    maxDepth: "2m",
    waterEntrance: "From a sandy beach",
    potentialDanger: "Usual precautions"
  },
  {
    title: "Blue Bay Marine Park",
    markers: {
      lat: -20.444496,
      lng: 57.709895
    },
    // Image by GREGOR from Pixabay
    image: "snorkel2",
    description:
      `Probably the most popular spot for snorkeling in Mauritius. This protected marine park offers clear waters 
      5-6 metres deep, more than 50 coral species, and a surprisingly large variety of fish. Great for beginners 
      and amazing sea life. From clown fish, to turtles, you can see why it is so popular.`,
    // Credit: 'Snorkeling Report' -> https://www.snorkeling-report.com/spot/snorkeling-blue-bay-mauritius/
    marineLife: `Mushroom corals, soft coral, surgeonfish, Parrotfish, Moorish idols, sergeant majors, Mauritian clownfish,
    hawksbill sea turtles, Damselfish, mangroves`,
    experience: "Intermediate",
    maxDepth: "6m",
    waterEntrance: "Easy, from a sandy beach (or from a boat)",
    potentialDanger: "Usual precautions"
  },
  {
    title: "Pereybere Beach",
    markers: {
      lat: -19.993565,
      lng: 57.591050
    },
    // Photo by Benjamin L. Jones on Unsplash
    image: "snorkel3",
    description:
      `In the North Pereybere Beach, there are great beaches, restaurants and amazing snorkeling spots. Easily accessed 
      from a public beach and a short swim; but its worth getting a boat to take you further in. This place always amazes, 
      with green and hawksbill turtles often spotted between the colourful coral.`,
    // Credit: 'Snorkeling Report' -> https://www.snorkeling-report.com/spot/snorkeling-pereybere/
    marineLife: `Surgeonfish, butterflyfish, wrasses, sea turtles (both green and hawksbill), Mauritius clownfish, barracuda, 
    groupers, emperors, snappers, triggerfish, damsels, wrasses, boxfish`,
    experience: "Beginner",
    maxDepth: "10m past the drop off",
    waterEntrance: "From a sandy beach",
    potentialDanger: "Boat traffic in and outside the channels"
  },
  {
    title: "Flic en Flac",
    markers: {
      lat: -20.299633,
      lng: 57.363380
    },
    // Photo by Stella Ribeiro on Unsplash
    image: "snorkel4",
    description:
      `This amazing beach offers one of the most diverse varieties of sea life in the west side of Mauritius. 
      It is a snorkelers dream. Abundance ranging from parrotfish and moray eels to dolphins. A trip to Flic en Flac is worth it.`,
    // Credit: 'Snorkeling Report' -> https://www.snorkeling-report.com/spot/snorkeling-flic-en-flac/
    marineLife: `Racoon butterflyfish, vagabond butterflyfish, threadfin butterflyfish, moray eels, filefish, small groupers, 
    coral clumps, whitetail dascyllus, moorish idols, green chromis, wrasse, goatfish, small honeycomb groupers, rabbitfish, 
    small moray eels, lionfish, burrowing sea urchins`,
    experience: "Intermediate",
    maxDepth: "2m",
    waterEntrance: "From a sandy beach",
    potentialDanger: "Boats - Divers-down buoy recommended outside the designated swimming areas"
  },
  {
    title: "Trou aux Biches", // lion fish, moray eels, trumpet fish, white-spotted boxfish
    markers: {
      lat: -20.034875,
      lng: 57.544449
    },
    // Photo by Olga Tsai on Unsplash
    image: "snorkel5",
    description:
      `Easily accessible, the turquoise clear waters and white sand beach lined with palm trees frame this snorkeling picturesque 
      beauty. See ion fish, moray eels, trumpet fish, white-spotted boxfish and hawksbill turtles are often seen deeper in at the passes.`,
    // Credit: 'Snorkeling Report' -> https://www.snorkeling-report.com/spot/snorkeling-trou-aux-biches/
    marineLife: `tropical fish, sea turtles, butterflyfish, fine branch coral, finger coral, giant clams, red pencil 
    urchins, conches, moorish idols, convict tangs, whitetail dascyllus, filefish, pufferfish, triggerfish, Damselfish, colourful starfish`,
    experience: "Intermediate",
    maxDepth: "2m",
    waterEntrance: "From a sandy beach",
    potentialDanger: "Boats - Diving flag recommended outside the designated swimming areas"
  },
  {
    title: "Ile aux Cerfs",
    markers: {
      lat: -20.271957,
      lng: 57.799214
    },
    // Photo by Patrick Jansen on Unsplash
    image: "snorkel6",
    description:
      `Blacktip groupers, blue stripe snappers, and sunbream are often seen between the brilliant coral in the crystal clear waters 
      of Ile aux Cerfs. With much more to do here than snorkel, this is a great spot for the family and amazing for snorkeling.`,
    // Credit: 'Snorkeling Report' -> https://www.snorkeling-report.com/fr/spot/snorkeling-trou-eau-douce-ile-maurice/
    marineLife: `parrotfish, damselfish, butterflyfish, surgeonfish, colorful giant clams, Blacktip grouper, Bluestripe snapper, 
    bright corals, angel fish`,
    experience: "Intermediate",
    maxDepth: "3m",
    waterEntrance: "From a boat",
    potentialDanger: "Usual precautions"
  },
]

// Dolphin markers
let map3Markers = [{
    title: "Dolswim Ltd",
    markers: {
      lat: -20.36432,
      lng: 57.37234
    },
    // Photo by Jeremy Bishop from Pexels
    image: "dolphins1",
    description: `Dolphins and whales are great to be seen in the early morning and can be encountered on the west coat of 
    Mauritius. Seeing pods of up to 20 Spinners and Bottlenose dolphins is an unforgettable experience.`,
    websiteAddress: "http://www.dolswim.com/index.php/en/dolphins-encounter-mauritius/",
    phone: "(230) 5422 9281",
    address: "La Jetée Road, Black River, Mauritius"
  },
  {
    title: "JPH Charters",
    markers: {
      lat: -20.364320,
      lng: 57.378980
    },
    // Image by Wolfgang Zimmel from Pixabay
    image: "dolphins2",
    description: `Two kinds of dolphins can be observed in Mauritian waters: the Spinner and the Bottlenose. The peers do not 
    like to share the same spot and you will never see them together: If the Spinners are around and the Bottlenose
    dolphins arrive, the Spinners will leave the bay, heading to the open sea. Come enjoy the company of the dolphins.`,
    websiteAddress: "https://jph.mu/dolphin-cruises/",
    phone: "(+230) 5729 0901",
    address: "L'Estuaire, La Balise Marina, Black River"
  },
  {
    title: "Mauritius Decorder Immobilier",
    markers: {
      lat: -20.005780,
      lng: 57.590760
    },
    // Image by John Gibson from Pixabay
    image: "dolphins3",
    description: `Dolphins are known to be intelligent and fun to be around. An essentially social animal, they have been 
    reported to have formed bonds with human beings and protected swimmers from shark attacks. As such, there are many
    reasons to go meet these endearing aquatic mammals. Come experince the dolphins in Mauritius.`,
    websiteAddress: "https://www.decordier-immobilier.mu/en/swimming-with-dolphins/",
    phone: "+230 268 2828",
    address: `Route Royale
    30510 Grand Baie, Ile Maurice`
  },
  {
    title: "Prestige Holidays Mauritius",
    markers: {
      lat: -20.238321,
      lng: 57.485564
    },
    // Image by Bernd Hildebrandt from Pixabay
    image: "dolphins4",
    description: `Discover the spectacular world of dolphins by watching them in their natural environment. You can even 
    enjoy swimming with dolphins! This is once in a lifetime adventure where you’ll watch dolphins in their
    natural habitat. Swimming with dolphins is another amazing experience.`,
    websiteAddress: "http://phmauritius.com/activity/dolphin-watching-swimming/",
    phone: "+230 467 2392",
    address: `Prestige Holidays Mauritius
    Suite 213a
    Ebène Junction
    Ebène Cybercity 7220`
  },
  {
    title: "Vitamin Sea Ltd",
    markers: {
      lat: -20.362271,
      lng: 57.374810
    },
    // Photo by Jeremy Zero on Unsplash
    image: "dolphins5",
    description: `On the West Coast of Mauritius, we are lucky enough to have wild dolphins that come near the shore to socialize, 
    rest and play every morning. We love these sea creatures and our goal is to guide our customers through this lifetime 
    experience; passion and respect are our priority. Stay calm and positive, the dolphins can feel your energy as they 
    have cerebral and emotional ratios very close to us humans!`,
    websiteAddress: "https://www.vitaminsealtd.com/swimming-with-dolphins",
    phone: "(+230) 4590 1450",
    address: "L’Estuaire, Black River 90606, Mauritius"
  },
  {
    title: "Karlos Excursions",
    markers: {
      lat: -20.465218,
      lng: 57.308537
    },
    // Photo by TJ Fitzsimmons on Unsplash
    image: "dolphins6",
    description: `Observe and swim with wild dolphins in their natural habitat. Our Skippers will make sure you have great visibility 
    while respecting the dolphins and guidelines set by the local authority. We favour the Southern dolphin watching region,
    which is less busy, although, if not possible, we go towards the West. Snorkel in the turquoise lagoon: your skipper will 
    bring you to the best spot depending on the itinerary (dolphins’ location) and tide.`,
    websiteAddress: "https://karlosexcursions.com/trip/private-morning-dolphins-experiences/",
    phone: "+230 5726 5599",
    address: `Le Morne beach,
    Mauritius`
  },
  {
    title: "Dream Dolphin",
    markers: {
      lat: -20.354127,
      lng: 57.362198
    },
    // Photo by Joe Boyne from Pexels
    image: "dolphins7",
    description: `Swim with dolphins in Mauritius! Join Dream Dolphin for an exciting experience on our boat based on the west coast 
    of Mauritius at Rivière Noire. This area is well known for its calm and clear waters, it is perfect for
    snorkeling and is home to both dolphins and those mighty visitors - whales and sperm whales.`,
    websiteAddress: "https://dream-dolphin.com/",
    phone: "(+230) 57 48 04 30",
    address: `Public beach La Preneuse Tour Martello tower Coastal road, La Preneuse, Mauritius`
  },
  {
    title: "Dadou Excursion",
    markers: {
      lat: -20.216253,
      lng: 57.398758
    },
    // Photo by Chelsea Bradley from Pexels
    image: "dolphins8",
    description: `Plunge into the remarkable world of these powerful marine mammals and come face to face with the dolphins. 
    Swimming with dolphins is an incredibly moving experience which will bring you into contact with strikingly beautiful
    scenery, unspoiled landscapes and wonderful animals.`,
    websiteAddress: "https://www.dadouexcursion.com/index.php/excursions/",
    phone: "(+230) 5743 3000",
    address: `Avenue Tisserins
    Morcellement Belle Vue
    Albion 91001
    Mauritius`
  }
]

// Kite Surfing markers
let map4Markers = [{
    title: "Le Morne lagoon",
    markers: {
      lat: -20.462994,
      lng: 57.318486
    },
    // Photo by David Troeger on Unsplash
    image: "kite1",
    description:  
      `Le Morne lagoon is the best known and loved kite surfing location on the Island. On a calm day the large flatwater spots 
      are amazing for beginners and lessons. Check the tides though, it can be shallow at times and coral heads might surprise 
      you. Great place for freeriders and freestyle. Strong winds make things a challenge with fast currents, choppy
      water, and large swells. The flatwater however, is excellent.`,
    wind: "South East",
    websiteName: "Kite Lagoon Vibes Mauritius",
    websiteAddress: "https://kite-lagoon-vibes.business.site/?utm_source=gmb&utm_medium=referral"
  },
  {
    title: "Pointe d’Esny",
    markers: {
      lat: -20.427527,
      lng: 57.727326
    },
    // Image by Christo Anestev from Pixabay
    image: "kite3",
    description:
      `Hidden from the holiday crowds and vast commercial holiday spots on the island. Pointe d'Esny (a.k.a. Paradise Beach) is a 
      treasure to find. Access can be challenging if you're not in one of the seaside resorts, with access restricted to the 
      privately owned beach either on foot, or by water. The rewards are great, Kitefoiling is a dream at this spot, the flatwater is
      awesome when its not too windy. June to September is best, but there are nice winds here all year round.`,
    wind: "South East",
    websiteName: "Specialised Kiteboarding",
    websiteAddress: "https://specialisedkiteboarding.com/products/hydrofoil-lesson-8-hours"
  },
  {
    title: "Le Morne point",
    markers: {
      lat: -20.465657,
      lng: 57.316851
    },
    // Image by quepasasi from Pixabay
    image: "kite4",
    description:
      `Le Morne, a Unesco World Heritage Site, is the best place for advanced, independent kite surfing enthusiasts. Not much here 
      for the tourists, a beautiful beach and a fruit stand, some food trucks, but nothing to do here besides enjoy nature. Beware the 
      trees on launching and landing, kites get trapped here on the daily.`,
    wind: "South East",
    websiteName: "Le Morne Kite School",
    websiteAddress: "http://www.lemorne-kiteschool.com/"
  },
  {
    title: "Île aux Bénitiers",
    markers: {
      lat: -20.416262,
      lng: 57.345475
    },
    // Image by Виктор Сапожников from Pixabay
    image: "kite8",
    description:
      // Credit: Wake Up Stoked -> https://wakeupstoked.com/kitesurf-mauritius/
      `Île aux Bénitiers is a wonderful uninhabited island. Great North wind, there are boat owners who bargain with tourists 
      to take them to the island daily. This place is serene. Bring your food and drinks, there are no shops here.`,
    wind: "North",
    websiteName: "Mauritius Surf Holidays",
    websiteAddress: "https://www.mauritiussurfholidays.com/it/"
  },
  {
    title: "Palmar",
    markers: {
      lat: -20.210817,
      lng: 57.792158
    },
    // Image by Jean van der Meulen from Pixabay
    image: "kite7",
    description:
      `A bit out the way for most, Palmar offers easy launching and landing with pretty stable onshore winds, not too deep, 
      but great for beginners. Kilometres of awesome lagoon, this spot is sweet.`,
    wind: "East and South East",
    websiteName: "Kite Globing",
    websiteAddress: "https://kiteglobing.com/en/center-palmar-beach-belle-mare/"
  },
  {
    title: "One Eye",
    markers: {
      lat: -20.466452,
      lng: 57.308565
    },
    // Image by Kitereisen from Pixabay
    image: "kite5",
    description:
      `One Eye, this place can be treacherous, there is nothing but glory or misery to be found here. This place is coveted. 
      Picture this.... A perfect tube forming from the break that goes for hundreds of metres.... This is that place. 
      Professionals beware, this place is amazing but dangerous.`,
    wind: "East and South East",
    websiteName: "Pryde Club Mauritius",
    websiteAddress: "https://prydeclub.business.site/"
  },
  {
    title: "Anse la Raie",
    markers: {
      lat: -19.990613,
      lng: 57.632411
    },
    // Image by Steven Bol from Pixabay
    image: "kite6",
    description:
      `Anse la Raie is an uncrowded haven for the more advanced kite surfer. Low tide is very
      shallow and exposes many rocks. Conditions here are better than at Cap Malhereux.`,
    wind: "South East",
    websiteName: "Ion Club Kitesurfing",
    websiteAddress: "https://www.ion-club.net/anse-la-raie/"
  },
  {
    title: "Belle Mare",
    markers: {
      lat: -20.189758,
      lng: 57.774352
    },
    // Image by Dimitris Vetsikas from Pixabay
    image: "kite2",
    description:
      `This uncrowded, well organised beach is great for a variety of watersports, with some of the best organised downwinders 
      around. This is probably the best place to learn to kite surf. The water is great and is a wonderful place to launch.`,
    wind: "East and South East",
    websiteName: "East Kite School Mauritius",
    websiteAddress: "https://www.facebook.com/eastkite.palmarmauritius.1"
  }
]

// Scuba Diving markers
let map5Markers = [{
    title: "Grand Baie",
    divingSite: "Holt’s Rock",
    markers: {
      lat: -20.002950,
      lng: 57.542217
    },
    // Photo by Alan Youngblood on Unsplash
    image: "scuba1",
    description:
      `Holt's Rock is strewn with beautiful soft corals and sea fans carpeting the volcanic basalt rocks. Explore the caves and 
      tunnels, darting with moray eels and surrounded by titan triggerfish and porcupine fish. With good lighting conditions, 
      and a slight current, this Multi-Level, 16 to 25 metres, reef dive is perfect for drifting through the vast coral, frequented by
      Lobsters, titan ballistae and other large fish.`,
    diveType: "Multi-Level, reef",
    depth: "16-25 metres"
  },
  {
    title: "Coin de Mire",
    divingSite: "Djabeda",
    markers: {
      lat: -19.945317,
      lng: 57.619317
    },
    // Photo by Vlad Tchompalov on Unsplash
    image: "scuba2",
    description:
      `Being one the most popular sights for underwater photography, the pinkish corals, being close to the wreck site of the Djabeda, 
      Coin de Mire, is great to view eagle rays and turtles, but remember to remain in the shallow parts to avoid the strong currents.`,
    diveType: "Wreck, deep",
    depth: "25-35 metres"
  },
  {
    title: "Le Morne",
    divingSite: "Hoi Siong No 6",
    markers: {
      lat: -20.422683,
      lng: 57.294850
    },
    // Photo by Gerald Schömbs on Unsplash
    image: "scuba3",
    description:
      `The Hoi Siong No 6 wreck is found at a depth of approximately 29 metres, having been sunk in 2003 to create an artificial reef 
      this site has exploded with color and life and is the prefect diving experience for beginners. The wreck is between 16-29 
      metres and the great visibility of Le Morne is a bonus.`,
    depth: "16-29 metres",
    diveType: "wreck"
  },
  {
    title: "Le Morne",
    divingSite: "St. Jacques",
    markers: {
      lat: -20.509833,
      lng: 57.394633
    },
    // Image by Alina Chereches from Pixabay
    image: "scuba4",
    description:
      `Starting from the lagoon at 5m, the drift takes the diver through a myriad of ecosystems, from tranquil sanctuary to the 
      feeding grounds of eagle rays, and reef sharks. This spectacular dive is for the more advanced diver due to the technical 
      difficulty of the dive. Easily one of the most rewarding dives Mauritius has to offer.`,
    depth: "5-30 metres",
    diveType: "drift, reef"
  },
  {
    title: "Flic en Flac",
    divingSite: "Cathedral",
    markers: {
      lat: -20.289000,
      lng: 57.355933
    },
    // Image by lucatelles from Pixabay
    image: "scuba5",
    description:
      `Starting from 15m extending to 30m, the Cathedral is probably the most internationally recognised diving site. This reef and cave 
      dive is suitable for all experience levels. With ever changing topography, the corals and sea life is extensive. With many fish 
      darting through the coral and the chance to see a large risk of lobster meandering nearby. This is a must for the naturalist diver.`,
    depth: "15-30 metres",
    diveType: "reef, cave"
  },
  {
    title: "Grand Baie",
    divingSite: "Aquarium",
    markers: {
      lat: -20.002767,
      lng: 57.559900
    },
    // Image by FIRST online from Pixabay
    image: "scuba6",
    description:
      `The Aquarium is a square, reef dive up to 15 metres, as the name alludes the visibility is great and perfect for learners and 
      experienced divers alike. Video and photography opportunities are good. With Sergeants majors, trumpet fish, flying lionfish, 
      Moorish idols, mullet, moray eels and much more.`,
    diveType: "Square, reef",
    depth: "14 metres"
  },
  {
    title: "Grand Baie",
    divingSite: "Whale Rock",
    markers: {
      lat: -19.997083,
      lng: 57.550383
    },
    // Image by lucatelles from Pixabay
    image: "scuba7",
    description:
      `Whale rock provides a reef dive at a depth of 25metres. Suitable for intermediate to experts divers. Great variety of corals and 
      fish with swordfish and hammerheads spotted during the summer months.`,
    depth: "25 metres",
    diveType: "Reef"
  },
  {
    title: "Trou aux Biches",
    divingSite: "Stella Maru",
    markers: {
      lat: -20.015733,
      lng: 57.516650
    },
    // Photo by Maël BALLAND from Pexels
    image: "scuba8",
    description:
      `The Stella provides a 18-24metre wreck dive. With a giant moray eel living in the chimneys of the wreck and the explosion of colour 
      as you approach the wreck is astounding. This Japanese wreck, a short distance from port Lewis, is must for the underwater photographer.`,
    diveType: "Wreck",
    depth: "18-24 metres"
  },
  {
    title: "Trou aux Biches",
    divingSite: "Caravelle",
    markers: {
      lat: -20.000550,
      lng: 57.546383
    },
    // Photo by Richard Segal from Pexels
    image: "scuba9",
    description:
      `With strong water currents at times, Caravelle, provides a multi-level reef dive in stages 13metres and 20metres, with depths of 
      up to 30metres. The views are amazing. Young sharks and turtles, stingrays and eagle rays can occasionally be seen during the day. 
      The large schools of barracuda, snapper, grouper are often seen in Caravelle.`,
    diveType: "Multi-Level, reef",
    depth: "30 metres"
  }
]

// Credit: Google Maps API Documentation -> https://developers.google.com/maps/documentation/javascript/examples/map-simple
function surfingMap() {
  // Set the map
  const map = new google.maps.Map(document.getElementById("surfing-map"), {
    zoom: 11,
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
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 350,
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
    zoom: 10,
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
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
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
    zoom: 10,
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
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
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
    zoom: 10,
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
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
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
    zoom: 9.75,
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
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
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