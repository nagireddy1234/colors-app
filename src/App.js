import React from 'react';
import Palette from'./palette';
import Seedcolors from './seedColors'


function App() {
  return (
    <div className="App">
     <Palette palette={Seedcolors[4]}/>
    </div>
  );
}

export default App;
