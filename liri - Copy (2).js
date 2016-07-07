// Liri.js
// Author: Tom Keel  2016 06 29

//Takes in all of the command line arguments
var inputString = process.argv;

//Parses the command line argument to capture ...

var argument1 = inputString[2]; // application ie tweet, spotify
var argument2 = inputString[3]; // application input argument such as song name

switch (argument1) {

	case "tw":
	case "tweet":
  case "my-tweets":
    console.log("my-tweets");
    break;

  case "spot":
  case "spotify":
  case "spotify-this-song":
    console.log("spotify-this-song");
    console.log("arg2=" + argument2);
    var spotify = require('spotify');

    if (argument2 == "") {
       argument2 = "blink 182 what's my age again";
    }

    spotify.search({ type: 'track', query: argument2 }, function(err, data) { 
    //spotify.search({ type: 'track', query: ' palisades park' }, function(err, data) { 
    //spotify.search({ type: 'track', query: ' i want it that way' }, function(err, data) { 
      if ( err ) {
        console.log('Error occurred: ' + err);
        return;
      }
      console.log(" \n " );

      for (var i = 0; i < 10 && i < data.tracks.limit; i++) {
        //for (var i = 0; i < data.tracks.total && i < data.tracks.limit; i++) {
        //for (var i = 0; i < 10; i++) { 
        //onsole.log(JSON.stringify(data.albums.items[i].name, null, 2));
        console.log("      Artist: " + JSON.stringify(data.tracks.items[i].artists[0].name, null, 2)); 
        console.log("        Song: " + JSON.stringify(data.tracks.items[i].name, null, 2));
        console.log("Preview link: " + JSON.stringify(data.tracks.items[i].preview_url, null, 2));
        console.log("  Album Name: " + JSON.stringify(data.tracks.items[i].album.name, null, 2));
        console.log(" ");
      }  
    })
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