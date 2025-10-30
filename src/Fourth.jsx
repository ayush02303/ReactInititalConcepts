import React, { useState } from 'react'

const UseStateChallenge = () => {

    const [ count , setCount ] = useState(0)
    const [ step , setStep ] = useState( 0)

    function handleIncrease(){
        setCount( count+ step)
    }
     function handleDecrease(){
        setCount( count- step)
    }


  return (
    <div>
        <h3>{count}</h3>
        <button type='button' onClick={ handleIncrease }>Increase</button>
        <button type='button' onClick={handleDecrease}>Decrease</button>
        <button type='button' onClick={()=> setCount(0)}>Reset</button>
        <br />
        <br />
        <br />

        <label htmlFor="getval">Enter the step value</label>
        <input type="number" id='getval' onChange={ (e)=> setStep(Number(e.target.value))}/>
      
    </div>
  )
}

export default UseStateChallenge
