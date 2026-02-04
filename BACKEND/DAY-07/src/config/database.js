const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://AmitM:cQzTws0v9hpvE6SZ@cluster0.bvvvwpl.mongodb.net/DAY-07")
    .then(()=>{
        console.log("connected To DB"); 
    })
}


module.exports = connectToDb