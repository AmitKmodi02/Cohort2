const mongoose = require("mongoose")

function connectToDb(){
    // mongoose.connect("mongodb+srv://AmitM:cQzTws0v9hpvE6SZ@cluster0.bvvvwpl.mongodb.net/DAY-09")
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("CONNECTED TO db");
        
    })
}




module.exports = connectToDb