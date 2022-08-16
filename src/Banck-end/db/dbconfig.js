const {connect} = require('mongoose');

function dbConnexion(){
    connect('mongodb+srv://barnabas:sophie2010@smd.mozyay0.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connexion à la base de données réussie');
    }
    )
    .catch(err => {
        console.log('Erreur de connexion à la base de données + ' + err);
    }
    );
}
module.exports = dbConnexion;
