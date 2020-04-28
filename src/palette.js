import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar'


export default class Palette extends Component {
  state={
    level:500,
    format:"hex"
  }
  changeLevel = level => {
    this.setState(
      {level }
    )
  }
  changeFormat = (val)=>{
    this.setState({
      format:val
    })
  }
  render() {
    const {colors,paletteName,emoji,id}=this.props.palette;
    const {level, format}=this.state;
    const ColorBoxes = colors[level].map(color=> {
      return (<ColorBox background={color[format]} name={color.name} key={color.id} paletteId={id} colorId={color.id} />)
    }) 
    return (
      <div className="Palette">
         {/* navbar */}
        <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>
         {/* colors boxes  */}
        <div className="Palette-colors">
          {ColorBoxes}
        </div>
        {/* footer */}
        <footer className="palette-footer"> 
        {paletteName}
        <span className="emoji">{emoji}</span>
        </footer>
      </div>
    )
  }
}
