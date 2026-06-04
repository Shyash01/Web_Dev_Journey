import express from "express"
const app=express();

app.get("/",(req, res)=>{
    res.send("<h1>Hello</h1>");
})
app.get("/about", (req,res)=>{
    res.send("<h1>About me</h1>");     //localhost:3000/about
})
app.get("/contact", (req,res)=>{
    res.send("<h1>Contact Us</h1>");     //localhost:3000/about
})
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})