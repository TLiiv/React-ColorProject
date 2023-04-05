import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import Page from './Page';




class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = { palettes: savedPalettes || seedColors }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id
    });
  } // otsib paletti
  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage)
    //adds new plaette to ...existing palettes
  }
  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      //first route for fade transitions (location is  react-router prop) 
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={350}>
            <Switch location={location}>
              <Route
                exact path='/palette/new'
                render={routeProps => (
                  <Page>
                  <NewPaletteForm
                    savePalette={this.savePalette}
                    palettes={this.state.palettes} {...routeProps}
                  />
                  </Page>
                )}
              // needs to be top or palette/:id matches and runs into error
              />
              <Route
                exact path='/'
                render={routeProps =>(
                  <Page>
                  <PaletteList
                  palettes={this.state.palettes}
                  deletePalette={this.deletePalette}
                  {...routeProps}
                />
                </Page>
      )}
              //routeProps to use history and etc
              />
              <Route
                exact path='/palette/:id'
                render={routeProps => (
                  <Page>
                  <Palette
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.id)
                    )}
                  />
                  </Page>
                )}
              />
              <Route exact path="/palette/:paletteId/:colorId"
                render={routeProps => (
                  <Page>
                  <SingleColorPalette
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.paletteId)
                    )}
                  />
                  </Page>
                )}

              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
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
