import React from 'react';

class FormulaireArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contenu: ''
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    var contenu =  this.state.contenu;
    var title =  this.state.title;
   
 
    var envoie_article = { contenu ,title};
        
    envoie_article = JSON.stringify(envoie_article);
    var id_Utilisateur = localStorage.getItem("user_id");
    const token = localStorage.getItem("token")
    fetch(" http://localhost:3001/api/articles/creation_article/" + id_Utilisateur, {
        method: "POST",
        body: envoie_article,
    
        headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
        
        },
      
      }).then(() => {
         
      })
      .catch(error => {
        console.log(error)
          
      })
    event.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      
      <form className="form-group" id="formulaire_article"onSubmit={this.handleSubmit}>
        <div className="formulaire_article_element">
           <h1>Ecrivez un article</h1>
        </div>
        <div className="formulaire_article_element">
          <label htmlFor="title">Titre de l'article</label>
          <input type="text" name="title"  value={this.state.title} onChange={this.handleChange} required />
        </div>

        <div className="formulaire_article_element">
          <label htmlFor="contenu">Article</label>
         <textarea type="contenu" name="contenu"  value={this.state.contenu} onChange={this.handleChange} className="form-control"  rows="3"></textarea>
       </div>
       <div className="formulaire_article_element">
        <button type="button" className="btn btn-primary" type="submit">Envoyer</button>
       </div>
      </form>
      
    );
  }
}

export default FormulaireArticle;
  