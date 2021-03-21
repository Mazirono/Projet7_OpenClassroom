import React from "react";

class Bouton_supprimer extends React.Component {
 
    constructor(props) {
      
      super(props);
      this.state = {
            id_article : props.id_article
        
      };
      
    }

    handleClick = () => {
        var administateur = localStorage.getItem("administrateur");
        const token = localStorage.getItem("token")
        fetch('http://localhost:3001/api/articles/supprimer_article/' + this.state.id_article, {
        method: 'DELETE',
        headers: {
            'Authorization':token,administateur , 
              'Content-Type': 'application/x-www-form-urlencoded'
        }
        })

        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))

        window.location.reload(false)
            
            
      
    }
  
  
    componentDidMount() {
     
        
    }
  
  
    render() {
       
        return (
            <button onClick={this.handleClick} type="button" className="btn btn-primary">Supprimer message</button>
        );
    }
      
}

export default Bouton_supprimer ;