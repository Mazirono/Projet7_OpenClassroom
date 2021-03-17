import React from "react";

import withAuth from "./authentification/withAuth.jsx"; 
export class Header extends React.Component {
  handleClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
    render() {
      return(

        <header className="Header">
        
        
          <nav className="Nav">
            <a href="/">Home</a>
            <a href="/profil">Profil</a>
            <a href="/">Administrateur</a>
            <button id="button_header"onClick={this.handleClick} >Déconnexion</button>
          </nav>
      
        
        </header>
      )
      
      
    }
}
export default withAuth(Header) ;