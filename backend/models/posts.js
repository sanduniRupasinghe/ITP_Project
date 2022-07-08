const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    
    name:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    contact:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },
    
    dob:{
        type:Date,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    bloodtype:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('posts',postSchema);