const express = require('express')

const app=express()
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Backend!!!</h1>")
});
app.get('/Static',(req,res)=>{
    res.send("<h1>This is a Static Page</h1>")
});
const PORT=3001

app.listen(PORT,()=>{console.log("Server started at http://localhost:3001/")})