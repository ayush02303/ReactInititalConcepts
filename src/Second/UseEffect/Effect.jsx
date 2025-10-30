import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [ val , setVal ] = useState(0)

    useEffect( ()=>{ console.log("Hello useEffect")
        console.log( `Count value is ${val}`)
    } , [ val])
  return (
    <div>
        <h1>Hii</h1>
        <button onClick={()=>{ setVal( val+1)}}>Just Click</button>
      
    </div>
  )
}

export default Effect
