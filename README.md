# tweetfunction

This is to tweet from Firebase function, passing query string as part of query parameter.

## Getting Started

### Prerequisites
Install Node.js

### Setup
Clone this repository.
```
git clone https://github.com/ashokdamacharla/tweetfunction.git
```
Go to "tweetfunction" folder to deploy to Firebase.

### Deploy to Firebase

Install twitter-node-client library.
```
npm install twitter-node-client
```

Install Firebase tools.
```
npm install -g firebase-tools
```

Login to firebase.
```
firebase login
```

Intitialize Firebase.
```
firebase init functions
```

Deploy Cloud Functions.
```
firebase deploy --only functions
```
