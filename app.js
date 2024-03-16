 const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const connectMongodb = require("./init/Mongodb")  
const todoRoute = require("./Routes/Todo")
const dotenv = require("dotenv");


dotenv.config();
const app = express();


//console.log(process.env.PORT_NUMBER);


app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname,'Public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',todoRoute);
connectMongodb();


/**
 * when you set EJS as yout view engine, you can render html pages with embedded js using the .render() method. 
 * EJS files typically have the .ejs extension and are placed in the views directory by defalut.
**/
 

module.exports = app;