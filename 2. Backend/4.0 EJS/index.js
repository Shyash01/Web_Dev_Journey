
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended: true}));

const d = new Date();
let day = d.getDay();

let type = "a weekday";
let advice = "It's time to work hard"

if(day === 0 || day===6){
    type = "the weekend";
    advice = "It's time to have some fun";
}


app.get("/",(req,res)=>{
    res.render("index.ejs",{ dayType:"a weekday", advice: "It's time to work hard",});
});


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})