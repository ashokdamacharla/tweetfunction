const functions = require('firebase-functions');
var Twitter = require('twitter-node-client').Twitter;

//Callback functions
var errorCallback = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var successCallback = function (data) {
    console.log('Data [%s]', data);
};

var config = {
    'consumerKey':'<Your won consumerKey>',
    "consumerSecret":"<Your won consumerSecret>",
    "accessToken": "<Your won accessToken>",
    "accessTokenSecret": "<Your won accessTokenSecret>"
}

var twitter = new Twitter(config);

var tweet = function (status) {
    var parameters = {
        "status": status
    }
    
    console.log('parameters:', parameters);

    twitter.postTweet(parameters, errorCallback, successCallback);
}

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.textTweet = functions.https.onRequest((request, response) => {

    tweet(request.query.text);

    response.send("Tweeted successfully:"+ request.query.text);
});

