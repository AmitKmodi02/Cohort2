// Server ko call krna
// Server ko database se connect krna

const mongoose = require("mongoose")
const app = require("./src/app")
const connectToDb = require("./src/config/database")

connectToDb()

app.listen(3000,()=>{
    console.log("Server is running on the port 3000");
})


