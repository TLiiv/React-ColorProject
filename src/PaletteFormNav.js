import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';




class NewPaletteFormNav extends Component{
    constructor(props){
        super(props);
       this.state= {
         newPaletteName: "",
       } 
       this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        // ValidatorForm.addValidationRule('isColorNameUnique', value =>
        //   this.state.colors.every(
        //     ({ name }) => name.toLowerCase() !== value.toLowerCase()
        //   )
        // );
        // ValidatorForm.addValidationRule('isColorUnique', value =>
        //   this.state.colors.every(
        //     ({ color }) => color !== this.state.currentColor
        //   )
        // );
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
          this.props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
          )
        );
     }
 
     handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        })
      }
    
    render(){
        const {classes, open} = this.props;
        const {newPaletteName}= this.state;
        return (
            <div>
     <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={()=>this.props.handleSubmit(newPaletteName)}>
              <TextValidator
                label="Palette Name"
                value={this.state.newPaletteName}
                onChange={this.handleChange}
                name='newPaletteName'
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter Palette Name', 'Name is already used']}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Save Palette
              </Button>
              <Button variant="contained" color="secondary">
                 <Link to="/">Go Back</Link>
                 </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
            </div>
        )
    }
}

export default NewPaletteFormNav;