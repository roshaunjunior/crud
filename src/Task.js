import {useState , useEffect} from 'react' ;

export const Task = () => {

    const [text , setText] = useState('') ;
    const handleChange = (event) => {
      setText(event.target.value) 
    }

    useEffect(() => {
        console.log('Component Mounted') ; 
        return () => {
            console.log('Component unmounted') ;
        }
    },[])
    return <div>
        <input onChange={handleChange}/> 
        
        {text} 
    </div> 
} 