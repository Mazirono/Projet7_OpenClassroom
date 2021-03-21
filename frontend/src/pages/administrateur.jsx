import React  from 'react';
import Affichage_administrateur from '../components/administrateur/affichage_administrateur';
import withAdmin from "../components/authentification/withAdmin.jsx"; 
export class Administrateur extends React.Component{
 
  constructor(props) {
   
    super(props);
    
  }

 

  render() {
    
    return (
     
      <section id="section_administrateur">
          
          <Affichage_administrateur />

      </section>
    );
  }
}

export default withAdmin(Administrateur)