import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slider from 'rc-slider';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {withStyles} from '@material-ui/styles';

import styles from './styles/NavbarStyles';
import 'rc-slider/assets/index.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { format: 'hex', open:false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
   
  handleFormatChange(e){
    this.setState({format: e.target.value, open: true});
    this.props.handleChange(e.target.value);
  }

  closeSnackbar(){
    this.setState({open:false})
  }
    render(){
        const { level, changeLevel, showingAllColors,classes }= this.props;
        const { format } = this.state;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                  <Link to='/'>Palette Picker</Link>
                </div>
                {showingAllColors &&
                <div>
                <span>Level:{level}</span>
                <div className={classes.slider}>
                <Slider defaultValue={level} 
                min={100} 
                max={900} 
                step={100}
                onChange={changeLevel}
                trackStyle={[{backgroundColor: 'transparent'}]}
                handleStyle={[
                    {
                      backgroundColor: "teal",
                      outline: "none",
                      border: "2px solid teal",
                      boxShadow: "none",
                      width: "13px",
                      height: "13px",
                      marginLeft: "-7px",
                      marginTop: "-3px",
                    },
                  ]}
                  railStyle={{height: "8"}}
                />
                </div>
                 </div>
    }
                 <div className={classes.selectContainer}>
                    <Select value={format } onChange={this.handleFormatChange}> 
                    {/* handleChange peab parentisse panema, parent on palette */}
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                 </div>
            <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: "left" }}
              open={this.state.open}
              autoHideDuration={3000}
              // onClose={handleClose}
              message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
              ContentProps={{
                "aria-describedby": "message-id"
              }}
              onClose={this.closeSnackbar}
              action={[<IconButton 
                onClick={this.closeSnackbar} 
                color="inherit" 
                key='close'
                aria-label='close'>
                {/* aria-label on screenreaderi jaoks(pimedatele) */}
                <CloseIcon />
              </IconButton>]}
            />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar);