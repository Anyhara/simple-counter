
import ReactDOM from 'react-dom/client';
import SecondsCounter from './SecondsCounter.jsx';


let seconds = 0;

function renderPersonalizado () {
  ReactDOM.createRoot(document.getElementById('root')).render( <SecondsCounter seconds={seconds}/>);
  seconds++;
}

setInterval(renderPersonalizado, 1000);
