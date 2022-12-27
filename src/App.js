import './App.css';
import { useState } from 'react';
import  Axios  from 'axios';
function App() {
  
  const [name,setName] = useState('')
  
  const [age,setAge] = useState(null);
  // we put null in useState because we want to get the whole object to work with . 
  
  const agePrediction =() =>{
    
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => setAge(res.data))

  }
  return (
    <div className = 'App'>
     <input type="text"
            placeholder=' e.g Talha'
            onChange={(event) => setName(event.target.value)}
             />
             <button onClick={agePrediction}>Predict The Age</button>

      <h1>Name : {age?.name}</h1>     
      <h1>Predicted Age  : {age?.age}</h1>     
      <h1>Count of the Name : {age?.count}</h1>
     {/* why we use ? after the age object 
      Ans : Beacuse at first this object is null in useState Age is null so its try to access this object and breaks the program . so we put ? after age so its only try to access it if the age object is true  ,,,, not False or NO or NULL      
     */}
         
    </div>
  );
}
export default App;
