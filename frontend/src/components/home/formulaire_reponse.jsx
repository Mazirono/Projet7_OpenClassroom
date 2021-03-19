import React from 'react';

class FormulaireReponse extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id_article : props.id_article,
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
    var id_article =  this.state.id_article
    var envoie_article = { contenu,id_article};
        
    envoie_article = JSON.stringify(envoie_article);
    
    fetch(" http://localhost:3001/api/articles/creation_article/" + localStorage.getItem("user_id"), {
        method: "POST",
        body: envoie_article,
    
        headers: {
        'Content-Type': 'application/json'
        },
      
      }).then(() => {
        window.location.reload();
         
      })
      .catch(error => {
        console.log(error)
          
      })
    event.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        
        <div className="form-group">
          <label htmlFor="contenu">Commentaire</label>
          <input style={{width:"500px",height:"100px"}} type="contenu" name="contenu" placeholder="contenu" value={this.state.contenu} onChange={this.handleChange} required />
       </div>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default FormulaireReponse;