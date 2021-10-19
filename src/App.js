import React, { useState } from 'react';
import Display from './Components/Display';
import DrumPads from './Components/DrumPads';
import './App.css';

export default () => {
  const [des, setDes] = useState('');
  const [bankBtnValue, setBankBtnValue] = useState();
  const [powerBtnValue, setPowerBtnValue] = useState();
  const [volume, setVolume] = useState(50);

  const handleGetDes = (data) => {
    setDes(data);
  };
  const handleGetBankValue = (data) => {
    setBankBtnValue(data);
  };

  const handleGetPowerValue = (data) => {
    setPowerBtnValue(data);
  };

  const handleGetVolume = (data) => {
    setVolume(data);
  };
  return (
    <div id="main">
      <div id="drum-machine">
        <DrumPads
          getDes={handleGetDes}
          onAndOffBank={bankBtnValue}
          onAndOffPower={powerBtnValue}
          volumeRangeInput={volume}
        />
        <Display
          description={des}
          getBankValue={handleGetBankValue}
          getPowerValue={handleGetPowerValue}
          getInputVolume={handleGetVolume}
        />
      </div>
    </div>
  );
};
