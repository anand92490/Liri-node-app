
require("dotenv").config();
const keys = require("./keys.js");

const fs = require('fs');
const axios = require('axios');
const moment = require('moment');

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

let liriInput = process.argv[2];
let value = process.argv.slice(3).join("");

switch (liriInput) {
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


function concertThis(value) {
  if (value === "") {

    console.log("\nPlease enter the name of the artist of your choice");

  } else {
    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
      .then(function (response) {
        // console.log(response);
        if (response.data.length <= 0) {
          console.log("Sorry!! Can't find the Artist");
        } else {
          for (var i = 0; i < response.data.length; i++) {


            console.log("\n-------------------------------\n" +
              // "\nArtist/Band:" + response.data[i].lineup[0]+
              "\nName: " + response.data[i].venue.name +
              "\nLocation: " + response.data[i].venue.city +
              "\nEvent: Date" + moment(response.data[i].datetime, format("MM/DD/YYYY")));

          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}



function spotifyThisSong(value) {
  // console.log("spotify is good!")
  if (value === "") {
    value = "scar tissue";
  }
  spotify
    .search({ type: 'track', query: value })
    .then(function (response) {
      // console.log(response);
      for (var i = 0; i < 1; i++) {
        var spotifyResults =
          "------------------------------------------" +
          "\nArtist(s): " + response.tracks.items[i].artists[0].name +
          "\nSong Name: " + response.tracks.items[i].name +
          "\nAlbum Name: " + response.tracks.items[i].album.name +
          "\nPreview Link: " + response.tracks.items[i].preview_url;

        console.log(spotifyResults);
      }



    })
    .catch(function (err) {
      console.log(err);
    });
};






function movieThis(value) {
  if (value === "") {
    value = "mr nobody";
    console.log("\n\nIf you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/\nIts on Netflix");

  }

  axios.get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
    .then(function (response) {
      console.log("\n--------------------------\n" +
        "\nTitle: " + response.data.Title +
        "\nYear: " + response.data.Year +
        "\nRotten Tomatoes Rating: " + response.data.Ratings[1].value +
        "\nCountry: " + response.data.Country +
        "\nLanguage: " + response.data.Language +
        "\nPlot: " + response.data.Plot +
        "\nActors: " + response.data.Actors)


    })
    .catch(function (error) {
      console.log(`Sorry boss!! That movie doesn't exist on our Database\n ${error}`);
    });
};



function doWhatItSays() {
  console.log("what does the page say");
}

