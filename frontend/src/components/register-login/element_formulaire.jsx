import React from "react";

export class Element_formulaire extends React.Component {
    constructor(props) {
      super(props);
      console.log(props)
      
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
            <input type="text" name={this.props.field} placeholder={this.props.field} value= {this.state.value} onChange= {this.props.saisie} required  />
        </div>
      );
    }
}



 export default Element_formulaire