import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const number = {
  display: "flex",
  margin: "6vw auto 0 25vw",
}

const numberLast = {
  margin: "0 0 0 2vw",
}

const numberP = {
  width: "5.5vw",
}

ReactDOM.render(
  <div style={number}>
  <p style={numberP}>1</p>
  <p style={numberP}>2</p>
  <p style={numberP}>3</p>
  <p style={numberP}>4</p>
  <p style={numberP}>5</p>
  <p style={numberP}>6</p>
  <p style={numberP}>7</p>
  <p style={numberP}>8</p>
  <p style={numberP}>9</p>
  <p style={numberP}>10</p>
  <p style={numberP}>11</p>
  <p style={numberLast}>終わり方</p>
  </div>,
  document.getElementById('numbers')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
