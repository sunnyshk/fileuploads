const express = require('express');

const path = require('path');
const uploads = require('../middlewares/uplaods');

const router = express.Router();

const User = require('../models/user.models');


router.post("", uploads.single("profilePic"), async(req,res)=>{
    try {
        const user = await  User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            profilePic: req.file.path,

        })
        res.status(200).send({user:user});
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router;