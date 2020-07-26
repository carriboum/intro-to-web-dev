const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express(); //creates a new server

//when someone requests "/" root, send them index.html
// path is a library for getting correct file locations,
// in this case we're getting the whole path so Express can find it.
// __dirname is a special Node variable that's the folder of
// where the server.js file lives.
// We know that index.html is in the same folder, so we're 
// saying serve the index.html file found in the same directory
// as server.js.
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// when they request "/complement", send a response that is a simple
// json object. it has one method, called complement, which
// just runs the function getRandomComplement.
app.get("/complement", function(req, res) {

  // This is going to respond to the request with a JSON object.
  // It's going to be a small object with just one key: complement.
  // The value to that key is going to be one of the random complements
  // generated by that function.
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

// This serves everything in the "public" directory publicly.
// Put things here like images, client JS files, CSS files, and 
// anything else we need users to be able to download from our server.
// 
app.use("/public", express.static("./public"));

const port = process.env.PORT || 80;
app.listen(port);
console.log(`listening on http://localhost:${port}`);