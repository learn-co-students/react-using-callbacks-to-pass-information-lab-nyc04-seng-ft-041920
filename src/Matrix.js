import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() { 
    super()
    this.state = {
      selectedColor: '#FFF'
    }
    console.log(this.state.selectedColor)
  }


  setSelectedColor = (newColor) => { //new data from learnSymbol but HOW???? via INDEX.JS VALUE?
    console.log(newColor) //learnSymbol Array(25)
    this.setState ({
      selectedColor: newColor //mutate the "selectedColor" data in the state using setState
    })
  }

  //row and column
  genMatrix = () => (
    //this.props.values === Array(25) from parentfile, INDEX.js, as an attribute. (learnSymbol from data.js)
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  genRow = (vals) => (
    //vals === each row
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  render() {
    //console.log(this.setSelectedColor)//Array(25)
    //console.log(newColor)
    //console.log(this.state.selectedColor)
    return (
      <div id="app">
        <ColorSelector 
        setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}