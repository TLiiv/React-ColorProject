import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';


const styles = {
  picker:{
    marginTop:'2rem'
  },
  addColor:{
    width:'100%',
    padding:'.5rem',
    marginTop:'.5rem',
    fontSize:'1.5rem'
  },
  colorNamenput:{
    width:'100%',
    height:'70px'
  }
}


class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: '',
        };
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
          this.props.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          )
        );
        ValidatorForm.addValidationRule('isColorUnique', value =>
          this.props.colors.every(
            ({ color }) => color !== this.state.currentColor
          )
        );
      }
      //checks if every color name is unique

      handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        })
      }

      handleSubmit(){
        const newColor = { 
            color: this.state.currentColor, 
            name: this.state.newColorName 
        };
        this.props.addNewColor(newColor);
        this.setState({newColorName:''})
      }

      updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex })
      }

    render(){
        const {paletteIsFull, classes} = this.props;
        const{newColorName,currentColor} = this.state;
        return (
            <div>
        <ChromePicker
            width='100%'
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
            className={classes.picker}
          />
          <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
            <TextValidator
              value={newColorName}
              variant='filled'
              margin='normal'
              placeholder='Color Name'
              className={classes.colorNameInput}
              name='newColorName'
              onChange={this.handleChange}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['Enter a color name','Color name must be unique','This color already exists' ]} 
              />

            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: paletteIsFull ? "light-grey" : currentColor }}
              // onClick={this.addNewColor}
              type="submit"
              disabled={paletteIsFull}
              className={classes.addColor}
            >
              {paletteIsFull ? 'Palette Full': 'Add Color'}
            </Button>
          </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);