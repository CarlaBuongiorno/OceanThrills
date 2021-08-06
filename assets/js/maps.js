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
    description:   //yyyyyyyyyyyyyyyyyyyyy
      `Le Morne lagoon is the best known and loved kite surfing location on the Island. On a clam day the large flatwater spots 
      are amazing for beginners and lessons. Check the tides though it can be shallow and at times, or a coral head might surprise 
      you. Great place for freeriders and freestyle. Strong winds make things a challenge with fast currents,choppy
      water, and large swells. The flatwater however, is excellent.`,
      // yyyyyyyyyyyyyyyyyyyyyyyyyy
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
      // Credit: Kiterr -> https://kiterr.com/kitespots/africa/best-kitesurfing-spots-mauritius/
      `Pointe d’Esny – also know as Paradise Beach. The locals know this spot as being one of the most beautiful stretch of white sand 
      beach and the best preserved coral reef lagoon on the entire island.
    Pointe d’Esny beach is without the doubt a well hidden gem and surely takes a proud spot in our best secret kitespots top ten.
    
    The bummer is that the beach is effectively sealed off by a few luxurious private properties, so unless you happen to be staying in 
    one of the beachfront resorts, the only way to get to this secret beach is either by water or by foot.
    You can either take a long beach walk all the way from Blue Bay, which is worth the hassle anyways or your other option would be to 
    take this little, just about 150 metres long pathway that’s just off the main Costal Road.
    This tiny pathway sits just in between a couple of the private houses and if you manage to find it, it will lead you to the Paradise 
    beach. So if you enjoy geo-caching, there you’re go, go find the treasure!
    
    If you happen to be here on a non-windy day, make sure to checkout the near by charming village of Mahebourg for an authentic 
    historical Mauritian experience.
    
    <!-- Credit: Wake Up Stoked -> https://wakeupstoked.com/kitesurf-mauritius/ -->
    Big lagoon, picturesque spot, ideal for beginners as well. There is a kite school called Specialised Kiteboarding 
    (https://specialisedkiteboarding.com/?fbclid=IwAR2ILzHVMF0xK4NrkfEJ2ypgmayc_jQcO6xnntgKrAB2xncXIKsD51NfJqs).
    
    <!-- Credit: Planet Kitesurf https://www.planetkitesurfholidays.com/countries/mauritius/mus -->
    Kitesurfing Holidays At Pointe D'esny, Mauritius
Pointe d'Esny is situated on the South East coast of Mauritius. Boasting the island’s whitest stretch of beach and located a mere 
15-minute drive from the airport, Pointe d'Esny offers a secluded, peaceful location in one of Mauritius' untouched areas. Offering a 
tropical paradise setting, fit for any postcard, this part of Mauritius boasts the largest lagoon on the island. Not far away is the 
charming historical village of Mahebourg, however, the real charm of Pointe d'Esny is that it is located away from the crowds and 
commercial resorts found elsewhere in Mauritius.

The large flat water lagoon, with its light to moderate winds provides a haven for foilers and those who want to learn how to kite foil.

The Spot At Pointe D'esny
The kite spot at Pointe d'Esny has yet to be discovered by the masses and as a result offers a tranquil, quiet playground where you can 
really enjoy your time on the water. There is just a small school operated here by the Mauritian kitesurfer that developed the click-bar. 
Just off a sparkling white beach, a deep flat water lagoon stretches out for a long distance before the reef, providing a blue playground 
that is just perfect for foiling. The wind here is generally South or South-East which is cross-shore. There is generally a line of small 
boats at anchor close to the shore so basic skills are needed to get out beyond these to really enjoy the freedom this spot offers. The 
wind is consistent and clean but is lighter than some of the more popular kitesurf spots on the island so big kites are needed while 
foiling is the real highlight of this destination. The best months to kitesurf at Pointe d'Esny is between June and September, but you 
can find wind here all year round.`,
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
      // Credit: Wake Up Stoked -> https://wakeupstoked.com/kitesurf-mauritius/
      `This was usually our go-to spot. If you’re into waves or are an independent advanced kitesurfer, riding safely, you will probably 
      prefer this spot. Make sure to take care of those trees when launching and landing, kites get trapped in them daily 😉

    Since it’s UNESCO world heritage there are no restaurants at the spot. There is a fruit stand with fresh fruits, coconuts and drinks 
    and usually some food truck with paninis or noodles at the spot. For the non kitesurfing Begleitung there is not too much to do but 
    go for a beach walk or sit on the downwind side of the beach where you can’t feel the wind.`,
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
      `Again a very nice small island which works with North wind. You can take the boat from La Gaulette (either go with a kite school 
        or go there and bargain with one of the boat owners there, there are quite a lot crossing). It is super nice flat water over 
        there. Bring something to eat and drink if you’re staying the whole day, there is nothing there.`,
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
      // Credit: Kiterr -> https://kiterr.com/kitespots/africa/best-kitesurfing-spots-mauritius/
      `Palmar – Palmar is basically just a few kilometres round the cost from Trou d’Eau Douce. Kitespot more known to the locals. 
      All travellers mostly hang around Le Morne and not many people venture out to try something different, so Le Morne always get to 
      bask in the glory.
    Palmar is a few kilometres long stretch of an awesome lagoon with water not too deep and pretty stable 45 degree onshore wind. 
    There’s a Palmar beach just on the lagoon, so launching shouldn’t be an issue anywhere. Spot is a pretty good choice for the beginners.`,
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
      // Credit: Kiterr -> https://kiterr.com/kitespots/africa/best-kitesurfing-spots-mauritius/
      `This is the real treat for the wave riders and one of the most respected wave kitesurfing spots on the island. It could be a real 
      challenge even for the pro kiters due to the fast viciously punchy left handers. One Eye is a legendary bone-crunching wave rolling 
      just outside the reef protecting the its lagoon. It is one of the world’s fastest & cleanest waves that can deliver the biggest 
      wipeouts ever. On good days, the wave breaks and forms a perfect tube that goes for hundreds of meters along the reef. One Eye can 
      give you the best ride of your life, but don’t you dare to under estimate it.
      There’s a rumour going around about a windsurfer who got his lower leg double fractured. The story says that he was thrown out of 
      One Eye’s lip onto the flats. He just could’t stand the punch and hard landing and his leg just buckled under the massive pressure.
       The broken bone went through the deck into the core of his board. With such horror story in mind, you do need to pay a lot of 
       respect even just looking at the way from far away.
      While One Eye is definitely the most respected beasts in Le Morne, not many riders realise that the real danger is actually 
      somewhere else. If you look at some of the drone shots in the photo gallery below, you’ll realise that the entire lagoon flows 
      towards one massive exit.
      The waves push the water over the shallow reef to the huge channel. If you happen to get in to trouble at this point, there’s no 
      other chance than getting rescued. Self rescue or swimming against the current with the outgoing tide is just not an option. The 
      rescue boat services are available for emergencies in Le Morne, so if you are about to do some shredding, it would be wise to book 
      it for your session.`,
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
      // Credit: Kiterr -> https://kiterr.com/kitespots/africa/best-kitesurfing-spots-mauritius/
      `Ansa la Raie is located just a few miles East from Cap Malhereux. It is a part of the same lagoon, it offers 
      much better conditions, but beginners, specially those taking kitesurfing lessons, should still stay under a heavy watch of their 
      instructors. Just like at Cap Malheureux, this kitespot should be avoided by the beginners during low tides as the lagoon 
      becomes too shallow and the rocks are sticking out of the water. Other than that, it’s a peaceful, uncrowded spot.`,
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
      // Credit: Thrillophillia -> https://www.thrillophilia.com/water-sports-in-mauritius
      `One of the best Mauritius water sports, Kite Surfing at Belle Mare will offer you an out of the world experience. Trainers will be 
    available for you to teach you how to surf the waves with a waterboard. Two hours of training session can also extend if you want to 
    master the art and it is suitable for everyone even if you are an amateur or a beginner. One of the most stunning water sports 
    activities in Mauritius, you will have the time of your life making it one of the most memorable vacations.

    <!-- Credit: Kiterr -> https://kiterr.com/kitespots/africa/best-kitesurfing-spots-mauritius/ -->
    If you get bored in Palmar, change the scene and take a downwinder just a few kilometres up North to Belle Mare. Same kinda setup.
    
    <!-- Credit: Planet Kitesurf https://www.planetkitesurfholidays.com/countries/mauritius/mus -->
    Belle Mare Kitesurf Holiday Overview
On the east coast of Mauritius, 1km south from Belle Mare village, lays the picturesque beach Palmar. Palmar, like Le Morne on the south 
coast, is world renowned for being an incredibly beautiful beach offering a wide variety of watersports. Both destinations are must see 
kitesurf, SUP, and surf destinations. The kiting at Belle Mare offers beautifully flat and uncrowded water inside a closed turquoise 
lagoon with no currents or boat traffic. 

What sets the east coast of Mauritius apart from many other destinations is the variety of organised downwinders. The east coast is the 
perfect place to go on a downwinder as the combination of flat water and waves to kite on throughout the journey, along with the crystal 
clear waters will keep you mesmerised.

Planet Kitesurf are absolute specialists for Mauritius kitesurfing holidays. We strongly recommend speaking to one of our Mauritius 
travel experts today. 

Belle Mare Downwinders
The east coast is packed with unforgettable downwinder possibilities. You will be treated to kiting over thrilling waves, past temples 
and old fishing villages and you will see many other beautiful sights along the way.

There are a variety of downwinder options available when visiting Belle Mare (Palmar), all of which are guided by instructors who know 
every part of the journey. Also, a boat accompanies your group which takes you either there or back and is on hand to help if any 
problems occur.`,
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
      // Credit: 'Travel Start' -> http://www.travelstart.co.za/blog/best-diving-in-mauritius/
      `One of the most beautiful diving sites in Mauritius is, without a doubt, Holt’s Rock. Here you can dive through volcanic basalt 
    rocks, blanketed with sea fans and soft corals. The caves and tunnels make for an interesting, exploratory dive where porcupine fish, 
    titan triggerfish and moray eels dart between the crevices.
    
    <!-- Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html -->
    Holt's Rock contains an enormous number of granite rocks that are surrounded by coral reefs. The coral reefs are home to a variety 
    of biodiversities like titan triggerfish, wrasses, angelfish, parrotfish, butterflyfish, and yellowmouth edge lyretails and anemones. 
    Divers can come across schools of snappers, scorpionfish, and also encounter giant morays. These giant morays are at least two 
    metres long. You can catch a glimpse of the stunning parrotfish here.
    
    <!-- Credit: 'Just Diving' -> https://www.justdivingmauritius.com/en/main/product/holt-rock -->
    Holt Rock has large rock formations with good lighting conditions. With a slight current, it can be a drifting dive. The site has 
    many gorgonians and big fish. Lobsters and titan ballistae are also common.`,
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
      // Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html
      `Situated near the wreck site of Djabeda, Coin de Mire provides a gorgeous view for people who want to go scuba diving in 
      Mauritius. The ocean floor covered with pinkish coral reefs, seabeds and rocks are truly a breathtaking sight for the divers. 
      Though the site is one of the most popular sites for underwater photography, it is better to stay on the shallower part of the 
      reef to avoid drifting away due to strong currents. Many species like eagle rays, dog-tooth tunas and turtles can be observed on 
      the reef.

      <!-- Credit: https://www.bluewaterdivetravel.com/mauritius-diving -->
      The highlight here is the Djabeda wreck dive, which is completely covered in stunning pink soft coral. Octopus, scorpionfish, 
      stonefish, lionfish, and many reef fish are common here. Other creatures that can be found here include Barracuda, dolphins, 
      and stingrays.
      
      <!-- Credit: 'Travel Start' -> http://www.travelstart.co.za/blog/best-diving-in-mauritius/ -->
      A little offshore, about 90 minutes from the mainland, the islands Coin de Mire is perfect for beginner divers 
      and snorkellers. Some of the best snorkelling in Mauritius is around these turquoise lagoons. You might just be lucky enough to 
      spot some dolphins and sharks further out in the bay!
      
      <!-- Credit: https://www.uwphotographyguide.com/diving-mauritius -->
      Coin de Mire is a small, peculiar looking island lying 8 km to the north of Mauritius with what many consider to be the best 
      diving in Mauritius. Dives often feature wall and wreck diving with spectacular visibility (50m/200ft on a great day), as well 
      as chances to see large pelagics such as marlin. Its unique geology makes for some interesting underwater canyons and crevices 
      that can be quite fun to swim through.
      Perhaps the highlight of all dives at Coin de Mire is the Djabeda wreck dive. The wreck is a 144ft/44m long Japanese fishing 
      vessel sitting perfectly upright at a depth of approximately 100ft/30m. Completely covered in beautiful pink soft coral, the 
      wreck attracts perhaps the largest concentration of fish life on the north side of the island. Octopus, scorpionfish, stonefish, 
      lionfish, and many reef fish are common here. Less common are barracuda, dolphins, and sting rays.
      
      <!-- Credit: https://www.justdivingmauritius.com/en/main/product/djabeda_1 -->
      Djabeda is a Japanese fishing boat lying on a sandy bottom at 34 meters, right next to Coin de Mire. Djabeda is about 44m long, 
      10m high and 5m wide. While the main issue is the wreck itself, the site is alive with soft corals, fish shoals, King Fish, moray 
      eels, triggerfish, stone fish, scorpion fish, leaves and nudibranchs.`,
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
      // Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html
      `If you want to look at a fascinating wreck, Hoi Siong No 6 is the ideal site. Hoi Siong No 6 wreck can be found at a depth of 
      around 29 metres. It has also created an artificial reef over the years. This site is ideal for divers of all levels, from 
      beginners to experts. The artificial reef attracts a variety of marine species such as Barracuda, Tuna, Lionfish and Butterflyfish 
      among others. The dramatic sunken wreck is every underwater photographer's dream.
      
      <!-- Credit: https://www.thebrokebackpacker.com/best-diving-in-mauritius-guide/ -->
      A wreck dive and one way more appropriate for the beginners holidaying in Mauritius. The vessel was actually sunk on purpose to 
      create an artificial reef and sanctuary for the marine life in the area. Now, honestly, that’s just the coolest thing ever!

      Since it’s Viking burial, the Hoi Siong No. 6 has exploded with colour and is now home to a massive variety of coral and fishies. 
      Having only sunk in 2003, the wreck remains in fairly good nick and this, coupled with the awesome visibility at Le Morne, just 
      makes for a brilliant wreck dive. It’s one suitable for beginners too!

      Plus, you’re at Le Morne, and Le Morne is the best.`,
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
      // Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html
      `St. Jacques is one of the most popular sites for scuba diving in Mauritius. The diving trip starts in the lagoon, which is less 
      than 5 metres deep. The water currents then take the divers away to the coral walls and underwater caves. Rock pinnacles will also 
      be visible in these waters.

      The maximum depth is about 30 metres where the drift drive ends. In these waters, one can come across eagle rays, stingrays, 
      turtles, reef sharks and few other large species.  This dive is not suitable for beginners due to strong currents. The best time 
      for diving here is the period between November and May. Blue gorgonian fans, hard and soft corals, sharks, schools of trevallies, 
      and Tuna can also be seen.
      
      <!-- Credit: https://www.thebrokebackpacker.com/best-diving-in-mauritius-guide/ -->
      Kind of maybe more the south coast but you can reach Passe St Jacques from Le Morne so it still counts! It’s another choice but 
      reserved for the advanced divers due to the technicality of the site. Drift-diving means diving using transportation by the 
      underwater currents and the pull at Passe St Jacques is known for getting pretty strong.

      How’s the reward though? Smashing.

      The underwater life here is superb with a huge variety of ecosystems interacting. It’s not just the pacifists either. This is a 
      real good spot to see some of Mauritius’s underwater predators as they loiter the current waiting for outgoing prey.

      Eagle rays, barracudas, and even sharks are a real possibility here as well as schools of different fish like trevallies and 
      tuna. If you’re keen to see the merciless savagery of nature at its finest (as things are devoured before your very eyes), it’s 
      the best place to go in Mauritius!
      
      <!-- Credit: 'Travel Start' -> http://www.travelstart.co.za/blog/best-diving-in-mauritius/ -->
      Claimed to be one of the best drift dives in Mauritius, Passe St. Jacques is a playground for grey reef sharks, stingrays, turtles 
      and moray eels. At a depth of between 3 and 30 metres, this dive site is perfect for beginners all the way to advanced divers.`,
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
      // Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html
      `An ideal site for photography enthusiasts, the Cathedral has excellent topography. With grand caverns, caves and arches, 
      these waters give an incredible sight. To experience the sandy ocean floor, one has to dive to a depth of 30 metres, which 
      is also the deepest point of the Cathedral. Many different marine species like angelfish, wrasse, clownfish and groupers can 
      be found in these waters. One has to keep an eye on moray eels and few crustaceans, which often hide in the coral crevices.
      
      <!-- https://www.thebrokebackpacker.com/best-diving-in-mauritius-guide/ -->
      A complex and devastating underwater array, the Cathedral dive site in Mauritius is quite possibly its most world-renowned. 
      Sudden drop-offs and some majestic boulder formations have created a structure that’s a proverbial playground for the divemasters 
      and divepadawans alike.

      Starting from 18 m before the very sharp drop to the 30 m floor, the topography of Cathedral is wild! Featuring caves, holes, 
      chimneys, and cavities, the rocky scene is home to a teeming reef life as well as pods of lobsters scouring the depths for their next 
      bloodlust-enraged duel.

      If you have the appropriate level of experience, this is a must-visit place below Mauritius. This is some of the best scuba 
      diving Mauritius has to offer.
      
      <!-- Credit: 'Travel Start' -> http://www.travelstart.co.za/blog/best-diving-in-mauritius/ -->
      Some of the best diving in Mauritius can be experienced off the west coast. Flic en Flac is an excellent 
      point from where you can enjoy a variation of the most incredible drift, reef and wreck dives. The most famous of these is 
      Cathedral, perfect for all level divers. This dive site is a photographer’s dream as the warm light filters through its caverns and 
      arches. At 18-30 metres deep, you can easily spot snappers, groupers, angelfish, surgeonfish, squirrelfish and lobsters.
      
      <!-- https://mauritiusnow.com/things-to-do-in-mauritius/ -->
      The Cathedral is one of the best dive sites in Mauritius. Come under the water with us and let’s take a look… The sheer drop off 
      fuses with enormous boulders to create an exciting topography of caves and arches, where lobsters scuttle over the rock and reef 
      fish zig-zag above you. You can dive down to nearly 30 metres in this area and explore the cathedral-like cavern, lit angelically 
      by the sunlight beaming through the surface of the water. This dive spot is located on the west coast of the island near 
      Flic-en-Flac and is one of our favourites!
      
      <!-- Credit: 'Dive Zone' -> https://divezone.net/diving/mauritius -->
      Flic en Flac is on the west coast of Mauritius and a favourite of many divers! The dive site called “Cathedral” is located here and 
      it is considered one of the best dive sites in Mauritius. Indeed, starting at 18 meters on a sandy base and going deeper to 30 
      meters, the cathedral is a large cavern and cave system. The cavern allows properly guided divers to enter. The area is a 
      photographers dream with abundant marine life and interesting features.`,
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
      // Credit: 'Dive Zone' -> https://divezone.net/diving/mauritius
      `Grand Bay is one of the top tourist destinations in the country, it is also one of the top diving destinations. There are over a 
      dozen dive sites in the bay, of which most are perfect for open water divers. Aquarium (Grand Bay) is considered the best dive for 
      a beginning diver. It is a beautiful coral reef with sand chutes in breaks. The depths of the breaks are two to three meters.
      
      <!-- Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html -->
      With an abundance of fish and coral life, Grand Bay Aquarium contains a large reef that is divided by a sand gully. This created 
      a gap between the reef with walls as high as 3 metres on the sides. Due to the crystal clear water, you can have a good sight of 
      a variety of marine life. The sandy white ocean floor is a delight to your eyes as it radiated light into the water.

      The site offers a good view of underwater photography and video. It looks like an oasis which illuminated a medley of Fauna.  
      One special feature of this site for scuba diving in Mauritius is a giant moray eel, named Henry that is an adorable addition to the 
      experience!
      
      <!-- Credit: 'Just Diving' -> https://www.justdivingmauritius.com/en/main/product/aquarium-grandbay_1 -->
      The Grand Bay Aquarium consists of rock formations like two big teeth with a sandy path in between. The site is covered with hard 
      and soft corals. This is a very good site for beginners. As the name shows, it's a real aquarium with a live reef; sergeants 
      majors, trumpet fish, flying lionfish, the idol of Moors, mullet, moray eels and much more.
      
      <!-- Credit: 'Travel Start' -> http://www.travelstart.co.za/blog/best-diving-in-mauritius/ -->
      Beginners will love swimming through the Aquarium, a colourful rocky reef teeming with clown fish, butterflyfish, stonefish, puffer 
      fish and wire coral. This is an easy dive reaching a maximum depth of 15 metres and is often used as a training ground for diving 
      courses.`,
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
      // Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html
      `Whale Rock dive site takes divers to varying depths, and therefore it is ideal for intermediate to expert divers. Within a 
      20 metre zone, this dive site offers a variety of Fauna and Flora. Large marine creatures like swordfish and hammerheads are 
      occasionally seen during the summer.  Triggerfish, butterfly fish, parrotfish and labrets among others can be found in the Whale 
      Rock dive site.`,
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
      // Credit: 'Dive Zone' -> https://divezone.net/diving/mauritius
      `Trou aux Biches is on the North West coast, just a short distance from Port Lewis. Stella Maru is located here. A Japanese 
      fishing boat that now sits in 25 meters of water. It is considered one of the best wreck dive in Mauritius.
      
      <!-- Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html -->
      Stella Maru is an old Japanese trawler that sunk into the waters in 1987. This wreck attracted marine wildlife after leading to 
      it being declared as an artificial reef. The series of reefs are colonised by a variety of aquatic species like butterflyfish, 
      damsels, bannerfish, lionfish, surgeonfish and many more.

      The dive site is also home to two giant moray eels, one of which lives in the chimneys of the wreck. Octopuses, barracuda, leaf 
      scorpionfish, shellfish and domino damsels are also found in this site. The speciality of this site, the wreck, has so much for 
      in store for the visitors. The site will be every underwater photographer's dream.
      
      <!-- Credit: 'Just Diving' -> https://www.justdivingmauritius.com/en/main/product/stella-maru -->
      This Japanese freighter, grounded in 1987 and resting in vertical, is a wreck not to be missed. Over the years, it has been 
      encrusted and attracts a variety of colorful species, including rays, moray eels, parrotfish and leaf fish`,
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
      // Credit: 'Holidify' -> https://www.holidify.com/pages/scuba-diving-in-mauritius-783.html
      `Having a northern plateau descending in stages from 13 metres to 20 metres, Caravelle is a fantastic dive site with a large 
      population of Batfish. With a depth of 30 metres, this dive site is subject to strong ocean currents at times. These water 
      currents often carry dense shoals of barracuda and trevallies. Many types of angelfish can be found in these waters. Under 
      the days' rays, young sharks and turtles can also be seen. Divers of all levels can enjoy the Caravelle site, provided that 
      they are comfortable with strong water currents.
      
      <!-- Credit: 'Just Diving' -> https://www.justdivingmauritius.com/en/main/product/caravelle-1#1 -->
      Caravelle has an interesting topography with large rock formations, offering the possibility of a gentle drift. Schools of bats, 
      barracuda, snapper, grouper are often seen in Caravelle, with the opportunity to see eagle rays and stingrays.`,
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
        maxWidth: 300,
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