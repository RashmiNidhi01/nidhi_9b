const express = require("express");// Load the Express package as a module
const app = express();//Access the exported service
const multer = require("multer");// Load the Express package as a module
const upload = multer();//Access the exported service
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

// Serve content of the "public" subfolder directly
app.use(express.static("public"));
app.use(express.static("css"));
// Return for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});
//ex-1
app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

//web route
app.post("/ex1", upload.array(), (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  response.send(`${name} Thankyou for your order.We will keep you posted on your delivey status at ${email}`);
});

//ex-2
app.get("/ex2", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});
app.post("/api/countries", jsonParser, (request, response) => {
  const name=request.body.name;
  const countries=request.body.countries.length;
  response.send(
    `Your name is ${name} and you visited ${countries} countries. Keep traveling!`
  );
});

//article
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
  response.send(`New article added successfully with ID ${id} and titlr ${title}!`);
});

// JSON API

app.get("/api/articles", (request, response) => {
  response.json(articles);
});
// Start listening to incoming requests
const listener = app.listen(process.env.PORT || 3008, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
