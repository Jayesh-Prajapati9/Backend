const express = require("express");
const app = express();
let port = 8080

app.listen(port, () => {
    console.log("Currently listening to Port", port)
})

// app.use((req,res)=>{   //TO USE THE SERVER AND SEND REQUEST
//     console.log('Port is 8080')
//     res.send('This is Basic Response') //IT IS USE TO SEND THE RESPONSE ON THE LH 8080
// })

app.get('/', (req, res) => { // THIS IS USE TO SEND THE REQUEST ON A PARTICULAR PAGE HERE / IS ROOT PAGE
    let code = "<h1>Fruits</h1> <ul><li>Mango</li><li>Apple</li></ul>"
    res.send(code)
})

app.get("/home", (req, res) => {
    let homecode = "<h1>THIS IS HOME PAGE</h1> ";
    res.send(homecode);
})

app.get("/:username/:id", (req, res) => { //IT IS USE TO SEND THE USERNAME AND ID TO THE PARTICULAR PAGE FOR EG INSTAGRAM SEARCH FOR ANY PARTICULAR PERSON 
    let {username,id}=req.params;
    res.send(`Hello ${username} and your Id is :${id}`);
})

app.get("/search", (req, res) => { //IT IS USE TO SEND THE QUERY IN THE SEARCH (http://localhost:8080/search?q=apple&color=green)
    console.log(req.query)
    res.send("Search Result")
})

app.get("*", (req, res) => { // THIS IS TO USED FOR ALL THE OTHER PAGES WHICH ARE NOT DEFINE ABOVE THAT IS PAGES OTHER THAN ROOT AND HOME THEN THE BELOW RESPONSE WILL BE SENT 
    res.send("404 PAGE NOT FOUND")
})

