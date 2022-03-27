const express = require('express');

const path = require('path');

const Galle = require('../models/gallery.models');

const uploads = require('../middlewares/uplaods');


const router = express.Router();


router.post("", uploads.fields({name:"galleryPic", maxCount: 5}), async(req,res)=>{
    try {
        const pics = await Galle.create({
            galleryPic: req.file.path,
        });
        return res.status(200).send({pics:pics});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }   
})


module.exports = router;