const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var axios = require("axios");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/test", (req, res) => {
  res.json({"test": "value"});
})
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
//SCRAPING BRAND OF ULTA FACE PRODUCTS 
// console.log("scrapping ulta" );
// axios.get("https://www.ulta.com/makeup-face?N=26y3").then(function(response) {
//   var $ = cheerio.load(response.data);
//   var results = [];
//   $("h4.prod-title").each(function(i, element) {
//     var title = $(element).text();
//     var link = $(element).children().attr("href");
//     results.push()({
//       title: title,
//       link: link
//     });
//   });
//   console.log(results);
// });

