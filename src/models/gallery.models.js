const mongoose = require('mongoose');


const gallerySchema = new mongoose.Schema({
    galleryPic:[{type:String,required:false}],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model('gallery',gallerySchema);