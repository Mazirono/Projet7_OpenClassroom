const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const administrateur = require('../middlewares/administrateur');

const articles = require("../controllers/articles.controllers.js");

router.post("/creation_article/:utilisateurId", auth,articles.creer_article);

router.get("/afficher_articles" ,auth,articles.afficher_articles);
router.get("/afficher_reponses/:articleId", auth, articles.afficher_reponses);
router.get("/messages_profil/:utilisateurId",auth, articles.messages_profil );
router.get("/afficher_administrateur", auth,administrateur,articles.afficher_administrateur);

router.delete("/supprimer_article/:articleId",auth,administrateur, articles.supprimer_article);

module.exports = router;