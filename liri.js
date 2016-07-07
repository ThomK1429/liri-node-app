// Liri.js
// Author: Tom Keel  2016 06 29

//Takes in all of the command line arguments and save to an array
var inputString = process.argv;

//Parses the command line argument to capture ...
var argument0 = inputString[0]; // node
var argument1 = inputString[1]; // pgm name with path
var argument2 = inputString[2]; // cmd to process ie spotify, twitter, OMDB

// optional input
if (typeof inputString[3]  != 'undefined'){
  var argument3 = inputString[3]; // optional parameter to pass to cmd api
} else argument3 = " ";


// select cmd to process via a switch/case statement and call appropriate func. 
switch (argument2) {

  case "t":
	case "tw":
	case "tweet":
  case "my-tweets":
    console.log("my-tweets");
    break;

  case "s":
  case "spot":
  case "spotify":
  case "spotify-this-song":
    if(argument3 == " ") {
      argument3 = "blink 182 what's my age again";
    }
    spotifySearch(argument3); // song to search
    break;

  case "omdb":
  case "m":
  case "mov":
  case "movie-this":
    console.log("movie-this");
    if(argument3 == " ") {
      argument3 = "Mr. Nobody";
    }
    omdbSearch(argument3);
    break;

  case "d":
  case "do":
  case "do-what-it-says":
    console.log("do-what-it-says");
    break;
  default:
    console.log("Sorry, " + argument1 + " - do-what-it-says");


}



//  -------------------------------------------------------------------------------------

function omdbSearch(arg3){
  console.log("omdbSearch has been called");

 var omdb = require('omdb');
    console.log("\n\n");
    console.log("              * * * * * * * * * * * * * * * * * * * * * * *");
    console.log("              *                                           *");
    console.log("              *           M O V I E  - -  T H I S         *");    
    console.log("              *                                           *");
    console.log("              * * * * * * * * * * * * * * * * * * * * * * *");
    console.log("\n");
    console.log('  Search for: ' +  '"' + arg3 + '"' + '\n');

 omdb.get({ title: arg3,  tomatoes: 'true' }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    } 
    
    console.log("\n");
    console.log('   Movie Title: %s ', movie.title);
    console.log('    Movie Year: %d ', movie.year);
    console.log('   IMDB Rating: %d/10', movie.imdb.rating);
    console.log('       Country: %s', movie.countries);
    console.log('        Actors: ' + movie.actors);
    console.log('          Plot: ' + movie.plot);
    console.log("\n");
    console.log(JSON.stringify(movie, null, 2));
    
 });

}

//  -------------------------------------------------------------------------------------


function spotifySearch(arg3) {

var spotify = require('spotify');
    //console.log("arg3=" + arg3);

    //process.stdout.write('\033c'); // clear the screen on Win 7
    // from node cmd line, issue mode 90,60) to increase window size


    console.log("\n\n");
    console.log("              * * * * * * * * * * * * * * * * * * * * * * *");
    console.log("              *                                           *");
    console.log("              *              S P O T I F Y                *");    
    console.log("              *                                           *");
    console.log("              * * * * * * * * * * * * * * * * * * * * * * *");
    console.log("\n");
    console.log('  Search for: ' +  '"' + arg3 + '"' + '\n');

    
    spotify.search({ type: 'track', query: arg3}, function(err, data) { 
    //spotify.search({ type: 'track', query: ' palisades park' }, function(err, data) { 
    //spotify.search({ type: 'track', query: ' i want it that way' }, function(err, data) { 
      if ( err ) {
        console.log('Error occurred: ' + err);
        return;
      }
      //console.log(" \n " );

      for (var i = 0; i < 10  && i < (data.tracks.limit); i++) {
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

}

//  -------------------------------------------------------------------------------------
