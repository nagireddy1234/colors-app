import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from './Styles/ColorBoxStyles'
import { withStyles } from '@material-ui/core/styles';

class ColorBox extends Component {
  state = {
    copied: false
  }
  changeCopyState = () => {
    this.setState({
      copied: true
    }, () => {
      setTimeout(() => {
        this.setState({
          copied: false
        })
      }, 1500);
    })
  }
  render() {
    const { name, background, paletteId, colorId, ShowingFullPalette, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ backgroundColor: `${background}` }} >
          <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ backgroundColor: `${background}` }} />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage }`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}> {name}</span>
            </div>
            <button className={classes.CopyButton}>COPY</button>
          </div>
          {ShowingFullPalette && <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
            <span className={classes.SeeMore}>MORE</span>
          </Link>}
        </div>
      </CopyToClipboard>
    )
  }
}
export default withStyles(styles)(ColorBox);