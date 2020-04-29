import React from 'react';
import styles from './Styles/PaletteFooterStyles';
import { withStyles } from '@material-ui/core/styles';

  function PaletteFooter(props) {
  const {emoji, paletteName, classes} = props
  return (
    <footer className={classes.PaletteFooter}> 
    {paletteName}
    <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter);