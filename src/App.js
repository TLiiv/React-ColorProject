import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette} from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';



class App extends Component {
  constructor(props){
    super(props);
    this.state= {palettes:seedColors}
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id === id
    });
  } // otsib paletti
  savePalette(newPalette){
    this.setState({palettes: [...this.state.palettes, newPalette]})
    //adds new plaette to ...existing palettes

  }
  render(){
    return (
      <Switch>
        <Route 
        exact path='/palette/new'
        render={(routeProps)=> <NewPaletteForm savePalette={this.savePalette} {...routeProps}/>}
        // needs to be top or palette/:id matches and runds into error
        />
        <Route 
        exact path='/' 
        render={(routeProps)=> <PaletteList palettes = {this.state.palettes} {...routeProps} />}
        //routeProps to use history and etc
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
