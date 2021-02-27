import React from "react";


export class Header extends React.Component {
  handleClick = () => {
    localStorage.removeItem("token");
  }
    render() {
      return(

        <header className="Header">
        
        
          <nav className="Nav">
            <a href="/">Home</a>
            <a href="/">Articles</a>
            <a href="/">About</a>
            <button onClick={this.handleClick} >Déconnexion</button>
          </nav>
      
        
        </header>
      )
      
      
    }
}
