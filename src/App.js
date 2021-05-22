
import './App.css';

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function App() {
  var entries = ['1:1','1:2','1:3','1:4','1:5','2:1','2:2','2:3','2:4','2:5','3:1','3:2','3:3','3:4','3:5','4:1','4:2','4:3','4:4','4:5','5:1','5:2','5:3','5:4','5:5'];
  shuffle(entries);

  
  return (
    <body class="button-container">
      <button >{entries[0]}</button>
      <button >{entries[1]}</button>
      <button >{entries[2]}</button>
      <button >{entries[3]}</button>
      <button >{entries[4]}</button>
      <button >{entries[5]}</button>
      <button >{entries[6]}</button>
      <button >{entries[7]}</button>
      <button >{entries[8]}</button>
      <button >{entries[9]}</button>
      <button >{entries[10]}</button>
      <button >{entries[11]}</button>
      <button >{entries[12]}</button>
      <button >{entries[13]}</button>
      <button >{entries[14]}</button>
      <button >{entries[15]}</button>
      <button >{entries[16]}</button>
      <button >{entries[17]}</button>
      <button >{entries[18]}</button>
      <button >{entries[19]}</button>
      <button >{entries[20]}</button>
      <button >{entries[21]}</button>
      <button >{entries[22]}</button>
      <button >{entries[23]}</button>
      <button >{entries[24]}</button>
    </body>
  );
}
export default App;
