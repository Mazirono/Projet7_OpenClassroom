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
      const token = localStorage.getItem("token");
      fetch("http://localhost:3001/api/articles/messages_profil/" + this.state.id_Utilisateur, {
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
        
      fetch("http://localhost:3001/api/utilisateurs/informations_utilisateur/" + this.state.id_Utilisateur, {
        method: 'GET',
        
        headers: {
            'Authorization': token, 
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => res.json())
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
            <div className="messages_profil">
            
              {profil_information.map(item => (
                
                <ul key={item.id} className="message_profil">
                    <h1> Vous êtes sur le profil de {item.prenom} {item.nom} </h1>
                    {profil_messages.message &&
                      
                    <li className='element_message_profil'  > Cet utilisateur n'a écrit aucun message pour le moment</li>
                    }
                </ul>
              ))}
              
              {profil_messages.message != "Nous avons retrouvé aucun message écrit par ce profil." &&
              profil_messages.map(item => (
                <ul key={item.id} className="message_profil">

                   <Date date={item.date} className='element_message_profil'/>
                  <li  className='element_message_profil'>{item.contenu} </li>
                  
                </ul>
              ))}
             
              

            </div>
          );
        }
      }
}
export default Affichage_profil ;