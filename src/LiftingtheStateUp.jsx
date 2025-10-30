import React, { useState } from 'react'

const LiftingtheStateUp = () => {

     const [ val , setVal ] = useState( 0 )
  return (
    <div>
     <h1>Hello! </h1>
     {/*  declaring the state up so that the child components can use the state variables  */}
     < InputComponent val = {val} setVal = { setVal} />
     < OutputComponent  val = { val} />

    </div>
  )
}

export default LiftingtheStateUp

const InputComponent = ( { val , setVal})=>{
    return(
        <>
        <button onClick={()=>{ setVal(val+1) }}>Click Me!</button>
        </>
    )


}
const OutputComponent = ( props)=>{ 
    return(
        <>
        <p>{ props.val}</p>
        </>
    )

}
