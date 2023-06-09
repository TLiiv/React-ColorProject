import Sizes from './Sizes';
import chroma from 'chroma-js';

const styles = {
    root: {
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover svg":{
            color:'white',
            transform:'scale(1.5)'
        },
        [Sizes.down('lg')] : {
            width:'25%',
            height:'20%'
        },
        [Sizes.down('md')] : {
            width:'50%',
            height:'10%'
        },
        [Sizes.down('sm')] : {
            width:'100%',
            height:'5%'
        },
    },
   
    boxContent: {
        position: 'absolute',
        padding: '10px',
        width: '100%',
        left: '0px',
        bottom: '0px',
        color: props => 
        chroma(props.color).luminance() >= 0.06 ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    deleteIcon: {
        transition:'all 0.3s ease-in-out'
        
    }
}

export default styles;