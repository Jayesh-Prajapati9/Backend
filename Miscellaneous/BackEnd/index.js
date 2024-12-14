const express =require('express');
const app =express();

let port = 8080;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.get('/register',(req,res)=>{
    let {user,password} = req.query; //ALL THE DATA SENT IN REQUEST IS IN PRESENT IN req.query AND THE VARIABLE SHOULD BE THE SAME DEFINED HERE WICH ARE USED IN FORM IN NAME 
    res.send(`Standard Get Request For ${user}`);
});

app.post('/register',(req,res)=>{
    res.send("Standar Post Request")
});