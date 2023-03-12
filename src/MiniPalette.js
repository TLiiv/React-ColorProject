import {withStyles} from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';



function MiniPalette(props){
    const {classes, paletteName, emoji, colors}= props;
    // palettei propertiesides on color prop olemas
    const miniColorBoxes = colors.map(color=>(
        <div 
        className={classes.miniColor} 
        style={{backgroundColor: color.color}}
        key={color.name}
        />
    ));
   
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}> 
            {miniColorBoxes}
            {/* et näha on vaja styleida(heighti ei ole parentis(colors) ega miniColoris) */}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);