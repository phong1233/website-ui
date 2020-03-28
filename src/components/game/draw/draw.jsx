import React from 'react';
import { useState, useRef } from 'react';
import styles from './draw.module.css';
import InfoBar from './infoBar';
import Chat from './chat';

function Draw() {
  const canvas = useRef(undefined);
  const [color, setColor] = useState('black');
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [enableDraw, setEnableDraw] = useState(false);
  const width = 500;
  const height = 380;

  const clearCanvas = () => {
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    console.log('canvas cleared');
  }

  const draw = (e) => {
    if (enableDraw) { 
      let offset = canvas.current.getBoundingClientRect()
      let currX = (e.clientX - offset.left)
      let currY = (e.clientY - offset.top)    
      const ctx = canvas.current.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(currX, currY);
      ctx.strokeStyle = color;
      ctx.lineWidth = color === 'grey' ? 20 : 2;
      ctx.stroke();
      ctx.closePath();
      setPrevX(currX);
      setPrevY(currY);
    }
  }


  const enableDrawing = (e) => {
    let offset = canvas.current.getBoundingClientRect();
    setPrevX(Math.floor(e.clientX - offset.left));
    setPrevY(Math.floor(e.clientY - offset.top));
    setEnableDraw(true); 
  }


  return(
    <div className={styles.drawbox}>
      <div className={styles.colorbox}>
        <div className={color === 'black' ? styles.colorSelected : styles.color} style={{backgroundColor: 'black'}} onClick={() => setColor('black')}/>
        <div className={color === 'brown' ? styles.colorSelected : styles.color} style={{backgroundColor: 'brown'}} onClick={() => setColor('brown')}/>
        <div className={color === 'red' ? styles.colorSelected : styles.color} style={{backgroundColor: 'red'}} onClick={() => setColor('red')}/>
        <div className={color === 'orange' ? styles.colorSelected : styles.color} style={{backgroundColor: 'orange'}} onClick={() => setColor('orange')}/>
        <div className={color === 'yellow' ? styles.colorSelected : styles.color} style={{backgroundColor: 'yellow'}} onClick={() => setColor('yellow')}/>
        <div className={color === 'green' ? styles.colorSelected : styles.color} style={{backgroundColor: 'green'}} onClick={() => setColor('green')}/>
        <div className={color === 'blue' ? styles.colorSelected : styles.color} style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}/>
        <div className={color === 'purple' ? styles.colorSelected : styles.color} style={{backgroundColor: 'purple'}} onClick={() => setColor('purple')}/>
        <img className={color === 'grey' ? styles.colorSelected : styles.color} src='images/game/draw/eraser.png' alt='eraser' onClick={() => setColor('grey')}/>
        <img className={color === 'trash' ? styles.colorSelected : styles.color} src='images/game/draw/bin.png' alt='trash' onClick={clearCanvas}/>
      </div>
      <canvas className={styles.drawing} ref={canvas} width={width} height={height}
        onMouseDown={enableDrawing}
        onMouseMove={draw}
        onMouseUp={() => setEnableDraw(false)}
      />
      <div className={styles.chatbox} style={{height:height}}>
        <InfoBar time={10} playerNum={5} username={'Bobby'}/>
        <Chat messages={mockChat} submit={(m) => {console.log(m)}}/>
      </div>
    </div>
  );

}

export default Draw;


const mockChat = [
  {
    user: 'UserNam',
    message: 'hello world'
  },
  {
    user: 'Bob',
    message: 'hello world'
  },
  {
    user: 'Billy',
    message: 'hello world'
  },
  {
    user: 'Ben',
    message: 'hello world'
  },  {
    user: 'UserNam',
    message: 'hello world'
  },
  {
    user: 'Bob',
    message: 'hello world'
  },
  {
    user: 'Billy',
    message: 'hello world'
  },
  {
    user: 'Ben',
    message: 'hello world'
  },  {
    user: 'UserNam',
    message: 'hello world'
  },
  {
    user: 'Bob',
    message: 'hello world'
  },
  {
    user: 'Billy',
    message: 'hello world'
  },
  {
    user: 'Ben',
    message: 'hello world'
  },  {
    user: 'UserNam',
    message: 'hello world'
  },
  {
    user: 'Bob',
    message: 'hello world'
  },
  {
    user: 'Billy',
    message: 'hello world'
  },
  {
    user: 'Ben',
    message: 'hello world'
  }
]