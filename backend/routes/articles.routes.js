const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const articles = require("../controllers/articles.controllers.js");

router.post("/creation_article/:utilisateurId", articles.creer_article);

router.get("/afficher_articles",articles.afficher_articles);
router.get("/afficher_reponses/:articleId", articles.afficher_reponses);
router.get("/messages_profil/:utilisateurId", articles.messages_profil );
router.get("/afficher_administrateur", articles.afficher_administrateur);

router.delete("/supprimer_article/:articleId", articles.supprimer_article);

module.exports = router;