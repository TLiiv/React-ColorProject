import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import styles from './styles/ColorBoxStyles';
import {withStyles} from '@material-ui/styles';


class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {copied:false};
       this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({copied:true},()=> {
            setTimeout(()=>this.setState({copied:false}),1500);
        })
    }

   

    render() {
        
        const { name, background,moreUrl, showingFullPalette, classes } = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div style={{ background }} className={classes.ColorBox}>
                <div 
                style={{ background }} 
                className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}/>
                <div className={`${classes.copyMesssage} ${copied && classes.showMessage}`}>
                    <h1>copied!</h1>
                    <p className={classes.copyText}>{this.props.background}</p>
                </div>
                <div >
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                        {/* kui on < 0.05 siis on dark color ja muudab classi light-textiks */}
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {showingFullPalette && (
                <Link to={moreUrl} onClick={e=> e.stopPropagation()}> 
                {/* stoppropagation selle jaoks, et muidu morei peale vajutades teeb copyonclipboardi ka */}
                <span className={classes.seeMore}>MORE</span>
                </Link>
                )}
            </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);