import React from "react";
import {Link} from "react-router-dom";
import withAuth from "../authentification/withAuth.jsx"; 

export class Footer extends React.Component {
  constructor(props){
    super(props)
    
  }
  handleClick = () => {
    
  }
  handleClick2 = () => {
    
  }
    render() {
      
      return(
        
       <footer>

       </footer>
      )
      
      
    }
}
export default withAuth(Footer) ;