import './App.css';
import { useState } from 'react';
import Axios from 'axios' ;
function App() {
  const [showExcuse,setShowExcuse] = useState('') ;

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(res=>setShowExcuse(res.data[0].excuse))
  }
    
  

  return (
    <div className="App">
      <h1>Excuse genrator</h1>   
      <button onClick={()=> fetchExcuse('party')}>Party</button>
      <button onClick={()=> fetchExcuse('family')}>Family</button>
      <button onClick={()=> fetchExcuse('office')}>Office</button>
          <p>{showExcuse}</p> 
    </div>
  );
}

export default App;
