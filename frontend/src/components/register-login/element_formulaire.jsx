import React from "react";

export class Element_formulaire extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        
      }
      

  
    render() {
      return (
        <div className="form-group">
            <label htmlFor={this.props.field}>{this.props.label}</label>
            <input type="text" name={this.props.field} placeholder={this.props.field} value= {this.state.value} onChange= {this.handleChange} required  />
        </div>
      );
    }
}

/*
function Element_formulaire(props) {
    return (
        <div className="form-group">
        <label htmlFor="prenom">Prénom</label>
        <input type="text" name="prenom" placeholder="prenom" value= {props.value} onChange={props.onClick} required  />
       </div>
    );
  }
*/

 export default Element_formulaire