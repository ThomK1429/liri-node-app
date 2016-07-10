// Liri.js
// Author: Tom Keel  2016 06 29, due 2016 07 10
// v0 - base pgm, allow for parameter input
// v1 - add npm spotify api (music) processing
// v2 - add npm OMDB api (movie) processing
// v3 - add npm twitter api processing

//Takes in all of the command line arguments
var inputString = process.argv;

//Parses the command line argument to capture ...
var argument0 = inputString[0]; // node
var argument1 = inputString[1]; // pgm name with path
var argument2 = inputString[2]; // cmd to process ie spotify, twitter, OMDB

// optional input
if (typeof inputString[3]  != 'undefined'){
  var argument3 = inputString[3]; // optional parameter to pass to cmd api
} else argument3 = " ";

switch (argument2) {

  case "t":
  case "tw":
  case "tweet":
  case "my-tweets":
    //console.log("my-tweets");
    if(argument3 == " ") {
      argument3 = "@BrentSpiner";
    }
    twitter(argument3);
    break;
	
  case "s":
  case "spot":
  case "spotify-this-song":
    //console.log("spotify-this-song");    
    if(argument3 == " ") {
      argument3 = "blink 182 what's my age again";
    }
    spotifySearch(argument3); // song to search
    break;
	
  case "o":
  case "omdb":
  case "m":
  case "mov":
  case "movie-this":
    //console.log("movie-this");
     if(argument3 == " ") {
      argument3 = "mr nobody";
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
  //console.log("omdbSearch has been called");

 var omdb = require('omdb');
    console.log("\n\n");
    console.log("              * * * * * * * * * * * * * * * * * * * * * * *");
    console.log("              *                                           *");
    console.log("              *           M O V I E  - -  T H I S         *");    
    console.log("              *                                           *");
    console.log("              * * * * * * * * * * * * * * * * * * * * * * *");
    console.log("\n");
    console.log('  Search for: ' +  '"' + arg3 + '"' + '\n');
    var optionsx = {
      tomatoes:true
    }
 omdb.get({ title: arg3}, {tomatoes:true}, function(err, movie) {
 
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
    //console.log(JSON.stringify(movie, null, 2));
    
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
function twitter(arg3) { 
var Twitter = require('twitter');

    console.log("\n\n");
    console.log("              * * * * * * * * * * * * * * * * * * * * * * *");
    console.log("              *                                           *");
    console.log("              *               T W I T T E R               *");    
    console.log("              *                                           *");
    console.log("              * * * * * * * * * * * * * * * * * * * * * * *");
    console.log("\n");
    console.log('  Select Tweets from: ' +  '"' + arg3 + '"' + '\n');


var numTweets2Print = 20;
var client = new Twitter({
  consumer_key: 'tYc2scNNiV2myT5ZbCun8YPOi',
  consumer_secret: 'm4VpgLKykwYz7zjcLH4bBfac7GG3Tcx0gx8Tp4OsHNsUk9806C',
  access_token_key: '750890712443518978-2dZhcv8rr9bYllgvYBwlEMOyi4qn2a9',
  access_token_secret:'BiO5sWomFlWnSdzPo8Eub6KjhxiASUXw8T3W5hHOsNo1q',
});
 
//var params = {screen_name: 'nodejs'};  
var params = {screen_name: arg3}; 
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
     //console.log(tweets);
     // console.log(response); // raw data

    for (var i = 0; (i < numTweets2Print &&  i < tweets.length ); i++) {
  
    console.log("\n"); 
    console.log("  Created: " + tweets[i].created_at);
    console.log("User Name: " + tweets[i].user.name);
    console.log("     Text: " + tweets[i].text);
    console.log("\n");  
   
    // console.log("Tweets: " + JSON.stringify(tweets, null, 2));
    }
  }
});

}
