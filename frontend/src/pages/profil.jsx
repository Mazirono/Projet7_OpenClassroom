import React  from 'react';
import Affichage_profil from '../components/profil/affichage_profil';

export class Profil extends React.Component{
 
  constructor(props) {
   
    super(props);
   
    this.state = {
      id_utilisateur: this.props.location.state
      
    };
    
  }

 

  render() {
    
    return (
     
      <section>
          
          <Affichage_profil  id_utilisateur= {this.state.id_utilisateur}/>

      </section>
    );
  }
}

export default Profil 