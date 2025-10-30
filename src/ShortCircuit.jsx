import React, { useState } from 'react'

const ShortCircuit = () => {
   const [ isLoggedIn , setIsLoggedIn] = useState(true)
   const  age = 12
  return (
    <div>
        <h4>{ isLoggedIn && "Yes you are"}</h4>
        <button type='button' onClick={()=>{ setIsLoggedIn(!isLoggedIn)}}>Click to switch</button>
        { age> 50 ? <p>Valid</p>  : <p>Not Valid</p>}
        { age>10 && <h1>Hello</h1>}
      
    </div>
  )
}

export default ShortCircuit
