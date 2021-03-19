import React from "react";
import loginImg from "../../images/login.png";
import Element_formulaire from "./element_formulaire.jsx"

export class Formulaire_register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        prenom: "",
        nom: "",
        email: "",
        password: "",
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      
      
    }
    handleChange(event) {
      
      this.setState({ prenom: event.target.value});
      
    }
    
    handleSubmit(event,props) {
      console.log(props)
      const { email, password,nom,prenom } = this.state;
      var envoyer_formulaire = { password , email ,nom,prenom};
      this.handleChange() 
      envoyer_formulaire = JSON.stringify(envoyer_formulaire);
      
      fetch(" http://localhost:3001/api/utilisateurs/inscription", {
        method: "POST",
        body: envoyer_formulaire,
          
        headers: {
        'Content-Type': 'application/json'
        },
          
        }).then((user) => {
         
          if(user.status === 200){
            
                  
            window.location.reload();
                  
          }
              
              
        })
        .catch(error => {
          console.log(error)
        })
      
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="formulaire_register" >
          <div className="header">Inscription</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <form onSubmit={this.handleSubmit}>
                 <Element_formulaire saisie={this.handleChange} field={"prenom"} label={"Prenom"} />
                 <Element_formulaire field={"nom"} label={"Nom"} />
                 <Element_formulaire field={"email"} label={"Email"} />
                 <Element_formulaire field={"password"} label={"Mot de passe"} />
                  
           
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

export default Formulaire_register