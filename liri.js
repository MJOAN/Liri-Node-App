const keys = require('./keys.js');

const fs = require('fs');
const util = require('util');

const Twitter = require('twitter'); 

const Spotify = require('node-spotify-api');
const request = require('request');   //OMDB api: 40e9cece

var action = process.argv[2];
var value = process.argv[3];

/*try {
  var keys = require('./keys.js');
} catch(error) {liri
  twitterKeys = false;
  credentials = false;
}*/

switch (action) {
  case 'my-tweets':
    myTwitter();
    break;

  case 'spotify-this-song':
    mySpotify();
    break;

  case 'movie-this':
    myMovie();
    break;

  case 'do-what-it-says':
    myDo();
    break;
}


function myTwitter() {

const client = new Twitter({
    consumer_key: 'qALburluBDwac42PXtE0oqwfC',
    consumer_secret: 'gTwvY4XfTRpwr5gf4M2aND4aJ4W5s5hAWLnHJwJC6sNo0S0YYJ',
    access_token_key: '919642726987001856-ZJPpygAuEQ0XmG7K2KG3lvfUmagbBIP',
    access_token_secret: 'cJDrDE8QtWS9DHAJxSK9FT86d7JgYzvXuhrvk4OSO1I9G',
});

var params = {
    screen_name: '_mjoan',
    count: 10
  }; 

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) { console.error('Twitter response/request error: ', error.message);
    return;
  } else {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log(tweets[i].user);
        console.log(tweets[i].text);
        console.log(tweets[i].entities);
      }    	      
    }
  });
};


function mySpotify() {

var spotify = new Spotify ({
  id: '45663fbd48ef4e93ac6455142ea4ec38',
  secret: '229d8fb6643f4bd3bbe481282406ec5d'
});

var song = process.argv[3];

var params = {
    type: 'track',
    query: song
  }; 

spotify
  .request('https://api.spotify.com/v1/search?q=name:' + song + '&type=track&limit=10')

  .then(function(data) {
      console.log('Song Details: ', data.tracks);

      console.log('Artist: ' + data.tracks.items[0].artists[0].name);
      console.log('Song: ' + data.tracks.items[0].name);
      console.log('Preview Link: ' + data.tracks.items[0].preview_url);
      console.log('Album: ' + data.tracks.items[0].album.name);
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });  
};



function myMovie() {
var movie = process.argv[3];

var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
console.log(omdbURL);

request(omdbURL, function(error, response, data) {
	if (error) {
		console.log('error:', error); 
  }
  
  if (!error && response.statusCode === 200) {
	  console.log('Release Year: ' + JSON.parse(data).Year);
		console.log('Title: ' + JSON.parse(data).Title);
		console.log('IMDB Rating: ' + JSON.parse(data).imdbRating);
		console.log('Rotten Tomatoes Rating: ' + JSON.parse(data).tomatoRating);
		console.log('Country: ' + JSON.parse(data).Country);
		console.log('Language: ' + JSON.parse(data).Language);
		console.log('Director: ' + JSON.parse(data).Director);
		console.log('Actors: ' + JSON.parse(data).Actors);
		console.log('Plot: ' + JSON.parse(data).Plot);
    }
  });
};


function myDo() {

fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
    var output = data.split(",");
    for (var i = 0; i < output.length; i++) {
        console.log(output[i]);
    }
  });
};


/* BONUS OPTION ATTEMPTS: log text file input/errors
NODEJS docs: https://nodejs.org/api/console.html

var logFile = fs.createWriteStream('log.txt', { flags: 'a' });
var logStdout = process.stdout;

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
  console.error = console.log;
};


// OR: 
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new Console(output, errorOutput);

const count = 5;
logger.log('count: %d', count);


*/
     




