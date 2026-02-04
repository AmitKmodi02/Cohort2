// server ko call krna
//server ko database se connect krna

require("dotenv").config()
const connectToDb = require("./src/config/database")
const app = require("./src/app")


// function call
connectToDb()



app.listen(3000,()=>{
    console.log("server is running on the port 3000");
    
})