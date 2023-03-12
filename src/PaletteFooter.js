import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';


function PaletteFooter(props){
    const {paletteName, emoji,classes} = props;//ei ole this. props kuna functional component, class-ga oleks this.props
return(
    <footer className={classes.PaletteFooter}>
                    {paletteName}
                    <span className={classes.emoji}>
                    {emoji} 
                    {/* lipu emojid ei tööta windowsis */}
                    </span>
                </footer>
)
}

export default withStyles(styles)(PaletteFooter);