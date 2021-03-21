import React  from 'react';
import Affichage_profil from '../components/profil/affichage_profil';
import withAuth from "../components/authentification/withAuth.jsx"; 
export class Profil extends React.Component{
 
  constructor(props) {
   
    super(props);
   
    this.state = {
      id_utilisateur: this.props.location.state
      
    };
    
  }

 

  render() {
    
    return (
     
      <section id="section_profil"> 
          
          <Affichage_profil  id_utilisateur= {this.state.id_utilisateur}/>

      </section>
    );
  }
}

export default withAuth(Profil) 