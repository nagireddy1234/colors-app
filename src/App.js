import React, { Component } from 'react';
import Palette from './Palette';
import {
  Switch,
  Route
} from "react-router-dom";
import {generatePalette} from './colorHelpers';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette'

export default class App extends Component {

  findPalette = (id)=> {
    return seedColors.find((palette)=>{
      return palette.id===id;  
    })
}
  render() {
    return (
      <div className="App">
      <Switch>
          <Route exact 
                path="/"
                render ={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>} 
          />
          <Route exact
                 path="/palette/:id" 
                 render= {routeProps =>
               (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)
          } />
          <Route exact
                 path="/palette/:id/:id" 
                 render= {() => <SingleColorPalette />
          } />
        </Switch>
    </div>
    )
  }
}
