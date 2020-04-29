import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/PaletteStyles'

class Palette extends Component {
  state={
    level:500,
    format:"hex",
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
    const {classes} =this.props
    const {colors,paletteName,emoji,id}=this.props.palette;
    const {level, format}=this.state;
    const ColorBoxes = colors[level].map(color=> {
      return (<ColorBox background={color[format]} name={color.name} key={color.id} paletteId={id} colorId={color.id} ShowingFullPalette={true} />)
    }) 
    return (
      <div className={classes.Palette}>
         {/* navbar */}
        <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}  ShowSliderRange={true} />
         {/* colors boxes  */}
        <div className={classes.PaletteColors}>
          {ColorBoxes}
        </div>
        {/* footer */}
       <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}

export default withStyles(styles)(Palette);