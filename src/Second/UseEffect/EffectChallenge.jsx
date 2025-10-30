import React, { useEffect, useState } from 'react'

const EffectChallenge = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

//   useEffect( ()=>{
//         document.title = `Count : ${count}`

//         // const ide = setInterval( ()=> console.log("Hello"), 1000)
//         // return ()=> clearInterval(ide)
//   }, [ count ])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>

      <hr />

      <label>Enter your name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => alert(`Hello, ${name || "Guest"}!`)}>Greet</button>
    </div>
  )
}

export default EffectChallenge
