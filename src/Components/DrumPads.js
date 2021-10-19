import React, { useState } from 'react';
import * as arrs from '../Modules.js';
import './DrumPads.css';

export default (props) => {
  let audioSrcs = [];
  let des = [];

  if (props.onAndOffBank) {
    audioSrcs = [...arrs.srcsHeaterKit];
    des = [...arrs.desHeaterKit];
  } else {
    audioSrcs = [...arrs.srcsPianoKit];
    des = [...arrs.desPianoKit];
  }

  const [neonQ, setNeonQ] = useState('');
  const [neonW, setNeonW] = useState('');
  const [neonE, setNeonE] = useState('');
  const [neonA, setNeonA] = useState('');
  const [neonS, setNeonS] = useState('');
  const [neonD, setNeonD] = useState('');
  const [neonZ, setNeonZ] = useState('');
  const [neonX, setNeonX] = useState('');
  const [neonC, setNeonC] = useState('');

  const handleOnclick = (element, des) => {
    if (props.onAndOffPower) {
      element.muted = false;
    } else {
      element.muted = true;
    }
    element.volume = props.volumeRangeInput / 100;
    element.play();
    element.currentTime = 0;
    props.getDes(des);
  };

  const handleOnKeyDown = (event) => {
    switch (event.code) {
      case 'KeyQ':
        funcModule.Q();
        break;
      case 'KeyW':
        funcModule.W();
        break;
      case 'KeyE':
        funcModule.E();
        break;
      case 'KeyA':
        funcModule.A();
        break;
      case 'KeyS':
        funcModule.S();
        break;
      case 'KeyD':
        funcModule.D();
        break;
      case 'KeyZ':
        funcModule.Z();
        break;
      case 'KeyX':
        funcModule.X();
        break;
      case 'KeyC':
        funcModule.C();
        break;
      default:
        break;
    }
  };
  const funcModule = {
    Q: function () {
      let element = document.getElementById('Q');
      handleOnclick(element, des[0]);
      setNeonQ('neon-class');
      setTimeout(function () {
        setNeonQ('');
      }, 100);
    },
    W: function () {
      let element = document.getElementById('W');
      handleOnclick(element, des[1]);
      setNeonW('neon-class');
      setTimeout(function () {
        setNeonW('');
      }, 100);
    },
    E: function () {
      let element = document.getElementById('E');
      handleOnclick(element, des[2]);
      setNeonE('neon-class');
      setTimeout(function () {
        setNeonE('');
      }, 100);
    },
    A: function () {
      let element = document.getElementById('A');
      handleOnclick(element, des[3]);
      setNeonA('neon-class');
      setTimeout(function () {
        setNeonA('');
      }, 100);
    },
    S: function () {
      let element = document.getElementById('S');
      handleOnclick(element, des[4]);
      setNeonS('neon-class');
      setTimeout(function () {
        setNeonS('');
      }, 100);
    },
    D: function () {
      let element = document.getElementById('D');
      handleOnclick(element, des[5]);
      setNeonD('neon-class');
      setTimeout(function () {
        setNeonD('');
      }, 100);
    },
    Z: function () {
      let element = document.getElementById('Z');
      handleOnclick(element, des[6]);
      setNeonZ('neon-class');
      setTimeout(function () {
        setNeonZ('');
      }, 100);
    },
    X: function () {
      let element = document.getElementById('X');
      handleOnclick(element, des[7]);
      setNeonX('neon-class');
      setTimeout(function () {
        setNeonX('');
      }, 100);
    },
    C: function () {
      let element = document.getElementById('C');
      handleOnclick(element, des[8]);
      setNeonC('neon-class');
      setTimeout(function () {
        setNeonC('');
      }, 100);
    },
  };

  document.addEventListener('keydown', handleOnKeyDown);
  return (
    <div id="drum-pads-box">
      <div
        className={'drum-pad' + ' ' + neonQ}
        id="header-1"
        onClick={funcModule.Q}
      >
        Q<audio className="clip" id="Q" src={audioSrcs[0]}></audio>
      </div>
      <div
        className={'drum-pad' + ' ' + neonW}
        id="header-2"
        onClick={funcModule.W}
      >
        W<audio className="clip" id="W" src={audioSrcs[1]}></audio>
      </div>
      <div
        className={'drum-pad' + ' ' + neonE}
        id="header-3"
        onClick={funcModule.E}
      >
        E<audio className="clip" id="E" src={audioSrcs[2]}></audio>
      </div>
      <div
        className={'drum-pad' + ' ' + neonA}
        id="header-4"
        onClick={funcModule.A}
      >
        A<audio className="clip" id="A" src={audioSrcs[3]}></audio>
      </div>
      <div
        className={'drum-pad' + ' ' + neonS}
        id="clap"
        onClick={funcModule.S}
      >
        S<audio className="clip" id="S" src={audioSrcs[4]}></audio>
      </div>
      <div
        className={'drum-pad' + ' ' + neonD}
        id="open-hh"
        onClick={funcModule.D}
      >
        D<audio className="clip" id="D" src={audioSrcs[5]}></audio>
      </div>
      <div
        className={'drum-pad' + ' ' + neonZ}
        id="kink-n-hat"
        onClick={funcModule.Z}
      >
        Z<audio className="clip" id="Z" src={audioSrcs[6]}></audio>
      </div>
      <div
        className={'drum-pad' + ' ' + neonX}
        id="kick"
        onClick={funcModule.X}
      >
        X<audio className="clip" id="X" src={audioSrcs[7]}></audio>
      </div>
      <div
        className={'drum-pad' + ' ' + neonC}
        id="closed-hh"
        onClick={funcModule.C}
      >
        C<audio className="clip" id="C" src={audioSrcs[8]}></audio>
      </div>
    </div>
  );
};
