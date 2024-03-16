const mongoose = require('mongoose');
const dbURL = require('../config/dbUrlConfig');

const connectMongodb = async ()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Database connected Successfully...");
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectMongodb;
