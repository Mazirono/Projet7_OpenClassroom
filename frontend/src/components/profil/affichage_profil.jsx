import React from "react";
import Date from "../date.jsx";
import Utilisateur from "../utilisateur.jsx";
/*
class Affichage_profil extends React.Component {
 
    constructor(props) {
     
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        profil_messages: [],
        profil_information : []
      };
      
      
     
      
    }
  
    componentDidMount() {
        fetch("http://localhost:3001/api/articles/messages_profil/1")
        .then(res => res.json())
        .then(
            (result) => {
            console.log(result)
            this.setState({
                isLoaded: true,
                profil_messages: result
            });
            
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
        fetch("http://localhost:3001/api/utilisateurs/informations_utilisateur/1")
        .then(res => res.json())
        .then(
            (result) => {
            console.log(result)
            this.setState({
               
                profil_information: result
            });
            
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
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
                  <li>{item.titre}</li>
                  <li>{item.contenu}</li>
                  <Date date={item.date}/>
                </ul>
              ))}
            </div>
          );
        }
      }
}
*/
class Affichage_profil extends React.Component {
 
    constructor(props) {
     
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        profil_messages: [],
        profil_information : []
      };
      
      
     
      
    }
  
    componentDidMount() {
        fetch("http://localhost:3001/api/articles/messages_profil/1")
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
        fetch("http://localhost:3001/api/utilisateurs/informations_utilisateur/1")
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