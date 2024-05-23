const {default: mongoose} = require("mongoose");

const dbConnect = () =>{
    try{
    const conn = mongoose.connect(process.env.mongodb_url)
    console.log("Database connected successfully");
    }
    catch(error){
    console.log("Database error");
    }
}
module.exports = dbConnect;