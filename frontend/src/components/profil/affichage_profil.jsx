import React from "react";
import Date from "../date.jsx";
import Utilisateur from "../utilisateur.jsx";

class Affichage_profil extends React.Component {
 
    constructor(props) {
     
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        profil_messages: [],
        profil_information : [],
        id_Utilisateur: props.id_utilisateur.id_utilisateur
      };
      
      
     
      
    }
  
    componentDidMount() {
        
      
        fetch("http://localhost:3001/api/articles/messages_profil/" + this.state.id_Utilisateur)
        .then(res => res.json())
        .then(
            (result) => {
              
            
            this.setState({
                isLoaded: true,
                profil_messages: result
            });
            
            },
            
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
        fetch("http://localhost:3001/api/utilisateurs/informations_utilisateur/" + this.state.id_Utilisateur )
        .then(res => res.json())
        .then(
            (result) => {
            
            this.setState({
               
                profil_information: result
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
        const { error, isLoaded, profil_messages,profil_information } = this.state;
        
      
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
            <div>
              {profil_information.map(item => (
                <ul key={item.id}>
                    <h1> Vous êtes sur le profil de {item.prenom} {item.nom} </h1>
                </ul>
              ))}
              
              {profil_messages.map(item => (
                <ul key={item.id}>
                   {item.id_article === null &&
                        <li>{item.titre}</li>
                        &&
                        <li>article</li>
                   } 
                  {item.id_article != null &&
                        <li>Réponse à l'article {item.id_article}</li>
                   } 
                  <li>{item.contenu}</li>
                  <Date date={item.date}/>
                </ul>
              ))}
            </div>
          );
        }
      }
}
export default Affichage_profil ;