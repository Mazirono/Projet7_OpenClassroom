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
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
            <div>
                {items.length &&
                 <button type="button" className="btn btn-primary">{items.length} commentaires</button>
                } 
                {items.message == false &&
                 <button type="button" className="btn btn-primary">0 commentaire</button>
                } 
                
          </div>
          );
        }
      }
}

export default Nombre_commentaire;
  