
import React from "react";
import Formulaire_article from "../components/home/formulaire_article";
import Affichage_accueil from "../components/home/affichage_home";
export class Accueil extends React.Component {
  constructor(props) {
    super(props);
  
  }

  
  render() {
    return (
     <div>
        <Formulaire_article/>
        <Affichage_accueil />
        
     </div>
    );
  }
}

export default Accueil ;