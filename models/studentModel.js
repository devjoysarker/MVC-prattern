
const mongoose = require('mongoose');

// Create students data schma

const studentSchma = mongoose.Schema({
    name : {
        type : String,
        require : [true,'Name is required'],
        trim : true
    },
    email : {
        type : String,
        require : [true, 'Email is required'],
        trim : true,
        unique : true
    },
    call : {
        type : String,
        require : [true,"Call is required"],
        trim : true
    },
    photo : {
        type : String,
        default : 'avater.png'
    }

},{
    timestamps : true
});



// exports our modle
module.exports = mongoose.model('students', studentSchma)

