import React from "react";
import {Link, Redirect} from "react-router-dom";
import withAuth from "../authentification/withAuth.jsx"; 

export class Header extends React.Component {
  constructor(props){
    super(props)
    
  }
  handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("administrateur");
 
    <Redirect to="/"/>;
    window.location.reload(false);

    
  }
  handleClick2 = () => {
   
  }
    render() {
      var id_utilisateur = localStorage.getItem("user_id")
      const isAdmin = !!localStorage.getItem("administrateur");
      console.log(isAdmin)
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
                
                { isAdmin &&

                    <Link to={{
                      pathname: '/administrateur',
                      
                    }}>Administrateur </Link>

                } 
                {
            
            }
            
            <button id="button_header"onClick={this.handleClick} >  Déconnexion</button>
          </nav>
          
          <i className="fas fa-sign-out-alt"></i>
        </header>
      )
      
      
    }
}
export default withAuth(Header) ;