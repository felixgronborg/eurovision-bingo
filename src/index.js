import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div class="button-container" id="board">
      <button class="button" id="1:1">1:1</button>
      <button class="button" id="1:2">1:2</button>
      <button class="button" id="1:3">1:3</button>
      <button class="button" id="1:4">1:4</button>
      <button class="button" id="1:5">1:5</button>
      <button class="button" id="2:1">2:1</button>
      <button class="button" id="1:1">2:2</button>
      <button class="button" id="1:1">2:3</button>
      <button class="button" id="1:1">2:4</button>
      <button class="button" id="1:1">2:5</button>
      <button class="button" id="1:1">3:1</button>
      <button class="button" id="1:1">3:2</button>
      <button class="button" id="1:1">3:3</button>
      <button class="button" id="1:1">3:4</button>
      <button class="button" id="1:1">3:5</button>
      <button class="button" id="1:1">4:1</button>
      <button class="button" id="1:1">4:2</button>
      <button class="button" id="1:1">4:3</button>
      <button class="button" id="1:1">4:4</button>
      <button class="button" id="1:1">4:5</button>
      <button class="button" id="1:1">5:1</button>
      <button class="button" id="1:1">5:2</button>
      <button class="button" id="1:1">5:3</button>
      <button class="button" id="1:1">5:4</button>
      <button class="button" id="1:1">5:5</button>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
