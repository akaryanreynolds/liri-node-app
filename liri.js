var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");

var action = process.argv[2];
var value = process.argv[3];

var client = new twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
  })

var params = {
    screen_name: 'akaryanreynolds'
    count: 10
}

// From class activity 15 converted to work with hw
switch (action) {
    case "my-tweets":
      myTweets();
      break;
  
    case "spotify-this-song":
      spotifyThis(value);
      break;
  
    case "movie-this":
      omdbThis(value);
      break;
  
    case "do-what-it-says":
      doIt();
      break;
  }

// functions
function myTweets(){
    
}