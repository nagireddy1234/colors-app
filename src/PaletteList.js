import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/PaletteListStyles'
class PaletteList extends Component {

  goToPalette = (id) =>{
    // console.log("hi")
      this.props.history.push(`/palette/${id}`)
  }
  render() {
    //  console.log(this.props.palettes)
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
          </nav>
          <div className={classes.palettesStyles}>
            {palettes.map((palette) => {
             return( 
               <MiniPalette key={palette.id} palette={palette} goToPalette={() => this.goToPalette(palette.id)}/>
              ) 
            })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);