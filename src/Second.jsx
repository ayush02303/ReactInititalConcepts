import React from 'react'
import "./Second.css"

const Second = ({ users }) => {
    const handleButtonClick = ()=>{ 
        console.log("I got clicked!")
    }
    const age = 7

    function handleAgain( name){
        console.log( `Hey there ${ name }`)

    }
  return (
    <div>
        <h1 className='game'>Hello</h1>
        <h2 className= { age > 10 ? "game" : "work"} >Hello There !</h2>
        <h3 style={ { color : "red" , backgroundColor : "aqua" }}>Hello</h3>
      {users.map(({ id, name, age, city }) => (
        <li key={id}>
          {name} — {age} — {city}
        </li>
      ))}

      <button onClick={ handleButtonClick}> Click Me! </button>
      {/*  passing a function inline in react */}
      <button onClick={ ()=> console.log(" getting clicked , second time!")}>Click Again</button>
      <button onClick={ ()=>{ handleAgain("Ayush")}}>Again!</button>
     
    </div>
  )
}

export default Second
