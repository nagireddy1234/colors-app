import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
  render() {
    const ColorBoxes = this.props.palette.colors.map(color=> {
      return (<ColorBox background={color.color} name={color.name} key={color.name} />)
    })
    return (
      <div className="Palette">
        {/* navbar is here */}
        <div className="Palette-colors">
          {/* colors boxes are here */}
          {ColorBoxes}
        </div>
        {/* footer is here */}
      </div>
    )
  }
}
