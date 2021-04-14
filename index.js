// Load the Express package as a module
const express = require("express");
const multer = require("multer");
const upload = multer();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

// Access the exported service
const app = express();
app.use(express.static("public"))
app.use(express.static("views"))
// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/index.html`)
});
app.get("/ex1.html", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});



app.post("/ex1.html", upload.array(), (request, response) => {
  const name = request.body.Name;
  const email = request.body.Email;
  response.send(`${name},Thank you for your order. We will keep you posted on delivery status at ${email}`);
});
app.get("/api/countries", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});
app.post("/api/countries", jsonParser, (request, response) => {
  const traveler = request.body;
  response.send(
    `Your name is ${traveler.name} and you visited ${traveler.countries
      .length} countries. Keep traveling!`
  );
});

app.post("/ex2.html", jsonParser, (request, response) => {
  const traveler = request.body;
  response.send(
    `Your name is ${traveler.name} and you visited ${traveler.countries
      .length} countries. Keep traveling!`
  );
});
app.post("/articles", upload.array(), (request, response) => {
  const title = request.body.title;
  const content = request.body.content;
  // Create a new array containing only ids
  const idList = articles.map(article => article.id);
  // Reducing the array to the maximum id value
  const maxId = idList.reduce((acc, value) => {
    if (value > acc) return value;
    return acc;
    // Or: (value > acc) ? value : acc;
  });
  const id = maxId + 1;
  // Add new article to the list
  articles.push({ id, title, content });
  response.send(`New article added successfully with ID ${id}!`);
});

app.get("/api/articles", (request, response) => {
  response.json(articles);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
 console.log(`Your app is listening on port ${listener.address().port}`);
});
