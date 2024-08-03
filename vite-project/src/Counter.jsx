import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
  
    function AddCount (){
      setCount(count + 1);
    }
    return (
    <>
    <h4>{count}</h4>
       <button 
       onClick={AddCount}>Increase</button>
    </>  );
  }

export default Counter