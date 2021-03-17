import React from 'react';

class FormulaireArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ecrivez le titre de l'article",
      contenu: 'Écrivez un article que vous souhaitez partager avec vos collègues'
      
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
    
    fetch(" http://localhost:3001/api/articles/creation_article/1", {
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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="title">Titre de l'article</label>
          <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contenu">Article</label>
          <input style={{width:"500px",height:"100px"}} type="contenu" name="contenu" placeholder="contenu" value={this.state.contenu} onChange={this.handleChange} required />
       </div>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default FormulaireArticle;
  