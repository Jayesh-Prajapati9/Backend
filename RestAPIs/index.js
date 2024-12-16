const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');


let port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

let posts = [
    {
        id: uuidv4(), // THIS WILL AUTOMACTICALLY GENERATES AN UNIQUE ID
        username: "JP",
        content: "Helloo"
    },
    {
        id: uuidv4(),
        username: "JAY",
        content: "Hii"
    },
    {
        id: uuidv4(),
        username: "DS",
        content: "Heyy"
    }
]

app.get("/posts", (req, res) => { // THIS GET REQUEST IS INDEX REQUEST OR WOULD SAY MAIN PAGE WHERE ALL THE POSTS ARE PRESENT
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => { // THIS POST REQUEST IS TO ADD NEW POST AND IT RENDER A FORM TO AS USER HIS USERNAME AND CONTENT 
    res.render("new.ejs");
});

app.post("/posts", (req, res) => { // AFTER SUBMITTING FORM IT RENDER A POST REQUEST AND IN THIS POST REQUEST 
    // console.log(req.body);
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send(`Post Upload For @${username}`);
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => { // THIS ROUTE IS CREATED IN ORDER TO GET THE POST BY PARTICULAR ID PASSING IT IN URL
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(id)
    // console.log(post);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => { // THIS ROUTE IS TO UPDATE THE EXISTING POSTs
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.send(`Content Changed to ${newContent}`);
});
