import React  from 'react';
import Affichage_administrateur from '../components/administrateur/affichage_administrateur';

export class Administrateur extends React.Component{
 
  constructor(props) {
   
    super(props);
    
  }

 

  render() {
    
    return (
     
      <section>
          
          <Affichage_administrateur />

      </section>
    );
  }
}

export default Administrateur