const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jdonwebtoken");
const {env} = require("./config");

const register = async (req,res)=>{
    const {username,password,name} = req.body;
    

    const schema = Joi.object({
        username: Joi.string().alphanum().min(5).max(32).required(),
        name: Join.string().min(5).max(32).required(),
        password: Join.string().min(5).require(),
    });

    const {error} = schema.validate({username, name, password});
    if (error) return res.status(400).json({message: error.message});

const hashedPass = await bcrypt.hash(password, 12);
};