const routers = require('express').Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const passport = require('passport');

const key = require('../../../config/key');
const User = require("../../../models/User");

const register = async(req,res,next) =>{
    try {
        const findUser = await User.findOne({email: req.body.email});

        console.log('if find');
        if(findUser) throw res.status(400).json({
            error: "Email has been registered"
        });

        //add user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        //hashing password
        bcrypt.genSalt(10, (err, salt) =>{
            bcrypt.hash(newUser.password, salt, (err,hash) =>{
                if(err) next(err);
                newUser.password = hash;
                newUser.save();
                res.status(201).json(newUser);
            })
        })
    } catch (error) {
        return next(error);
    }
};

module.exports = register;