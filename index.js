const port = require("./config/portConfig")
const express = require('express');

const app = express();

app.set("view engine",'ejs');
/**
 * when you set EJS as yout view engine, you can render html pages with embedded js using the .render() method. 
 * EJS files typically have the .ejs extension and are placed in the views directory by defalut.
**/


app.listen(port.PORT,()=>{
    console.log(`Server running of port ${port.PORT}`);
})