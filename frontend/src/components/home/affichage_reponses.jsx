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
      const token = localStorage.getItem("token")
      fetch("http://localhost:3001/api/articles/afficher_reponses/" + this.state.id_article, {
        method: 'GET',
        
        headers: {
            'Authorization': token, 
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
        const { error, isLoaded, items  } = this.state;
       
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
            <div className="reponses">
              < FormulaireReponse id_article = {this.state.id_article} />
              {items.message != false &&  
              items.map(item => (
                <ul key={item.id} className="reponse">
                  
                    <Utilisateur id_utilisateur={item.id_utilisateur}/>
                    <Date date={item.date}/>
                    <li className="element_reponse">{item.contenu}</li>
                    
                   
                   
                    
                 
                </ul>
              ))}
              
            </div>
          );
        }
      }
}

export default Affichage_reponses;