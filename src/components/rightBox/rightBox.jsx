import React from 'react'
import './rightBox.css';

function rightBox({ setX, setY, X, Y, setColor, setShow, color }) {

  const onclickFunction = (color) => {
    setColor(color);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }

  const consoleOut = () => {
    console.log("coordinates and Color:", X, Y, color);
  }

  return (
    <div>
      <span className='head'>
        Distance for Circle
      </span>
      <br />
      <span className='input'>
        <input value={X === 0 ? '' : X} type='number' placeholder='x' className='input1' onChange={(e) => setX(e.target.value)} max="950" min="0" />
        <input value={Y === 0 ? '' : Y} type='number' placeholder='y' className='input2' onChange={(e) => setY(e.target.value)} max="350" min="0" />
      </span>

      <span className='selection'>
        Material Selection
      </span>
      <br />
      <br />
      <br />
      <br />
      <span>
        <button className='first' onClick={() => onclickFunction("red")}>
          Red
        </button>
      </span>

      <span>
        <button className='second' onClick={() => onclickFunction("blue")}>
          Blue
        </button>
      </span>

      <span>
        <button className='third' onClick={() => onclickFunction("orange")}>
          Orange
        </button>
      </span>

      <span>
        <button className='fourth' onClick={() => onclickFunction("black")}>
          Black
        </button>
      </span>

      <span>
        <button className='fifth' onClick={() => onclickFunction("green")}>
          Green
        </button>
      </span>

      <br />
      <br />
      <br />
      <br />

      <span>
        <button className='submit' onClick={() => consoleOut()}>
          SUBMIT
        </button>
      </span>

    </div>
  )
}

export default rightBox