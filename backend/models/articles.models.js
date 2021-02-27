const sql = require("../db.js");

const Article = function(article) {
    this.contenu = article.contenu
    this.id_article = article.id_article;
    this.id_utilisateur = article.id_utilisateur;
    
};

Article.creer_message = (newArticle, result) => {
  
    sql.query("INSERT INTO articles SET ?", newArticle, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created Article: ", { id: res.insertId, ...newArticle });
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
      // not found Customer with the id
      result({ kind: "L'article n'existe pas" }, null);
      return;
    }

    console.log("Suppression de l'article avec l'id : ", id);
    result(null, res);
  });
};

Article.recuperer_articles = result => {
  sql.query("SELECT * FROM articles Order by date DESC", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Article.recuperer_message_profil = (id, result) => {
  
  sql.query(`Select * From articles Where id_utilisateur= '${id}' `, (err, res) => {
   
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found email: ", res);
      result(null, res);
      return;
    }
    
    // not found Customer with the id
    result({ kind: "not_found" }, null);
    
  });
};

module.exports = Article;
