var Twitter = require('twitter');
 


var client = new Twitter({
  consumer_key: 'tYc2scNNiV2myT5ZbCun8YPOi',
  consumer_secret: 'm4VpgLKykwYz7zjcLH4bBfac7GG3Tcx0gx8Tp4OsHNsUk9806C',
  access_token_key: '750890712443518978-2dZhcv8rr9bYllgvYBwlEMOyi4qn2a9',
  access_token_secret:'BiO5sWomFlWnSdzPo8Eub6KjhxiASUXw8T3W5hHOsNo1q',
});
 
//var params = {screen_name: 'nodejs'};  
var params = {screen_name: '@BrentSpiner'}; 
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
     console.log(tweets);
     // console.log(response); // raw data

  /*   for (var i = 0; i < Things.length; i++) {
     	Things[i]
     }
    console.log("\n"); 
    console.log("  Created: " + tweets[0].created_at);
    console.log("User Name: " + tweets[0].user.name);
    console.log("     Text: " + tweets[0].text);
    console.log("\n"); */
   
    // console.log("Tweets: " + JSON.stringify(tweets, null, 2));
  }
});