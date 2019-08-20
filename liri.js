
require("dotenv").config();
const keys = require("./keys.js");

const fs = require('fs');
const axios = require('axios')
const moment = require('moment')

const Spotify = require("node-spotify-api")
const spotify = new Spotify(keys.spotify);

let liriInput = process.argv[2];
let value = process.argv.slice(3).join("");

switch (liriInput){
    case "concert-this":
        concertThis(value);
    break;


    case "spotify-this-song":
      spotifyThisSong(value);
    break;



    case "movie-this":
        movieThis(value);
    break;



    case "do-what-it-says":
      doWhatItSays(value);
    break;
};

function concertThis(){
  console.log("concert this");
};

function spotifyThisSong(){
  console.log("spotify this song")
};




function movieThis(value){
if ( value === null ){
  value = "mr nobody";
}

axios.get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
.then(function(response) {
    console.log("\n------------------------------------------------------------------------------------------------\n" 
    + "\nTitle: " + response.data.Title + 
    "\nYear: " + response.data.Year +
    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].value +
    "\nCountry: " + response.data.Country +  
    "\nLanguage: " + response.data.Language +
    "\nPlot: " + response.data.Plot +
    "\nActors: " + response.data.Actors +
    "\n------------------------------------------------------------------------------------------------\n" )
 
    
  })
  .catch(function(error) {
 console.log(`Sorry boss!! That movie doesn't exist on our Database\n ${error}`);
  });
};



function doWhatItSays(){
  console.log("what does the page say");
}

