const sql = require("../db.js");

const Utilisateur = function(utilisateur) {
    this.nom = utilisateur.nom;
    this.prenom = utilisateur.prenom;
    this.email = utilisateur.email;
    this.password = utilisateur.password;
    this.administrateur = utilisateur.administrateur;
};

Utilisateur.creer_utilisateur = (newUtilisateur, result) => {
  sql.query("INSERT INTO utilisateurs SET ?", newUtilisateur, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Utilisateur créé: ", { id: res.insertId, ...newUtilisateur });
    result(null, { id: res.insertId, ...newUtilisateur });
  });
};

Utilisateur.verification_email = (email, result) => {
  
  sql.query(`SELECT * FROM utilisateurs WHERE email = '${email}'`, (err, res) => {
    
    if (err) {
      console.log("Erreur dans la procédure: ", err);
      result(err, "null");
      return;
    }

    if (res.length) {
      console.log("L'email existe déjà:", res[0]['email']);
      result(null, res[0]);
      return;
    }
    
    // not found Customer with the id
    result({ kind: "L'adresse email n'existe pas" }, null);
    
  });
};


Utilisateur.suppression_utilisateur = (id, result) => {
  sql.query("DELETE FROM utilisateurs WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "L'utilisateur n'existe pas" }, null);
      return;
    }

    console.log("Suppression de l'utilisateur avec l'id : ", id);
    result(null, res);
  });
};

Utilisateur.recuperer_utilisateur= (id, result) => {
  sql.query(`Select * From utilisateurs Where id= '${id}' `, (err, res) => {
    
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
     
      result(null, res);
      return;
    }
    
    // not found Customer with the id
    result({ kind: "not_found" }, null);
    
  });
};


Utilisateur.recuperer_administrateur = (id, result) => {
  sql.query(`SELECT administrateur FROM utilisateurs WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("L'utilisateur n'a pas été trouvé: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Statut administrateur : ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  }; 

module.exports = Utilisateur;