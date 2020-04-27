import React from 'react';
import Palette from './Palette';
import {
  Switch,
  Route
} from "react-router-dom";
import {generatePalette} from './colorHelpers';
import seedColors from './seedColors';
import PaletteList from './PaletteList'

function App() {

   const findPalette = (id)=> {
      return seedColors.find((palette)=>{
        return palette.id===id;  
      })
  }
  return (
    <div className="App">
      <Switch>
          <Route exact 
                path="/"
                render ={() => <PaletteList palettes={seedColors}/>} 
          />
          <Route exact
                 path="/palette/:id" 
                 render= {routeProps =>
               (<Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />)
          } />
         
        </Switch>
    </div>
  );
}

export default App;
