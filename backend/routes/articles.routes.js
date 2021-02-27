const express = require('express');
const router = express.Router();

const articles = require("../controllers/articles.controllers.js");

router.post("/creation_article/:utilisateurId", articles.creer_article);

router.get("/afficher_articles", articles.afficher_articles);
router.get("/messages_profil/:utilisateurId", articles.messages_profil );

router.delete("/supprimer_article", articles.supprimer_article);

module.exports = router;