require('dotenv').config();

var twit = require('twit');
var config = require('./config.js');
var Twit = new twit(config);

// var TwitterPackage = require('twitter');
//
//
// var config = require('./config.js');
//
// //make a new Twitter object
// var Twitter = new TwitterPackage(config);

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
//
// stream2();
//
//
//
// var stream = client.stream('statuses/filter', {track: 'javascript'});
// stream.on('data', function(event) {
//   console.log(event && event.text);
// });
//
// stream.on('error', function(error) {
//   throw error;
// });
var stream = function(){
  var params = {
      track: '#cutedogs, #dogs, #dogparty, #dogdays',
      language: 'en',
      // q: '@adaripp'
      result_type: 'recent'
  }


  var stream = Twit.stream('statuses/filter', params)
  stream.on('tweet', function (tweet) {

    console.log(tweet.text)
    sleep(5000000000000);
    Twit.post('statuses/retweet/:id', { id: tweet.id_str }, function(err, response){
        if (response) {
            console.log('Retweeted!!!');
        }
        // if there was an error while tweeting
        if (err) {
            console.log('Something went wrong while RETWEETING... Duplication maybe...' + err);
        }
    });

  })


}

stream();

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
