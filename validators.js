const database = require("./database");
const Joi = require('joi');

const validateMovie = (req, res, next) => {
    const { title, director, year, color, duration } = req.body;
    const errors= [];

    if (title == null) {
        errors.push({ filed: "title", message: "This field is required"});
    }  
    if (director == null) {
        errors.push({ filed: "director", message: "This field is required"});
    }
    if (year == null) {
        errors.push({ filed: "year", message: "This field is required"});
    }
    if (color == null) {
        errors.push({ filed: "color", message: "This field is required"});
    }
    if (duration == null) {
        errors.push({ filed: "duration", message: "This field is required"});
    }

    if (errors.length) {
        res.status(422).json({ validationErrors: errors});
    } else {
        next();
    }
  
 }

 const userSchema = Joi.object({
    firstname: Joi.string().max(255).required(),
    lastname: Joi.string().max(255).required(),
    email: Joi.string().email().max(255).required(),
    city: Joi.string().max(255).required(),
    language: Joi.string().max(255).required(),
 });

 const validateUser = (req, res, next) => {
    const { firstname, lastname, email, city, language } = req.body;

    const { error } = userSchema.validate(
        { firstname, lastname, email, city, language },
        { abortEarly: false } 
    );

    if (error) {
        res.status(422).json({ validationErrors: error.details });
    } else {
        next();
    }
 }


module.exports = {
    validateMovie,
    validateUser,
}