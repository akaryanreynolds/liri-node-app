var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");
var Spotify = require('node-spotify-api');

var action = process.argv[2];
var value = process.argv[3];

// var client = new twitter({
//     consumer_key: keys.twitterKeys.consumer_key,
//     consumer_secret: keys.twitterKeys.consumer_secret,
//     access_token: keys.twitterKeys.access_token,
//     access_token_secret: keys.twitterKeys.access_token_secret
//   })

// var params = {
//     screen_name: 'akaryanreynolds',
//     count: 10
// }

// From class activity 15 converted to work with hw
switch (action) {
    case "my-tweets":
      myTweets();
      break;
  
    case "spotify":
      spotifyThis(value);
      break;
  
    case "movie-this":
      omdbThis(value);
      break;
  
    case "do-what-it-says":
      doIt();
      break;
  }

// // functions
// function myTweets(){
    
// }

function spotifyThis(value){
  if(value == null){
    value = 'The Sign';
  }
  console.log(value + "******")
  var spotify = new Spotify({
    id: keys.spotifyKeys.client_key,
    secret: keys.spotifyKeys.client_secret
  });
   
  spotify.search({ type: 'track', query: value, limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
    jsonBody = JSON.stringify(data.tracks);
    console.log('**********************')
    console.log(jsonBody);
    console.log('*******************')
    // console.log(data.tracks.items);
    // for(var songs in data.tracks.items){
    //   console.log(data.tracks.items[songs].album.name);
    // }
    //console.log(jsonBody); 
  });
  
  }