import React from "react";


function Verification_administrateur(userId) {
    
    fetch("http://localhost:3001/api/utilisateurs/informations_utilisateur/" + userId )
        .then(
          (result) => {
            result.json().then(res => {
              console.log(res[0]["administrateur"])
                if (res[0]["administrateur"]){
                    
                    localStorage.setItem("administrateur", true);
                }
                
              
            })
            
           
            
          },
    
          (error) => {
            console.log("Erreur de verification de l'administrateur")
          }
        )
  }

export default Verification_administrateur ;