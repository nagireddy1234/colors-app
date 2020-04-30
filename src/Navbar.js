import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import 'rc-slider/assets/index.css';
import styles from './Styles/NavbarStyles';

class Navbar extends Component {
  state={
    format:"hex",
    open:false
  }
  changeFormat = (e)=>{
    this.setState({format:e.target.value,
                   open:true });
    this.props.changeFormat(e.target.value)
  }
  closeSnackbar = ()=>{
    this.setState({
      open:false
    })
  }
  render() {
    const {level,changeLevel,ShowSliderRange,classes} = this.props;
    const {format} = this.state
    
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
            <Link to="/">
             ReactcolorPicker
            </Link>
        </div>
     {ShowSliderRange && <div>
          <span > Level: {level} </span>
        <div className={classes.slider}>
        <Slider 
        defaultValue={level}
        min={100}
        max={900} 
        step={100} 
        onAfterChange={changeLevel}
        />
        </div> 
        </div> }
        
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.changeFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB-rgb(255,255,255)</MenuItem>
          <MenuItem value='rgba'>RGBA-rgba(255,255,255,1.0)</MenuItem>
        </Select>
        </div>

        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={3000}
      message={<span id='message-id'>Format Changed to {format.toUpperCase()}</span>}
        onClose={this.closeSnackbar}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackbar} >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />     
      </header>
    )
  }
}


export default withStyles(styles)(Navbar);