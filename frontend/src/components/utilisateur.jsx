import React from "react";
import {Link} from "react-router-dom";

class Utilisateur extends React.Component {
 
    constructor(props) {
      
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        className: props.className
        
      };
      
      
     
      
    }
  
    componentDidMount() {
      
    fetch("http://localhost:3001/api/utilisateurs/informations_utilisateur/" + this.props.id_utilisateur) 
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
            <div className={this.state.className}>
               {items.map(item => (
                 
                <li key={item.id} className="card-title">
                  
                  
                  <Link to={{
                  pathname: '/profil',
                  state: {
                    id_utilisateur: item.id
                  }
                }}>{item.prenom} {item.nom} </Link>
                 
                </li>
              ))}
                 
                  
                 
              
            </div>
          );
        }
      }
}

export default Utilisateur;
  