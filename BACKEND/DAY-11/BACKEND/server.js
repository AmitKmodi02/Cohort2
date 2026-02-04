/**
 * server ko call krna
 * server ko database me call krna
 */

require("dotenv").config()
const app =require("./src/app")
const connectToDb  = require("./src/config/database")

connectToDb()

app.listen(3000,()=>{
    console.log("server is running on the post 3000");
})