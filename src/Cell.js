import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    //props === {color: "#FFF"}
    super()
    this.state = {
      color: props.color //#fffff, #89898 
      
    }

  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    //this.props === {color: "#FFF"}
    return (
      <div className="cell" 
           style={{backgroundColor: this.state.color}}
           onClick={this.handleClick}>
      </div>
    )
  }
  
}