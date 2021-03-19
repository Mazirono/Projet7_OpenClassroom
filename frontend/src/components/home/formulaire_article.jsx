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
   
    fetch(" http://localhost:3001/api/articles/creation_article/" + id_Utilisateur, {
        method: "POST",
        body: envoie_article,
    
        headers: {
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
      <form id="formulaire_article"onSubmit={this.handleSubmit}>
        <h1>Ecrivez un article</h1>
        <div className="formulaire_article_element">
          <label htmlFor="title">Titre de l'article</label>
          <input type="text" name="title"  value={this.state.title} onChange={this.handleChange} required />
        </div>
        <div className="formulaire_article_element">
          <label htmlFor="contenu">Article</label>
          <input style={{width:"500px",height:"100px"}} type="contenu" name="contenu"  value={this.state.contenu} onChange={this.handleChange} required />
       </div>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default FormulaireArticle;
  