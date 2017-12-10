var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var action = process.argv[2];
var value = process.argv[3];

var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
  });

var params = {
    screen_name: 'akaRyanReynolds',
    count: 10
};

// From class activity 15 converted to work with hw
switch (action) {
  case "myTweets":
    myTweets();
    break;

  case "spotify":
    spotifyThis(value);
    break;

  case "omdb":
    omdbThis(value);
    break;

  case "do-what-it-says":
    doIt();
    break;
}

// FUNCTIONS-------------------------------------

// function for myTweets()
function myTweets(){

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    // if (error) throw error
    console.log(tweets);
    if (!error) {
      console.log(tweets);
    }
  })
};
// End Twitter


// function for spotifyThis()
function spotifyThis(value) {
  if (value == undefined) {
    value = 'The Sign';
  }
  console.log('*******You SEARCHED:----' + value + "----******")
  var spotify = new Spotify({
    id: keys.spotifyKeys.client_key,
    secret: keys.spotifyKeys.client_secret
  });

  spotify.search({ type: 'track', query: value, limit: 1 }, function (err, data) {
    if (err) {
      return console.log('Error occurred via your SEARCH TERM: ' + err);
    }

    // jsonBody = JSON.stringify(data.tracks.items[0]);
    // console.log(jsonBody);
    // Here are the outputs for the Soptify search
    console.log()
    console.log('____________Here is your Data______________')
    console.log('Artist ' + data.tracks.items[0].album.artists[0].name);
    console.log('Song: ' + data.tracks.items[0].name);
    console.log('Preview Link: ' + data.tracks.items[0].preview_url);
    console.log('Album: ' + data.tracks.items[0].album.name);
    console.log('___________________________________________')
    console.log()
  });
}
// End Spotify


// function for omdbThis()
function omdbThis(value) {
  if (value == undefined) {
    value = 'Mr. Nobody';
  }
  // Used code from HW 17 OMDB Request
  request("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy", function (err, response, body) {
    console.log('*******You SEARCHED:----' + value + "----******")

    var jsonBody = JSON.parse(body)
    if (err) {
      return console.log('Error occurred via your SEARCH TERM: ' + err);
    }
    console.log(' ');
    console.log('____________Here is your Data______________')
    console.log('Title: ' + jsonBody.Title);
    console.log('Year: ' + jsonBody.Year);
    console.log('IMDb Rating: ' + jsonBody.imdbRating);
    console.log('Rotten Tomatoes Rating: ' + jsonBody.tomatoRating);
    console.log('Country: ' + jsonBody.Country);
    console.log('Language: ' + jsonBody.Language);
    console.log('Plot: ' + jsonBody.Plot);
    console.log('Actors: ' + jsonBody.Actors);
    console.log('___________________________________________')
    console.log(' ');
    // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  })
}
// End OMDB

// End FUNCTIONS---------------------