
var keys = require('./keys.js');
const Twitter = require('twitter'); 
var client = new Twitter(keys.twitterKeys);   //took me firday night 5 hrs; sat day; 6 hrs to get this;

const SpotifyWebApi = require('spotify-web-api-node');
const request = require('request');   //OMDB api key: 40e9cece

//  try catch keys error
try {
  var keys = require('./keys.js');
} catch(err) {
  twitterKeys = false;
  spotifyKey = false;
}

const fs = require('fs');

var action = process.argv[2];
var value = process.argv[3];

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
    result_type: 'recent',
    count: 20
  }; 

client.get('statuses/user_timeline', params, function(error, tweets, response) {
	
  if (error) {
    	console.error('Twitter response/request error: ', error.message);
    	return;

    } else {
    	console.log(tweets[0].screen_name);
    	console.log(tweets[0].text);
      console.log(tweets[0].created_at);
    }
  });
};


function mySpotify() {

var spotifyApi = new SpotifyWebApi({
  accessToken : 'njd9wng4d0ycwnn3g4d1jm30yig4d27iom5lg4d3'
});

var song = value;
var params = {
    type: 'track',
    query: song
  }; 

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
  });

"https://api.spotify.com/v1/search?q=' +song + '&type=artist" -H 
"Authorization: Bearer {your access token}"

spotifyApi.searchTracks(song)
.then(function(data) {
    (data.statusCode).should.equal(200);     
      console.log('Song Details: ', data.body);
      var data = JSON.parse(data.body);

      console.log('Artist: ' + data.artists[0].name);
      console.log('Song Name: ' + data.name);
      console.log('Preview Song Link: ' + data.preview_url);
      console.log('Album Name: ' + data.album.name);
    }, function(err) {
       
      });
  };  

     


function myMovie() {
var movie = process.argv[3];

/*for (var i = 2; i < value.length; i++) {
  if (i > 2 && i < value.length) {
    movie = movie + "+" + value[i];
  }
  else {
    movie += value[i];
  }
}*/

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


