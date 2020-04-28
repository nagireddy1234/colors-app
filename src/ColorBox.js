import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/core/styles';
import './ColorBox.css';

const styles = {
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  },

}
class ColorBox extends Component {
  state={
    copied:false
  }
  changeCopyState = ()=>{
    this.setState({
      copied:true
    }, ()=>{
        setTimeout(() => {
          this.setState({
            copied:false
          })
        }, 1500);
    })
  }
  render() {
    const {name, background,paletteId,colorId, ShowLink, classes} = this.props;
    const {copied} = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.06
    const isLightColor = chroma(background).luminance() >= 0.6
    return (

      <CopyToClipboard text={background} onCopy= {this.changeCopyState}>
      <div style={{backgroundColor:`${background}`}} className="ColorBox" >
        <div className={`copy-overlay ${copied &&'show'}`} style={{backgroundColor:`${background}`}} />
        <div className={`copy-msg ${copied &&'show'}`}>
          <h1 className={`${isLightColor&&"dark-text"}`}>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
        <div className="box-content">
    <span className={classes.colorName}> {name}</span>
        </div>
        <button className={`copy-button ${isLightColor&&"dark-text"}`}>COPY</button> 
        </div>
        {ShowLink && <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e)=>e.stopPropagation()}>
        <span className={`see-more ${isLightColor&&"dark-text"}`}>MORE</span>
        </Link>  }
      </div>
      </CopyToClipboard>
    )
  }
}


export default withStyles(styles)(ColorBox);