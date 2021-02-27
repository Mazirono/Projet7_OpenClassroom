import React from "react";
import loginImg from "../images/login.png";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      email: "",
      password: "",
      password_confirmation: "",
      
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password,nom,prenom } = this.state;
    var envoyer_formulaire = { password , email ,nom,prenom};
        
    envoyer_formulaire = JSON.stringify(envoyer_formulaire);
        
    fetch(" http://localhost:3001/api/utilisateurs/inscription", {
      method: "POST",
      body: envoyer_formulaire,
        
      headers: {
      'Content-Type': 'application/json'
      },
        
      }).then((user) => {
       
        if(user.status === 200){
          
                
          console.log("inscription réussi")
                
        }
            
            
      })
      .catch(error => {
        console.log(error)
      })
    
    event.preventDefault();
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Inscription</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" name="prenom" placeholder="prenom" value={this.state.prenom} onChange={this.handleChange} required  />
             </div>
             <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input type="text" name="nom" placeholder="nom" value={this.state.nom} onChange={this.handleChange} required  />
             </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
            <div className="footer">
          <button type="submit" className="btn">
            Inscription
          </button>
        </div>
          </form>
        </div>
        
      </div>
    );
  }
}
