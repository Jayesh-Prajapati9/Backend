const express = require("express");
const { connect } = require("http2");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

connectToDb()
    .then((res) => {
        console.log('Connected!');
    }).catch((err) => {
        console.log('Error:', err);
    });

async function connectToDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

let port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

let chat1 = new chat({
    from: "John",
    message: "Hello",
    to: "Alice",
    timestamp: new Date()
})

chat1.save()
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Hello World");
}); 

app.get("/chats",async (req, res) => {
    let chats = await chat.find();
    res.render('index.ejs', {chats});   
});