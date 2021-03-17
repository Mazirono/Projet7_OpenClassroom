import React  from 'react';
import Affichage_profil from '../components/profil/affichage_profil';

export class Profil extends React.Component{
 
  constructor(props) {
   
    super(props);
    
  }

 

  render() {
    
    return (
     
      <div>
          
          <Affichage_profil />

      </div>
    );
  }
}

export default Profil 