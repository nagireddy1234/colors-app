import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar'


export default class Palette extends Component {
  state={
    level:500
  }
  changeLevel = level => {
    this.setState(
      {level }
    )
  }
  render() {
    const {colors}=this.props.palette;
    const {level}=this.state;
    const ColorBoxes = colors[level].map(color=> {
      return (<ColorBox background={color.hex} name={color.name} key={color.name} />)
    })
     
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel}/>
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
