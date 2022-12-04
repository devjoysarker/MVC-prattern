


const mongoose = require('mongoose');

//create mongoDB connection
const mongoDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_STRING);
       console.log(`MongoDB server is ready`.bgYellow.black);
    } catch (error) {
        console.log(`${error}`.bgRed.white);
    }
}



// Expors connection
module.exports = mongoDB