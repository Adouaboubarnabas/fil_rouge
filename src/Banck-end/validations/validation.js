const joi = require('joi');

function userValidation(body){
    const uservalidationInscription = joi.object({
        username: joi.string().min(2).max(30).trim().required(),
        password: joi.string().min(8).max(30).required(),
        email: joi.string().email().required()
    });
    const uservalidationConnexion = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).max(30).required()

    })

    return {
        uservalidationInscription: uservalidationInscription.validate(body),
        uservalidationConnexion: uservalidationConnexion.validate(body)
    }
}

module.exports = userValidation;