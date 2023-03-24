import React, { useEffect, useState } from "react";
import { CompactPicker } from "react-color";

function ColorGenerator() {
  const [ colors, setColors ] = useState(["", "", "", "", ""]);
  const [ selectedCircle, setSelectedCircle ] = useState(null);
  const [ savedPalettes, setSavedPalettes ] = useState([]);
  const [ paletteName, setPaletteName ] = useState("");

  useEffect(() => {
    const storedPalettes = localStorage.getItem("savedPalettes");
    if (storedPalettes) {
      setSavedPalettes(JSON.parse(storedPalettes));
    }
  }, []);


  const circles = document.querySelectorAll('.circle');

  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      circles.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
    });
  });

  function handleColorChange(color) {
    const newColors = [...colors];
    newColors[selectedCircle] = color.hex;
    setColors(newColors);
  }

  function showColorsSelected() {
    const colorElements = colors.map((color, index) => (
      <div className="saved-colors">
        <div className="saved-circle" key={index} style={{backgroundColor: color}}>
        </div>
      </div>
    ));

    const newPalette = { name: paletteName, colors: colorElements };
    const newPalettes = [...savedPalettes, newPalette];
    
    setSavedPalettes([...savedPalettes, newPalette]);
    setPaletteName("");
    setColors(["", "", "", "", ""]);
    setSelectedCircle(null);

    localStorage.setItem("savedPalettes", JSON.stringify(newPalettes));

  }

  const removePalette = (index) => {
    const newPalettes = [...savedPalettes];
    newPalettes.splice(index, 1);
    setSavedPalettes(newPalettes);
  }

  


  return (
    <div>
      <div className="circles">
        {colors.map((color, index) => (
          <div
            className={`circle ${selectedCircle === index ? 'active' : ''}`}
            key={index}
            style={{backgroundColor: color}}
            onClick={() => setSelectedCircle(index)}
          ></div>
        ))}
      </div>
      

      <CompactPicker onChange={handleColorChange} className='compact-picker'/>
      
      

      <div>
        <input type="text" className="palette-input-name" value={paletteName} onChange={(e) => setPaletteName(e.target.value)} placeholder="Website color scheme" />
        <button className="saved-button" onClick={showColorsSelected}> ➕ </button>
      </div>

      <p className="saved-title">Saved palletes</p>
      <div className="prueba1">
          <div className="prueba2"></div>
          <div className="prueba2"></div>
          <div className="prueba2"></div>
      </div>
      <div className="saved-palettes">
      
        {savedPalettes.map((palette, index) => (
          <div className="saved-palette" key={index}>
            <div className="palette-name">{palette.name}</div>
            {palette.colors}
          </div>
        ))}
        {savedPalettes.length > 0 && <button className="delete-palette" onClick={() => removePalette()}> 🗑️ </button>}
      </div>

      
    </div>
  );
}

export default ColorGenerator;