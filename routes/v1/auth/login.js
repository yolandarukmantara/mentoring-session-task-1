const routers = require('express').Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Joi = require('joi');

const key = require('../../../config/key');
const User = require("../../../models/User");

const login = async(req,res,next) =>{
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string()
    });
    try {
        const params = schema.validate(req.body);
        if(params.error) throw res.status(400).json(params.error);
        
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email});
        if(!user) throw res.status(404).json({error: "Email not found"});

        //check password
        const check = await bcrypt.compare(password, user.password);
        if(!check) return res.status(400).json({error: "Wrong Password"});
        const payload = {id: user.id, name: user.name};

        //JWT
        jwt.sign(payload, key.secretKey, {expiresIn: 3600}, (err,token) => {
            res.json({
                success: true,
                token: "Bearer " + token
            });
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = login;