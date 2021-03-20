import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Date from "../date.jsx";
import Utilisateur from "../utilisateur.jsx";
import Nombre_commentaire from "../nombre_commentaire.jsx";

import Affichage_reponses from "./affichage_reponses.jsx";

class Affichage_accueil extends React.Component {
 
    constructor(props) {
      const token = localStorage.getItem("token")
      console.log(token)
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        articles: [],
        commentaires: [],
        
      };
      
    }

    handleClick = (item_id) => {
      if(this.state.commentaires.indexOf(item_id) == -1){
       
        this.setState({
          commentaires :  this.state.commentaires.concat(item_id),
         
        });

      }
      else if(this.state.commentaires.indexOf(item_id) > -1){
        var index = this.state.commentaires.indexOf(item_id)
        this.state.commentaires.splice(index, 1);
        this.setState({
          commentaires : this.state.commentaires
        });
      }
      
      
    }
  
  
    componentDidMount() {
      fetch("http://localhost:3001/api/articles/afficher_articles")
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              articles: result
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
        const { error, isLoaded, articles } = this.state;
        
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
            <div className="articles">
           
           
              {articles.map(item => (
                <ul key={item.id} className="article">
                  
                 
                  <Utilisateur id_utilisateur={item.id_utilisateur} className="element_article"/>
                  <Date date={item.date} className="element_article"/>
                  <li className="element_article">{item.titre}</li>
                  <li className="element_article">{item.contenu}</li>
                  
                  <li className="element_article" onClick={() => this.handleClick(item.id)}  ><Nombre_commentaire id_article= {item.id}  /> </li>
                 
                  {this.state.commentaires.indexOf(item.id) > -1  && 
                    <Affichage_reponses id_article = {item.id}/>
                   
                  } 
                </ul>
            
              ))}
            </div>
          );
        }
      }
}

export default Affichage_accueil ;