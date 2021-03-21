const express = require('express');
const router = express.Router();

const utilisateurs = require("../controllers/utilisateurs.controller.js");
const auth = require('../middlewares/auth');

router.post("/inscription", utilisateurs.inscription);
router.post("/connexion", utilisateurs.connexion);
    
router.get("/informations_utilisateur/:utilisateurId",auth, utilisateurs.informations_utilisateur);
router.get("/verifier_administrateur/:utilisateurId", utilisateurs.verifier_administrateur);
    
router.delete("/supprimer_utilisateur/:utilisateurId", utilisateurs.supprimer_utilisateur);

module.exports = router;

