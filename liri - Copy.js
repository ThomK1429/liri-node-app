// Liri.js
// Author: Tom Keel  2016 06 29

//Takes in all of the command line arguments
var inputString = process.argv;

//Parses the command line argument to capture ...

var argument1 = inputString[2]; 
switch (argument1) {

	case "tw":
	case "tweet":
  case "my-tweets":
    console.log("my-tweets");
    break;
  case "spot":
  case "spotify-this-song":
    console.log("spotify-this-song");
    break;
  case "mov":
  case "movie-this":
    console.log("movie-this");
    break;
  case "do":
  case "do-what-it-says":
    console.log("do-what-it-says");
    break;
  default:
    console.log("Sorry, " + argument1 + " - do-what-it-says");


}