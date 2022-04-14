import { useState } from "react";
import "./App.css"

let currentTime = null;

export default function App() {

  const [timer, setTimer] = useState(0);
  const [textButton, setTextButton] = useState('VAI');

  const startTimer = () => {

    if (currentTime == null){
  
      currentTime = setInterval(() => {

        setTimer(time => time + 0.1)

      }, 100);

      setTextButton('PAUSAR');

    }else{

      clearInterval(currentTime)

      setTextButton('VAI');

      currentTime = null

    }
  };

  const resetTimer = () => {

    clearInterval(currentTime)

    setTimer(0)

    currentTime = null

    setTextButton('VAI');
  }

  return (
    <div className="container">
      <img src={require('./assets/cronometro.png')} alt="" className='img'/>
      
      <p>{timer.toFixed(1)}</p>
      <div>
        <button onClick={startTimer}>{textButton}</button>
        <button onClick={resetTimer}>LIMPAR</button>
      </div>
      <h1>CRONÔMETRO</h1>
    </div>
  );
}


