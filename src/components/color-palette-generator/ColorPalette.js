import React from 'react'
import '../../styles/color-palette.css'
import ColorGenerator from './ColorGenerator';

const ColorPalette = () => {
    return(
      <div className='palette-body'>

        <div className='palette-content'>

          <header className='palette-header'>
            <h1 className='palette-title'>🎨 Color palette generator</h1>
          </header>

          <div className='container'>
            <ColorGenerator/>     
          </div>
          
        </div>
      </div>
    )
  };
  
export default ColorPalette;