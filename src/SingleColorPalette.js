import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom'

export default class SingleColorPalette extends Component {
  state={
    format: "hex",
  }
   gathershades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  shades = this.gathershades(this.props.palette, this.props.colorId);
  changeFormat = (val)=>{
    this.setState({
      format:val
    })
  }
  render() { 
  // console.log(this.shades) 
  
  const {paletteName,emoji,id} =this.props.palette;

  const colorBoxes = this.shades.map(color=>{
     return <ColorBox key={color.hex} name={color.name} background={color[this.state.format]} ShowingFullPalette={false}  />
   })
    return (
      <div className="Palette SingleColorPalette">
        <Navbar changeFormat={this.changeFormat} ShowSliderRange={false}/>
        <div className="Palette-colors">
            {colorBoxes}
            <div className="ColorBox go-back" >
              <Link to={`/palette/${id}`} className="back-button">
                Go Back
              </Link>
            </div>
          </div> 
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>  
      </div>
    )
  }
}
