const {Router} = require('express');
const passport = require('passport');

const {connextion, inscription} = require('../Controllers/controllers');
const router = Router();

router.post('/inscription', inscription);
router.post('/connexion', connextion);
module.exports = router;

router.use(passport.authenticate("jwt", {session: false}));
router.get('/', (req, res) => {
res.send('Route protégée');
});

module.exports = router;
