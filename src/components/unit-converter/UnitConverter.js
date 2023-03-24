import React from 'react'
import '../../styles/unit-converter.css';
import Converter from './Converter'

const UnitConverter = () => {
  return (
    <div className='converter-body'>
      
      <div className='converter-content'>

        <header className='header'>
          <h1 className='title'>⇆ unit converter</h1>
        </header>

        <div className='container'>
          <Converter />
        </div>
        
        <p className='saved-title-card'>saved</p>
    
        <footer>
          <p className='terms'>Terms of service</p>
          <p className='privacy'>Privacy policy</p>
        </footer>

      </div>
    </div>
  )
}


export default UnitConverter