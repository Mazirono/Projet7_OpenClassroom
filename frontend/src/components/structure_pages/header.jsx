import React from "react";
import {Link} from "react-router-dom";
import withAuth from "../authentification/withAuth.jsx"; 

export class Header extends React.Component {
  constructor(props){
    super(props)
    
  }
  handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("administrateur")
    window.location.reload();
    localStorage.getItem("user_id")
  }
  handleClick2 = () => {
   
  }
    render() {
      var id_utilisateur = localStorage.getItem("user_id")
      return(
        
        <header className="Header">
        
        
          <nav className="Nav">
            <a href="/">Home</a>
            <Link onClick={this.handleClick2}to={{
                  pathname: '/profil',
                  state: {
                    id_utilisateur:  id_utilisateur
                  }
                }}>Profil </Link>
            <a href="/administrateur">Administrateur</a>
            <button id="button_header"onClick={this.handleClick} >  Déconnexion</button>
          </nav>
      
        
        </header>
      )
      
      
    }
}
export default withAuth(Header) ;