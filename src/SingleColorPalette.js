import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles ={
  Palette:{
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  PaletteColors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white", 
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none"
    },

}
}

class SingleColorPalette extends Component {
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
  const {classes} =this.props
  const {paletteName,emoji,id} =this.props.palette;

  const colorBoxes = this.shades.map(color=>{
     return <ColorBox key={color.hex} name={color.name} background={color[this.state.format]} ShowingFullPalette={false}  />

   })
    return (
      <div className={classes.Palette}>
        <Navbar changeFormat={this.changeFormat} ShowSliderRange={false}/>
        <div className={classes.PaletteColors}>
            {colorBoxes}
            <div className={classes.goBack}>
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

export default withStyles(styles)(SingleColorPalette);