const sql = require("../db.js");

const Article = function(article) {
    this.titre = article.title;
    this.contenu = article.contenu
    this.id_utilisateur = article.id_utilisateur;
    this.id_article = article.id_article;
};

Article.creer_message = (newArticle, result) => {
  
    sql.query("INSERT INTO articles SET ?", newArticle, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      
      result(null, { id: res.insertId, ...newArticle });
    });
};
Article.suppression_article = (id, result) => {
  sql.query("DELETE FROM articles WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "L'article n'existe pas" }, null);
      return;
    }

    console.log("Suppression de l'article avec l'id : ", id);
    result(null, res);
  });
};

Article.recuperer_articles = result => {
  sql.query("SELECT * FROM articles WHERE id_article IS NULL Order by date DESC ", (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};


Article.recuperer_reponses = (id, result) => {
  sql.query("Select * From articles Where id_article= ?", id , (err, res) => {
   
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
     
      result(null, res);
      return;
    }
  
    result({ kind: "not_found" }, null);
    
  });
};

Article.recuperer_administrateur = result => {
  sql.query("SELECT * FROM articles Order by date DESC ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Article.recuperer_message_profil = (id, result) => {
  
  sql.query("Select * From articles Where id_utilisateur= ?" , id , (err, res) => {
   
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
     
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
    
  });
};

module.exports = Article;
