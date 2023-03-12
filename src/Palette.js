import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palett.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {withStyles} from '@material-ui/styles';

const styles = {
    Palette:{
    height:'100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    },
    colors:{
        height: '90%'
    }
}


class Palette extends Component {
    constructor(props){
        super(props);
        this.state= {level: 500, format:'hex'};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel){
        this.setState({ level: newLevel })
    }
    changeFormat(val){
       this.setState({format: val});
    }
    render(){
        const { classes} = this.props;
        const {colors, paletteName, emoji, id, } = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color=>(
            <ColorBox 
            background={color[format]} 
            name={color.name} 
            key={color.id} 
            showingFullPalette={true}
            moreUrl={`/palette/${id}/${color.id}`}
            />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar 
                level={level} 
                changeLevel={this.changeLevel}
                handleChange={this.changeFormat}
                showingAllColors = {true}
                />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(Palette);