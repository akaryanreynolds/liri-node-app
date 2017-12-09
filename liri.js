var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");

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

// // functions
// function myTweets(){
    
// }

function spotifyThis(value){
  if(value == null){
    value = 'The Sign';
  }
  request('https://api.spotify.com/v1/search?q=' + value + '&type=track', function(error, response, body) {
    if (!error && response.statusCode == 200) {
        jsonBody = JSON.parse(body);
        console.log(' ');
        console.log('Artist: ' + jsonBody.tracks.items[0].artists[0].name);
        console.log('Song: ' + jsonBody.tracks.items[0].name);
        console.log('Preview Link: ' + jsonBody.tracks.items[0].preview_url);
        console.log('Album: ' + jsonBody.tracks.items[0].album.name);
        console.log(' ');
        fs.appendFile('terminal.log', ('===== Song =====\r\n' + Date() +'\r\n \r\nTERMINAL COMMANDS:\r\n$: ' + process.argv + '\r\n \r\nDATA OUTPUT:\r\n' + 'Artist: ' + jsonBody.tracks.items[0].artists[0].name + '\r\nSong: ' + jsonBody.tracks.items[0].name + '\r\nPreview Link: ' + jsonBody.tracks.items[0].preview_url + '\r\nAlbum: ' + jsonBody.tracks.items[0].album.name + '\r\n===== END =====\r\n \r\n'), function(err) {
            if (err) throw err;
        });
      }
    });
  }