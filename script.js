// All my objects
const theEiffelTower = {
  name: "The Eiffel Tower",
  type: "Wrought-iron lattice tower",
  location: "Paris, France",
  designer: "Company of Gustave Eiffel",
  built_for: "1889 World's Fair",
  height_meters: 330,
  held_title: "Tallest man-made structure for 41 years",
  surpassed_by: "Chrysler Building, New York City"
};

const theFirstMoonLanding = {
  name: "First Moon Landing",
  date: "July 20, 1969",
  mission: "Apollo 11",
  organization: "NASA",
  country: "United States",
  astronauts: ["Neil Armstrong", "Buzz Aldrin"],
  audience: "Over 500 million people"
};

const theGreatWallOfChina = {
  name: "The Great Wall of China",
  type: "Fortification system",
  location: "Northern borders of ancient and Imperial China",
  construction_started: "7th century BC",
  structure: "System of walls, watchtowers, and fortresses",
  status: "UNESCO World Heritage site",
  symbolism: "China's strength and history"
};

const theMonaLisaPainted = {
  name: "Mona Lisa",
  type: "Portrait painting",
  artist: "Leonardo da Vinci",
  created: "1503-1506",
  location: "Louvre Museum, Paris",
  subject: "Lisa Gherardini",
  technique: "Sfumato",
  famous_for: "Enigmatic expression",
  notable_event: "Stolen in 1911, gained global fame"
};

const theDiscoveryofPenicillin = {
  name: "Discovery of Penicillin",
  discovered_by: "Alexander Fleming",
  year: 1928,
  location: "Laboratory in the UK",
  developed_by: ["Howard Florey", "Ernst Chain"],
  impact: "First modern antibiotic, saved millions of lives"
};

const theGrandCanyonLocated = {
  name: "The Grand Canyon",
  location: "Arizona, USA",
  formed_by: "Colorado River",
  age: "5 to 6 million years",
  length_miles: 277,
  width_miles: 18,
  depth_miles: "Over 1 mile",
  management: "Grand Canyon National Park"
};

const gutenbergPrintingPress = {
  name: "Gutenberg Printing Press",
  inventor: "Johannes Gutenberg",
  origin: "Germany",
  year: "Around 1440",
  innovation: "Movable type printing press",
  first_book: "Gutenberg Bible"
};

const theFalloftheBerlinWall = {
  name: "Fall of the Berlin Wall",
  date: "November 9, 1989",
  symbolism: "End of the Cold War",
  years_standing: 28
};

const theRMS = {
  name: "RMS Titanic",
  type: "British passenger liner",
  date_sank: "April 15, 1912",
  voyage: "Southampton to New York City",
  operator: "White Star Line",
  nickname: "Unsinkable",
  deaths: "Over 1,500"
};

const mountEverest = {
  name: "Mount Everest",
  location: "Mahalangur Himal, Himalayas",
  height_meters: 8848.86,
  first_ascent: "May 29, 1953",
  first_climbers: ["Sir Edmund Hillary", "Tenzing Norgay"],
  significance: "Highest mountain on Earth"
};

const mondliDetails ={
    name: "Mondli",
    surname: "Khoza",
    age: 22,
    gender: "Male",
    workPlace:"CodeTribe"
}

const outputMondli = document.getElementById("output");


outputMondli.innerHTML = `<h3>${mondliDetails.name}</h3>`
                         

const outputDiv = document.getElementById("output");


outputDiv.innerHTML = `
  <div id="card">
    <img src="media/image1.webp" alt="image1">
    <div>
        <h2>${theEiffelTower.name}</h2>
  
        <p><strong>Type:</strong> ${theEiffelTower.type}</p>
        <p><strong>Location:</strong> ${theEiffelTower.location}</p>
        <p><strong>Designer:</strong> ${theEiffelTower.designer}</p>
        <p><strong>Built for:</strong> ${theEiffelTower.built_for}</p>
        <p><strong>Height:</strong> ${theEiffelTower.height_meters} meters</p>
        <p><strong>Held Title:</strong> ${theEiffelTower.held_title}</p>
        <p><strong>Surpassed By:</strong> ${theEiffelTower.surpassed_by}</p>
    </div>
   </div>

  <div id="card">
    <img src="media/image2.jpg" alt="image1">
    <div>
        <h2> ${theFirstMoonLanding.name}</h2>
  <p><strong>Date:</strong> ${theFirstMoonLanding.date}</p>
  <p><strong>Mission:</strong> ${theFirstMoonLanding.mission}</p>
  <p><strong>Organization:</strong> ${theFirstMoonLanding.organization}</p>
  <p><strong>Country:</strong> ${theFirstMoonLanding.country}</p>
  <p><strong>Astronauts:</strong> ${theFirstMoonLanding.astronauts.join(", ")}</p>
  <p><strong>Audience:</strong> ${theFirstMoonLanding.audience}</p>
    </div>
   </div>

    <div id="card">
    <img src="media/image3.jpg" alt="image1">
    <div>
      <h2>${theGreatWallOfChina.name}</h2>
      <p><strong>Type:</strong> ${theGreatWallOfChina.type}</p>
      <p><strong>Location:</strong> ${theGreatWallOfChina.location}</p>
      <p><strong>Started:</strong> ${theGreatWallOfChina.construction_started}</p>
      <p><strong>Structure:</strong> ${theGreatWallOfChina.structure}</p>
      <p><strong>Status:</strong> ${theGreatWallOfChina.status}</p>
      <p><strong>Symbolism:</strong> ${theGreatWallOfChina.symbolism}</p>
    </div>
   </div>

    <div id="card">
    <img src="media/image4.jpg" alt="image1">
    <div>
       <h2>${theMonaLisaPainted.name}</h2>
       <p><strong>Type:</strong> ${theMonaLisaPainted.type}</p>
       <p><strong>Artist:</strong> ${theMonaLisaPainted.artist}</p>
       <p><strong>Created:</strong> ${theMonaLisaPainted.created}</p>
       <p><strong>Location:</strong> ${theMonaLisaPainted.location}</p>
       <p><strong>Subject:</strong> ${theMonaLisaPainted.subject}</p>
       <p><strong>Technique:</strong> ${theMonaLisaPainted.technique}</p>
       <p><strong>Famous for:</strong> ${theMonaLisaPainted.famous_for}</p>
       <p><strong>Notable Event:</strong> ${theMonaLisaPainted.notable_event}</p>
    </div>
   </div>

    <div id="card">
    <img src="media/image5.webp" alt="image1">
    <div>
       <h2>${theDiscoveryofPenicillin.name}</h2>
       <p><strong>Discovered By:</strong> ${theDiscoveryofPenicillin.discovered_by}</p>
       <p><strong>Year:</strong> ${theDiscoveryofPenicillin.year}</p>
       <p><strong>Location:</strong> ${theDiscoveryofPenicillin.location}</p>
       <p><strong>Developed By:</strong> ${theDiscoveryofPenicillin.developed_by.join(", ")}</p>
       <p><strong>Impact:</strong> ${theDiscoveryofPenicillin.impact}</p>
    </div>
   </div>

    <div id="card">
    <img src="media/image6.jpg" alt="image1">
    <div>
        <h2>${theGrandCanyonLocated.name}</h2>
        <p><strong>Location:</strong> ${theGrandCanyonLocated.location}</p>
        <p><strong>Formed By:</strong> ${theGrandCanyonLocated.formed_by}</p>
        <p><strong>Age:</strong> ${theGrandCanyonLocated.age}</p>
        <p><strong>Length:</strong> ${theGrandCanyonLocated.length_miles} miles</p>
        <p><strong>Width:</strong> ${theGrandCanyonLocated.width_miles} miles</p>
        <p><strong>Depth:</strong> ${theGrandCanyonLocated.depth_miles}</p>
        <p><strong>Management:</strong> ${theGrandCanyonLocated.management}</p>
    </div>
   </div>

    <div id="card">
    <img src="media/image7.jpg" alt="image1">
    <div>
          <h2>${gutenbergPrintingPress.name}</h2>
          <p><strong>Inventor:</strong> ${gutenbergPrintingPress.inventor}</p>
          <p><strong>Origin:</strong> ${gutenbergPrintingPress.origin}</p>
          <p><strong>Year:</strong> ${gutenbergPrintingPress.year}</p>
          <p><strong>Innovation:</strong> ${gutenbergPrintingPress.innovation}</p>
          <p><strong>First Book:</strong> ${gutenbergPrintingPress.first_book}</p>
    </div>
   </div>

    <div id="card">
    <img src="media/image8.jpg" alt="image1">
    <div>
          <h2>${theFalloftheBerlinWall.name}</h2>
          <p><strong>Date:</strong> ${theFalloftheBerlinWall.date}</p>
          <p><strong>Symbolism:</strong> ${theFalloftheBerlinWall.symbolism}</p>
          <p><strong>Years Standing:</strong> ${theFalloftheBerlinWall.years_standing}</p>
    </div>
   </div>

    <div id="card">
    <img src="media/image9.jpg" alt="image1">
    <div>
          <h2>${theRMS.name}</h2>
          <p><strong>Type:</strong> ${theRMS.type}</p>
          <p><strong>Date Sank:</strong> ${theRMS.date_sank}</p>
          <p><strong>Voyage:</strong> ${theRMS.voyage}</p>
          <p><strong>Operator:</strong> ${theRMS.operator}</p>
          <p><strong>Nickname:</strong> ${theRMS.nickname}</p>
          <p><strong>Deaths:</strong> ${theRMS.deaths}</p>
    </div>
   </div>

    <div id="card">
    <img src="media/image10.jpg" alt="image1">
    <div>
        <h2>${mountEverest.name}</h2>
        <p><strong>Location:</strong> ${mountEverest.location}</p>
        <p><strong>Height:</strong> ${mountEverest.height_meters} meters</p>
        <p><strong>First Ascent:</strong> ${mountEverest.first_ascent}</p>
        <p><strong>First Climbers:</strong> ${mountEverest.first_climbers.join(", ")}</p>
        <p><strong>Significance:</strong> ${mountEverest.significance}</p>
    </div>
   </div>
`;
