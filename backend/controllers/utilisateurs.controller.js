const Utilisateur = require("../models/utilisateurs.model.js");
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.inscription = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu de la requète ne peut être vide"
    });
  }
  Utilisateur.verification_email(req.body.email, (response, data) => {
    if (response) {
      if (response.kind === "L'adresse email n'existe pas") {
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
          const utilisateur = new Utilisateur({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: hash,
            administrateur : 0,
          });
      
        Utilisateur.creer_utilisateur(utilisateur, (err, data) => {
        
          if (err)
            res.status(500).send({
              
              message:
                err.message || "Erreur dans la création de l'utilisateur"
            });
          else res.send(data);
        });
    })
      }
    }
    else {
      res.status(403).send({
        message: `Utilisateur avec le même mail trouvé : ${req.body.email}.`
      });
    }
  })
    
};


router.connexion = (req, res, next) => {
  Utilisateur.verification_email(req.body.email, (response, data) => {
    
    if (response) {
      if (response.kind === "L'adresse email n'existe pas") {
        res.status(404).send({
          message: `Not found Utilisateur with email : ${req.body.email}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Utilisateur with email " + req.body.email
        });
      }
    }
    else{
      bcrypt.compare(req.body.password, data.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId : data.id,
            token: jwt.sign(
              { userId: data.id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
        
      }
      
    })
    
   
};

router.informations_utilisateur = (req, res) => {
  
  Utilisateur.recuperer_utilisateur(req.params.utilisateurId,(err, data) => {
    
    if (err)
      res.status(500).send({
        message:
          err.message || "Nous avons retrouvé aucun message écrit par ce profil."
      });
    else res.send(data);
  });
};

router.supprimer_utilisateur = (req, res) => {
  Utilisateur.suppression_utilisateur(req.params.utilisateurId, (err, data) => {
    if (err) {
      if (err.kind === "L'utilisateur n'existe pas") {
        res.status(404).send({
          message: `L'utilisateur avec l'id : ${req.params.utilisateurId} n'a pas été trouvé`
        });
      } else {
        res.status(500).send({
          message: "Impossible de supprimer l'utilisateur avec l'id : " + req.params.utilisateurId
        });
      }
    } else res.send({ message: `L'utilisateur à été supprimé!` });
  });
};

router.verifier_administrateur = (req, res) => {
  Utilisateur.recuperer_administrateur(req.params.utilisateurId, (err, data) => {
    if (err) {
      if (err.kind === "L'utilisateur n'existe pas") {
        res.status(404).send({
          message: `L'utilisateur avec l'id : ${req.params.utilisateurId} n'a pas été trouvé`
        });
      } else {
        res.status(500).send({
          message: "La requète n'a pas marché: " + req.params.utilisateurId
        });
      }
    } else res.send(data);
  });
};
module.exports = router;
