require('dotenv').config()

var twit = require('twit');
var config = require('./config.js');
var Twit = new twit(config);

// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params
var retweet = function() {
    var params = {
        // q: '#backtoschool'  // REQUIRED
        q: '#cutekid'
        // q: '@adaripp'
        // result_type: 'recent',


    }
    // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets

    Twit.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            // var retweetId = data.statuses[0].id_str;
            // console.log(data);
            // console.log(data.statuses)
            var retweedIds = data.statuses
            // var retweetId = data.statuses[0].id_str
            // Tell TWITTER to retweet
            for (var i = 0; i < 10; i++) {
              // var retweetID = data.statuses[i].id_str
              var retweetID = data.statuses[i]
              sleep(30000);
              console.log(retweetID.user.description);
              sleep(30000);

            }




            // Twit.post('statuses/retweet/:id', {
            //     id: retweetId
            // }, function(err, response) {
            //     if (response) {
            //         console.log('Retweeted!!!');
            //     }
            //     // if there was an error while tweeting
            //     if (err) {
            //         console.log('Something went wrong while RETWEETING... Duplication maybe...' + err);
            //     }
            // });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...' + err);
        }
    });



}

var tweet = function() {
  var params2 = {
      // q: '#dogs, #cutedogs'  // REQUIRED
      // q: '@adaripp'
      status: 'twitter bot for the win!'
      // result_type: 'recent',

  }


    Twit.post('statuses/update', params2, function(err, data, response) {
      // if there no errors
        if (!err) {

          console.log(`${data.text} tweeted!`)

        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while POSTING...' + err);
        }
    });

}

  retweet();
// tweet();
// setInterval(retweet, 3000000000);


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}







// var TwitterPackage = require('twitter');
//
//
// var config = require('./config.js');
//
// //make a new Twitter object
// var Twitter = new TwitterPackage(config);
//
// var stream = function(){
//
//   // Call the stream function and pass in 'statuses/filter', our filter object, and our callback
//   Twitter.stream('statuses/filter', {track: '#cutedog'}, function(stream) {
//
//     // ... when we get tweet data...
//     stream.on('data', function(tweet) {
//
//       // print out the text of the tweet that came in
//       console.log(tweet.text);
//
//       //build our reply object
//       var statusObj = {status: "Hi @" + tweet.user.screen_name + ", Cute dog!!"}
//
//       //call the post function to tweet something
//       Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){
//
//         //if we get an error print it out
//         if(error){
//           console.log(error);
//         }
//
//         //print the text of the tweet we sent out
//         console.log(tweetReply.text);
//       });
//     });
//
//     // ... when we get an error...
//     stream.on('error', function(error) {
//       //print out the error
//       console.log(error);
//     });
//   });
//
// }
//
//
//
// var stream2 = function(){
//   var stream3 = Twitter.stream('statuses/filter', { track: '#apple', language: 'en' })
//
//   stream3.on('tweet', function (tweet) {
//   console.log(tweet)
// })
// }

// stream2();
