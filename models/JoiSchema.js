const  Joi = require("joi")

const Albumschema=Joi.object({
    title: Joi.string().required(),
    releaseyear: Joi.number().required(),
    genre: Joi.string().required(),
    artistid: Joi.number().required(),
})

const artistSchema =  Joi.object({
    name: Joi.string().required(),
    genre: Joi.string().required(),
    artistEmail: Joi.string().required(),
    image:Joi.string(),
})

module.exports.Albumschema = Albumschema
module.exports.artistSchema = artistSchema