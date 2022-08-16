const express = require('express');
const User = require('../Models/models');
const userValidation = require('../validations/validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

exports.inscription = (req, res) => {
    //** recuperation des données de l'inscription */
    const {body} = req;
    //** validation des donnés recuperés */
    const {error} = userValidation(body).uservalidationInscription;
    if(error) return res.status(401).json(error.details[0].message); 

    //** cryptage des mots de passes recuperer */
    bcrypt.hash(body.password, 10)
    .then(hash =>{
        if(!hash) return res.status(500).json('Erreur du server')

        delete body.password
        //** creation d'un nouvel utilisateur */
        new User({...body, password: hash})
        .save()
        .then((user) => {
            console.log(user)
            res.status(201).json({msg: "Utilisateur créé"})
        })
        .catch(error => res.status(500).json(error));

    })
    .catch(error => res.status(500).json(error));
}
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

exports.connextion = (req, res) =>{
    //** recuperation des données de connexion */
    const {email, password} = req.body;
    //** validation des donnés recuperés */

    const {error} = userValidation(req.body).uservalidationConnexion;
    if(error) return res.status(401).json(error.details[0].message); 

    //** recherche de l'utilisateur dans la database*/
    User.findOne({email : email})
    .then(user => {
        if(!user) return res.status(404).json({msg : "Utilisateur non trouvé"})
        console.log(user)
        //** verification du mot de passe */
        bcrypt.compare(password, user.password)
        .then(match => {
            console.log("yes")
            if(!match) return res.status(500).json({msg : "Erreur de serveur"})

            res.status(200).json({
                email : user.email,
                id : user._id,
                token : jwt.sign({id: user._id}, "SECRET_KEY", {expiresIn: '24h'})

            })
        })
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json(error))
}