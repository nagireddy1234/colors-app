import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class PaletteList extends Component {
  render() {
    //  console.log(this.props.palettes)
    const {palettes} = this.props
    return (
      <div>
       {palettes.map((palette)=>
       {
       return (
        <h1><Link to={`/palette/${palette.id}`}> {palette.paletteName}</Link></h1>
        )}
       
        
       )}
      </div>
    )
  }
}
