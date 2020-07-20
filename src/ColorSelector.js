import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      //console.log(str) # f f f , each colors
     // console.log(idx) each idx 1,2,3,4,5,6,7,8
      const cb = () => {this.props.setSelectedColor(str)} //parent Matrix function. 
      return <div key={idx} onClick={cb} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    console.log(this.props.setSelectedColor) //array(25) from parent MATRIX.js

    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
