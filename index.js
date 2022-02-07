//IMPORT REQUIRED MODULES
const express = require("express");
const path = require("path");

//set up Express object
const app = express(); //app is the Express object
const port = process.env.PORT || "8888";

//set up paths to important folders and/or files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//CSS and client-side JS are static files
app.use(express.static(path.join(__dirname, "public")));
//path to use font-awesome
app.use(express.static(path.join(__dirname, "node_modules")));

//set up some page routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact"});
});
app.get("/gallery", (req, res) => {
    res.render("gallery", { title: "Gallery"});
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});