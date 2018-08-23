require('dotenv').config();

var twit = require('twit');
var config = require('./config.js');
var Twit = new twit(config);



// var spence = function(){
//   var params = {
//       // track: '#cutedogs, #dogs, #dogparty, #dogdays,',
//       screen_name: 'robospence',
//       // track: '@robospence, robospence, @yappytrails',
//       language: 'en',
//       // user: '@robospence',
//       // q: '@adaripp'
//       result_type: 'recent'
//   }
//
//   var spence = Twit.stream('statuses/user_timeline', {screen_name: 'robospence'});
//   spence.on('tweet', function (tweet) {
//
//     console.log(tweet.text)
//     sleep(5000000000000);
//     Twit.post('statuses/retweet/:id', { id: tweet.id_str }, function(err, response){
//         if (response) {
//             console.log('Retweeted!!!');
//         }
//         // if there was an error while tweeting
//         if (err) {
//             console.log('Something went wrong while RETWEETING... Duplication maybe...' + err);
//         }
//     });
//
//   })
//
//
// }
//
// spence();


var stream = function(){
  var params = {
      // track: '#cutedogs, #dogs, #dogparty, #dogdays,',
      track: '@robospence, robospence, @yappytrails',
      language: 'en',
      user: '@robospence',
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
