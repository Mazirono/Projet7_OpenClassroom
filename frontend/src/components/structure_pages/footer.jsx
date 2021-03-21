import React from "react";
import {Link} from "react-router-dom";
import withAuth from "../authentification/withAuth.jsx"; 
import imageFooter from "../../images/icon-left-font.png";

export class Footer extends React.Component {
  constructor(props){
    super(props)
    
  }
  handleClick = () => {
    
  }
  
    render() {
      
      return(
        
        <footer class="footer-dark">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Charte de confidencialité</a></li>
                            <li><a href="#">Nous contactez</a></li>
                           
                        </ul>
                    </div>
                   
                    <div class="col-md-6 item text">
                        <h3>Groupomania</h3>
                        <p>Vous êtes sur le réseau social de Groupomania , pour créer un échange entre nos salariés sous forme de réseau social nous avons créé ce site 
                          Vous pouvez y créer des articles et échanger autour de ceux ci .
                        </p>
                    </div>
                   
                </div>
                <p class="copyright">Groupomania © 2021</p>
            </div>
        </footer>
   
    
      )
      
      
    }
}
export default withAuth(Footer) ;