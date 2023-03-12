import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette} from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';



class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id
    });
  } // otsib paletti
  render(){
    return (
      <Switch>
        <Route 
        exact path='/' 
        render={(routeProps)=> <PaletteList palettes = {seedColors} {...routeProps} />}
        />
        <Route 
        exact path ='/palette/:id'
        render={routeProps => (
          <Palette 
          palette= {generatePalette(
            this.findPalette(routeProps.match.params.id)
          )}
          />
        )}
        />
        <Route exact path="/palette/:paletteId/:colorId" 
        render={(routeProps)=> 
        <SingleColorPalette 
          colorId={routeProps.match.params.colorId}
          palette = {generatePalette(
            this.findPalette(routeProps.match.params.paletteId)
        )} />}
        
        />
      </Switch>
    )
  }
}


// //siia classi vaja vähemalt praegu findPalette() ei saa panna functioni omasse kui ümber liigutamemuudab tagasi
// function App() {
//   findPalette(id){
//     return seedColors.find(function(palette){
//       return palette.id === id
//     });
//   } // otsib paletti id-d mis kattub routei id-ga
//   return (
//     <Switch>
//     <Route exact path="/" render={()=> <h1>Palette list goes here</h1>}/>
//     <Route 
//     exact path="/palette/:id" 
//     render={routeProps=> <Palette palette={generatePalette(this.findPalette
//     (routeProps.match.params.id))} />}/>
//     </Switch>
//     // <div className="App">
//     //   <Palette palette={generatePalette(seedColors[4])}/>
//     // </div>
//   );
// }

export default App;
