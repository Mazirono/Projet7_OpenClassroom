
import React from "react";
import Formulaire_article from "../components/home/formulaire_article";
import Affichage_accueil from "../components/home/affichage_home";
import withAuth from "../components/authentification/withAuth.jsx"; 
export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    
  
  }

  
  render() {
    return (
     <section id="section_accueil">
        <Formulaire_article/>
        <Affichage_accueil />
        
     </section>
    );
  }
}

export default withAuth(Accueil) ;