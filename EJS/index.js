const express = require('express');
const app = express();
const path = require('path');

let port = 8080;

app.listen(port, () => {
    console.log(`Port is listeing to ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // IT IS WRITTEN BECOZ WHEN YOU RUN THE SERVER OUSTSIDE THE EJS DIRECTORY THE IT WILL AUTOMATICALLY FIND THE VIEWS DIR IN THAT PARTICULAR FOLDER FROM WHERE IT IS RUN SO IT WILL THROW AN ERROR TO AVOID THAT WE WILL PROVIDE VIEWS DIR ADDRESS ITSELF

app.get("/", (req, res) => { // TO SEND HTML AND CSS FILE IN FORM OF RESPONSE WE USE EJS. IN RESPONSE WE SEND home.ejs THIS ALL TEMPLATES ARE TO BE MADE IN VIEWS FOLDER

    res.render("home.ejs"); //HERE EXPRESS WILL DIRECTLY GO TO VIEWS FOLDER TO FIND THE GIVEN FILE
});


// INTERPOLATION SYNTAX: IT REFFERS TO EMBEDDING EXPRESSION INTO HTML

app.get(("/rolldice"), (req, res) => {
    let rolldice = Math.floor(Math.random() * 6) + 1 // THIS WHOLE LOGIC CAN ALSO BE WRITTEN IN EJS FILE WITH INTERPOLATION SYNTAX
    res.render("rolldice.ejs", { num: rolldice }) // HERE THE VALUES CAN BE PASSED IN KEY-VALUE PAIR OR DIRECT VALUE TO EJS FILE
});

app.get(("/:id/:username"), (req, res) => {
    const followers = ["A", "B", "C", "D", "E"]
    let { username } = req.params;
    res.render("instagram.ejs", { username, followers })
    // res.render(`instagram.ejs,${username}`);

});

app.get(("/:username"), (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("insta.ejs",{username,data});
});