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
      var administateur = localStorage.getItem("administrateur");
      fetch("http://localhost:3001/api/articles/afficher_administrateur" , {
        method: 'GET',
        
        headers: {
            'Authorization':administateur , 
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => res.json())

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
            <div className="administrateurs">
              <h1>Pannel administrateur</h1>
              {items.map(item => (
                <ul  className="messages_administrateur" key={item.id}>
                 
                    <Utilisateur  className="element_messages_administrateur " id_utilisateur={item.id_utilisateur}/>
                    <Date date={item.date} className="element_messages_administrateur"/>
                    <li className="element_messages_administrateur">{item.titre}</li>
                    <li className="element_messages_administrateur">{item.contenu}</li>
                    
                    <Bouton_supprimer  className="element_messages_administrateur" id_article= {item.id}/>
                    
                 
                </ul>
              ))}
            </div>
          );
        }
      }
}

export default Affichage_administrateur ;