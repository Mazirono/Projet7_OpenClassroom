import React from "react";

import Date from "../date.jsx";
import Utilisateur from "../utilisateur.jsx";
import Nombre_commentaire from "../nombre_commentaire.jsx";
import Bouton_supprimer from "../bouton_supprimer.jsx";



class Affichage_administrateur extends React.Component {
 
    constructor(props) {
     
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        commentaires: 0 
      };
      
    }

    handleClick = (item_id) => {
     
      this.setState({
        commentaires : item_id
      });
    }
  
  
    componentDidMount() {
      fetch("http://localhost:3001/api/articles/afficher_administrateur")
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result
            });
            
          },
    
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        
    }
  
  
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
            <div>
              {items.map(item => (
                <div key={item.id}>
                  <ul>
                    <Utilisateur id_utilisateur={item.id_utilisateur}/>
                    <li>{item.titre}</li>
                    <li>{item.contenu}</li>
                    <Date date={item.date}/>
                    <li onClick={() => this.handleClick(item.id)}  ><Nombre_commentaire id_article= {item.id}  /> </li>
                    <Bouton_supprimer id_article= {item.id}/>
                    
                  </ul>
                </div>
              ))}
            </div>
          );
        }
      }
}

export default Affichage_administrateur ;