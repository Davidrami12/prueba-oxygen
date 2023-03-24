import React, { useEffect, useState } from 'react';

const Converter = () => {
  const [ value, setValue ] = useState('');
  const [ unit, setUnit ] = useState('km-miles');
  const [ isInverted, setIsInverted ] = useState(false);
  const [ history, setHistory ] = useState([]);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleInvertClick = () => {
    setIsInverted(!isInverted);
    setUnit(unit.split('-').reverse().join('-'));

    console.log("inverted")
  };

  const handleSaveClick = () => {
    if (!value) {
      return;
    }

    const newEntry = {
      value,
      unit,
      isInverted,
      result: convert(),
    };
    setHistory([...history, newEntry]);

    localStorage.setItem('units', JSON.stringify([...history, newEntry]));

    console.log("new element saved");
  };

  const handleDeleteUnit = (index) => {
    const newHistory = [...history];
    newHistory.splice(index, 1);
    setHistory(newHistory);

    localStorage.setItem('history', JSON.stringify(newHistory));

    console.log("element deleted");
  }

  const convert = () => {
    switch (unit) {
      case 'km-miles':
        return (value * 0.621371).toFixed(2);
      case 'miles-km':
        return (value / 0.621371).toFixed(2);
      case 'meters-feet':
        return (value * 3.28084).toFixed(2);
      case 'feet-meters':
        return (value / 3.28084).toFixed(2);
      case 'cm-inches':
        return (value * 0.393701).toFixed(2);
      case 'inches-cm':
        return (value / 0.393701).toFixed(2);
      default:
        return value;
    }
  };

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('units')) || [];
    setHistory(storedHistory);
  }, []);




  return (
    <div>
      <div className='convert-card'>
        <div className='card-content'>
          <p>convert</p>
          
          <select className='select-value' value={unit} onChange={handleUnitChange}>
            <option value="km-miles">km ➜ miles</option>
            <option value="miles-km">miles ➜ km</option>
            <option value="meters-feet">meters ➜ feet</option>
            <option value="feet-meters">feet ➜ meters</option>
            <option value="cm-inches">cm ➜ inches</option>
            <option value="inches-cm">inches ➜ cm</option>
          </select>

          <button className='buttons' onClick={handleInvertClick}> ⇆ </button>

          <input className='input-value' type="number" value={value} onChange={handleValueChange} />
          
          <div className='results'> {`${convert()} ${unit.split('-')[0]}`}</div>
          {/*<div className='results'>{`${value} ${unit.split('-')[0]} ➜ ${convert()} ${unit.split('-')[1]}`}</div>*/}

          <button className='save-button' onClick={handleSaveClick}> ♡ </button>
          
        </div>
      </div>

      
      <div className='saved'>
        <p className='saved-title'>saved</p>
        <div className='saved-card'>
          <ul>
            
            {history.map((entry, index) => (
              <li key={index}>{`${entry.value} ${entry.isInverted ? entry.unit.split('-')[1]
              : entry.unit.split('-')[1]} = ${entry.result} ${entry.isInverted ? entry.unit.split('-')[0] : entry.unit.split('-')[1]}`}
                <button className='delete-button' onClick={() => handleDeleteUnit(index)}> ✕ </button>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Converter;
