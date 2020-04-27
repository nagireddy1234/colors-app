import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: '#fff',
    borderRadius: '5px',
    border: '1px solid #000',
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    marginTop: "-1px",
    "&:hover": {
      cursor: "pointer",
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height:"150px",
    width:"100%",
    borderRadius:"5px",
    overflow:"hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "#000",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  minicolor:{
      height:"25%",
      width:"20%",
      display:"inline-block",
      margin:"0 auto",
      position:"relative",
      marginBottom:"-3.5px",
  }
};

function MiniPalette(props) {
  console.log(props)
  const { classes, palette } = props;
  const MiniColorBoxes = palette.colors.map(color=> {
    return (<div className={classes.minicolor} style={{backgroundColor:`${color.color}`}} key={palette.id} />)
  })

  return (
    <div className={classes.root}>
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
