import React from "react";
class Nombre_commentaire extends React.Component {
 
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
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
            <div>
                {items.length &&
                 <button>{items.length} commentaires</button>
                } 
                {items.message &&
                 <button>0 commentaire</button>
                } 
                
               
                
              
                 
              
            </div>
          );
        }
      }
}

export default Nombre_commentaire;
  