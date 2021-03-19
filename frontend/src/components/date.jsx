import React from "react";


function Date(props) {
    var date =  props.date
    

    var année = date.slice(0, 4)
    var mois = date.slice(5,7)
    var jour = date.slice(8, 10)

    var heure = date.slice(11, 13)
    var minute =  date.slice(14,16)
    


   
    return <li className="element_article">Message envoyé le {jour}/{mois}/{année} à {heure}h{minute}</li>;
}

export default Date;
  