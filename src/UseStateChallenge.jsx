import React, { useState } from 'react'

const UseStateChallenge = () => {

    const [ count , setCount ] = useState(0)

    function handleIncrease(){
        setCount( count+1)
    }
     function handleDecrease(){
        setCount( count-1)
    }


  return (
    <div>
        <h3>{count}</h3>
        <button type='button' onClick={ handleIncrease }>Increase</button>
        <button type='button' onClick={handleDecrease}>Decrease</button>
        <button type='button' onClick={()=> setCount(0)}>Reset</button>
      
    </div>
  )
}

export default UseStateChallenge
