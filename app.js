const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("lab1main"));
app.get("/courses", (req, res) => res.render("lab1courses"));

app.get("/computer_inside", (req, res) => res.render("computer_inside"));
app.get("/computer_vision", (req, res) => res.render("computer_vision"));
app.get("/cyber_detective", (req, res) => res.render("cyber_detective"));
app.get("/html_css", (req, res) => res.render("html_css"));
app.get("/pixel_art", (req, res) => res.render("pixel_art"));
app.get("/unity_what", (req, res) => res.render("unity_what"));

app.get("/enrollment", (req, res) => res.render("lab1enrollment"));

app.listen(3000, () => console.log("http://localhost:3000"));
