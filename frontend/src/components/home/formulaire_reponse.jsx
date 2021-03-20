import React from 'react';

class FormulaireReponse extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id_article : props.id_article,
      contenu: 'Écrivez un commentaire'
      
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
      <form onSubmit={this.handleSubmit} className="formulaire_reponse ">
        
        
      <div className="formulaire_reponse_element" >
      <textarea type="contenu" name="contenu"  value={this.state.contenu} onChange={this.handleChange}class="form-control"  rows="3"></textarea>
       </div>
       <div className="formulaire_reponse_element" >
          <button type="button" class="btn btn-primary" type="submit">Envoyer</button>
        </div>
      </form>
    );
  }
}

export default FormulaireReponse;