const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("MongoDB Connected")
    })
    .catch(()=>{
        console.log("Error Connecting To DB")
    })
}

module.exports = connectToDB