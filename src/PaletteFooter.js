import React, { Component } from 'react';

function PaletteFooter(props){
    const {paletteName, emoji} = props;//ei ole this. props kuna functional component, class-ga oleks this.props
return(
    <footer className="Palette-footer">
                    {paletteName}
                    <span className='emoji'>
                    {emoji} 
                    {/* lipu emojid ei tööta windowsis */}
                    </span>
                </footer>
)
}

export default PaletteFooter;