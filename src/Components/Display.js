import React, { useState } from 'react';
import './Display.css';

export default (props) => {
  const [onAndOff, setOnAndOff] = useState(true);
  const [onAndOffPower, setOnAndOffPower] = useState(true);
  const switchButton = (event) => {
    if (onAndOffPower === false) {
      event.preventDefault();
      setOnAndOff(!onAndOff);
      props.getBankValue(onAndOff);
    }
  };

  const switchPowerBtn = (event) => {
    event.preventDefault();
    setOnAndOffPower(!onAndOffPower);
    props.getPowerValue(onAndOffPower);
  };

  const handleRangeInput = (event) => {
    event.preventDefault();
    props.getInputVolume(event.target.value);
  };

  return (
    <div id="display">
      <div>
        <p>Power</p>
        {onAndOffPower === true && (
          <div className="power-button" onClick={switchPowerBtn}>
            <span className="power-btn-switch-white"></span>
            <span className="power-btn-switch-void"></span>
          </div>
        )}
        {onAndOffPower === false && (
          <div className="power-button" onClick={switchPowerBtn}>
            <span className="power-btn-switch-void"></span>
            <span className="power-btn-switch-white"></span>
          </div>
        )}
      </div>
      <div id="description">{onAndOffPower === false && props.description}</div>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        onChange={handleRangeInput}
      ></input>
      <div>
        <p>Bank</p>
        {onAndOff === true && (
          <div className="bank-button" onClick={switchButton}>
            <span className="bank-btn-switch-white"></span>
            <span className="bank-btn-switch-void"></span>
          </div>
        )}
        {onAndOff === false && (
          <div className="bank-button" onClick={switchButton}>
            <span className="bank-btn-switch-void"></span>
            <span className="bank-btn-switch-white"></span>
          </div>
        )}
      </div>
    </div>
  );
};
