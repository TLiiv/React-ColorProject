import Sizes from './Sizes';
import bg from './bg.svg';

export default {
"@global":{
    ".fade-exit":{
        opacity:1
    },
    ".fade-exit-active":{
        opacity:0,
        transition:"opacity 0.5s ease-out"
    }
},
    root: {
       height:'100vh',
       display:'flex',
       alignItems:'flex-start',
       justifyContent:'center',
    //    background by SVGBackgrounds.com
       backgroundColor:'#1E4767',
       backgroundImage:`url(${bg})`,
    //    backgroundSize: 'cover'
       overflowY:'scroll'

    },
    heading:{
        fontSize:'2rem'
    },
    container:{
        width:'50%',
        display:'flex',
        alignItems:'flex-start',
        flexDirection:'column',
        flexWrap:'wrap',
        [Sizes.down("xl")] : {
            width:'65%'
        },
        [Sizes.down("xs")] : {
            width:'55%'
        }
        
    },
    nav: {
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        color:'white',
        alignItems:'center',
        "& a" :{
            color:'white',
            textDecoration:'none',
            fontSize:'1.2rem'
        }
    },
    palettes:{
        boxSizing:'border-box',
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:'2rem',
        [Sizes.down('md')] : {
            gridTemplateColumns:'repeat(2,50%)'
        },
        [Sizes.down('xs')] : {
            gridTemplateColumns:'repeat(1,100%)',
            gridGap:'1rem'
        }
    },
};