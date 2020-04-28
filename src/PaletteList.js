import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: "yellowgreen",
    height:"100vh",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center"
  },
  container: {
      width:"50%",
      display:"flex",
      alignItems:"flex-start",
      flexDirection:"column",
      flexWrap:"wrap"
  },
  nav: {
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    color:"#fff",
    "& h1":{
      color: "#000"
    }
  },
  palettesStyles: {
    boxSizing:"border-box",
    width:"100%",
    display:"grid",
    gridTemplateColumns:"repeat(3,30%)",
    gridGap:"5%"
  }
}

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