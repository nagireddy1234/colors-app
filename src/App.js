import React from 'react';
import Palette from './Palette';
import Seedcolors from './seedColors';
import {generatePalette} from './colorHelpers';

function App() {
  return (
    <div className="App">
     <Palette palette={generatePalette(Seedcolors[4])} />
    </div>
  );
}

export default App;
