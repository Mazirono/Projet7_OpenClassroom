const express = require('express');
const router = express.Router();

const Article= require("../models/articles.models.js");

router.creer_article = (req, res) => {
 
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  console.log(req.body)
  const article = new Article({
    contenu: req.body.contenu,
    title: req.body.title,
    id_utilisateur : req.params.utilisateurId,
    id_article : req.body.id_article
   
   });
  
  Article.creer_message (article, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "L'article n'a pas pu être enregistré."
      });
    else res.send(data);
  });
};

router.afficher_articles = (req, res) => {
  Article.recuperer_articles((err, data) => {
    
    if (err)
      res.status(500).send({
        message:
          err.message || "Erreur les articles n'ont pas été retouvés"
      });
    else res.send(data);
  });
};


router.afficher_reponses = (req, res) => {

  Article.recuperer_reponses(req.params.articleId,(err, data) => {
    if (err)
      res.status(200).send({
        message:
          err.message || "Nous avons retrouvé aucun message écrit par ce profil."
      });
    else res.send(data);
  });
};



router.supprimer_article = (req, res) => {
  Article.suppression_article(req.body.id, (err, data) => {
    if (err) {
      if (err.kind === "L'article n'existe pas") {
        res.status(404).send({
          message: `L'article avec l'id : ${req.body.id} n'a pas été trouvé`
        });
      } else {
        res.status(500).send({
          message: "Impossible de supprimer l'article avec l'id : " + req.body.id
        });
      }
    } else res.send({ message: `L'article a été supprimé` });
  });
};

router.messages_profil = (req, res) => {
  
  Article.recuperer_message_profil(req.params.utilisateurId,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Nous avons retrouvé aucun message écrit par ce profil."
      });
    else res.send(data);
  });
};




module.exports = router;
