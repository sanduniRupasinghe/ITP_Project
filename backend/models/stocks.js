const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({

    bdtype:{
        type:String,
        required:true
    },

    noofbags:{
        type:Number,
        required:true
    },

    stockdate:{
        type:Date,
        required:true
    },

    expiredate:{
        type:Date,
        required:true
    },

    inchargename:{
        type:String,
        required:true
    },
    

});

module.exports = mongoose.model('stocks',stockSchema);