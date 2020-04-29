import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/MiniPaletteStyles';


  function MiniPalette(props) {
  //  console.log(props)
  const { classes, palette } = props;
  const MiniColorBoxes = palette.colors.map(color=> {
    return (<div className={classes.minicolor} style={{backgroundColor:`${color.color}`}} key={color.name} />)
  })
  return (
    <div className={classes.root} onClick={props.goToPalette}>
      <div className={classes.colors}>
        {MiniColorBoxes}
      </div>
      <h5 className={classes.title}>{palette.paletteName}
      <span className={classes.emoji}> {palette.emoji} </span>
      </h5>

    </div>
  )
}
export default withStyles(styles)(MiniPalette);
