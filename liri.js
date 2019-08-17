
 require("dotenv").config();
const keys = require("./keys.js");

const fs = require('fs');
const axios = require('axios')
const moment = require('moment')

const Spotify = require("node-spotify-api")
const spotify = new Spotify(keys.spotify);

const liriInput = process.argv[2];
const theInput = process.argv.slice(3).join('');



switch(liriInput){
    case "concert-this":
        concertThis()
    break;


    case "spotify-this-song":
    break;



    case "movie-this":
    break;



    case "do-what-it-says":
    break;
}

var movieName = process.argv[4];


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Year the movie came out: " + response.data.Year);
    console.log("IMDB Rating of the movie: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].value);
    console.log("Country where the movie was produced: " + response.data.Country);
    console.log("Language of the movie: " + response.data.Language);
    console.log("Plot of the movie: " + response.data.Plot);
    console.log("Actors in the movie: " + response.data.Actors);



  })
  .catch(function(error) {
    if (error.response.data) {
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });






// function concertThis(){
//     const artist = "";
//     const artist = process.argv[4];


// let  queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
// axios.get(queryURL).then(function(bandResponse){

//     console.log("Venue: " + bandResponse.data[0].venue.name);
//     console.lgo("Venue Location: " + bandResponse.data[0].venue.city);
//     console.log("On :" + moment(bandResponse.data[0].datetime).format(MM/DD/YYYY));
// });
// }

//create a variable to store the input data


