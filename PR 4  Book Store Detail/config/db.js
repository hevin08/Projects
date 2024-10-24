let mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost/connection`)

const database = mongoose.connection;

database.on("connected", (err)=>{
    if (err) {
        console.log(err);
        return false;  
    }
    console.log("Connected to MongoDB");
})

module.exports = database