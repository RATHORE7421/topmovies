import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

 function App(props){
    return (
    <>
  <div className="eachBox">
    <div >
      <img src={props.imgSrc} alt={props.imgName}/>
      <div className="textMov">
        <div className = "ori"><p className='ori'>NETFLIX ORIGINAL SERIES</p></div>
        <div className = "main"><h3>{props.movie}</h3></div>
        <div className="button"><a href={props.link}>WATCH NOW</a></div>
      </div>
    </div>
  </div>
  </>
  );
  }

  export default App;