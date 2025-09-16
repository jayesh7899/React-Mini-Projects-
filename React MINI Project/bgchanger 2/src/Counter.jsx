import React, { useState } from 'react'

function Counter() {

    const [count, setCount]=useState(0);

    function Increment(){
        setCount(count+1)
    }

    function Decrement(){
        setCount(count-1)
    }

  return (
    <div>
        <br /><br />

        <h1 className='text-center'>Count : {count}</h1><br /><br />

        <div className='flex flex-wrap justify-center gap-3 '>

            

            <button onClick={Increment} style={{backgroundColor:"green"}}
            className='cursor-pointer px-4 py-1 text-white rounded-xl'>Increment</button><br /><br />

        <button onClick={Decrement} style={{backgroundColor:"green"}}
        className='cursor-pointer px-4 py-1 text-white rounded-xl'>Decrement</button>
        


        </div>
        <br /><br />


        
      
    </div>
  )
}

export default Counter
