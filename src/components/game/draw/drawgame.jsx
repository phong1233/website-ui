import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from './draw.module.css';
import InfoBar from './infoBar';
import Chat from './chat';
import io from 'socket.io-client';
const API = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;
const socket = io(API+'/draw', {transports: ['websocket']});

function DrawGame(props) {
  const canvas = useRef(undefined);
  const [playCount, setPlayerCount] = useState(0);
  const [color, setColor] = useState('black');
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [enableDraw, setEnableDraw] = useState(false);
  const [message, setMessage] = useState([]);
  const width = 500;
  const height = 380;

  useEffect(() => {
    socket.on('disconnect', (data)=> {
      setPlayerCount(data.playerCount);
    })
    socket.emit('send_connect', props.username);
    socket.on('message_data', (data)=>{
      setMessage(message => [...message, 
        {
          'user': data.user,
          'message': data.message
        }
      ]);
      setPlayerCount(data.playerCount);
    })
    socket.on('message_draw', (data)=>{
      const ctx = canvas.current.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(data.prevX, data.prevY);
      ctx.lineTo(data.currX, data.currY);
      ctx.strokeStyle = data.color;
      ctx.lineWidth = data.color === 'grey' ? 20 : 2;
      ctx.stroke();
      ctx.closePath();
    })
  }, [props.username])

  const submit = (m) => {
    let temp = {user: props.username, message: m}
    socket.emit('message_data', temp);
  }
  
  const clearCanvas = () => {
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
  }

  const draw = (e) => {
    if (enableDraw) { 
      let offset = canvas.current.getBoundingClientRect()
      let currX = (e.clientX - offset.left)
      let currY = (e.clientY - offset.top) 
      let temp = {
        'currX': currX,
        'currY': currY,
        'prevX': prevX,
        'prevY': prevY,
        'color': color,
      }
      socket.emit('message_draw', temp);
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
        <InfoBar time={120} playerNum={playCount} username={props.username} />
        <Chat messages={message} submit={(m) => {submit(m)}}/>
      </div>
    </div>
  );

}

export default DrawGame;