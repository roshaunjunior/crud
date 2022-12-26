import './App.css';
import { useState } from 'react';
import {Task} from './Task' ;

function App() {
  
  const [showText , setShowText] = useState(false) ;
  
  const textshow = () => {
    setShowText(!showText) ;
  }
  return (
    <div className="App">
     <button onClick={textshow}>{showText ? "Hide Text" : "Show Text" }</button>
     
     {showText && <Task/>}


    </div>  );
}

export default App;
