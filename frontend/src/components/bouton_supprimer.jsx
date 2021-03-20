import React from "react";

class Bouton_supprimer extends React.Component {
 
    constructor(props) {
      console.log(props)
      super(props);
      this.state = {
            id_article : props.id_article
        
      };
      
    }

    handleClick = () => {
        
        fetch('http://localhost:3001/api/articles/supprimer_article/' + this.state.id_article, {
        method: 'DELETE',
        })

        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
            
            
      
    }
  
  
    componentDidMount() {
     
        
    }
  
  
    render() {
       
        return (
            <button onClick={this.handleClick} type="button" class="btn btn-primary">Supprimer message</button>
        );
    }
      
}

export default Bouton_supprimer ;