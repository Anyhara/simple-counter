

import './App.css'


const SecondsCounter = ({ seconds }) => {

    return (
    <div className="Timer">
        <div className="Clock"><i class="fa-regular fa-clock"></i></div>
        <div className="Digit">{Math.floor(seconds / 100000) % 10}</div>
        <div className="Digit">{Math.floor(seconds / 10000) % 10}</div>
        <div className="Digit">{Math.floor(seconds / 100) % 10}</div>
        <div className="Digit">{Math.floor(seconds / 100) % 10}</div>
        <div className="Digit">{Math.floor(seconds / 10) % 10}</div>
        <div className="Digit">{Math.floor(seconds / 1) % 10}</div>
    </div>
    )
};
  


export default SecondsCounter;