import React from "react";


function Verification_administrateur(administrateur) {
    if( administrateur == 1){
      localStorage.setItem("administrateur", true);
      console.log("admin")
    }
    
  }

export default Verification_administrateur ;