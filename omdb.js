//OMDB api key: 40e9cece

var request = require("request");

var userMovieInput = process.argv;
var movieName = "";

// Loop through all the words in the node argument
for (var i = 2; i < userMovieInput.length; i++) {
  if (i > 2 && i < userMovieInput.length) {
    movieName = movieName + "+" + userMovieInput[i];
  }
  else {
    movieName += userMovieInput[i];
  }
}

var omdbURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
console.log(omdbURL);

request(omdbURL, function(error, response, data) {
	
	console.log('error:', error); 
  	console.log('statusCode:', response && response.statusCode); 

  if (!error && response.statusCode === 200) {

    console.log(`Release Year: ` + JSON.parse(data).Year);
	console.log(`Title:` + JSON.parse(data).Title);
	console.log(`IMDB Rating:` + JSON.parse(data).imdbRating);
	console.log(`Rotten Tomatoes Rating:` + JSON.parse(data).tomatoRating);
	console.log(`Country:` + JSON.parse(data).Country);
	console.log(`Language:` + JSON.parse(data).Language);
	console.log(`Director:` + JSON.parse(data).Director);
	console.log(`Actors:` + JSON.parse(data).Actors);
	console.log(`Plot:` + JSON.parse(data).Plot);

  }
};

module.exports = omdbRequest;