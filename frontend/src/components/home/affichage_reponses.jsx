import React from "react";

import Date from "../date.jsx";
import Utilisateur from "../utilisateur.jsx";

import FormulaireReponse from "./formulaire_reponse.jsx"

class Affichage_reponses extends React.Component {
 
    constructor(props) {
      
      
     
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        id_article: props.id_article
        
       
      };
      
      
      
    }

  
    componentDidMount() {
        fetch("http://localhost:3001/api/articles/afficher_reponses/" + this.state.id_article)
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
        const { error, isLoaded, items  } = this.state;
       
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
            <div>
               
              {items.message != false &&  
              items.map(item => (
                <ul key={item.id}>
                  
                    <Utilisateur id_utilisateur={item.id_utilisateur}/>
                    <li>{item.contenu}</li>
                    <Date date={item.date}/>
                   
                    
                 
                </ul>
              ))}
               < FormulaireReponse id_article = {this.state.id_article} />
            </div>
          );
        }
      }
}

export default Affichage_reponses;