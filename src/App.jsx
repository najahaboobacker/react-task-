import React from 'react'
import { useState } from 'react'

const App = () => {
   
  const [count,setCount] = useState(0);
  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)

  return (
    <div style = {{display : 'inline-block',justifyContent : 'center'}}>
       <button onClick={increment}>+</button>
       <div style = {{border : '1px solid #ccc',backgroundColor : (count%2==0)? '#ff0000':'#2200ff'}}>count : {count}</div>
       <button onClick={decrement}>-</button>

    </div>
  );
}

export default App;
