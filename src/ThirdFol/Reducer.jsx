import React, { useReducer } from 'react'

const Reducer = () => {

    const reducer = ( state , action )=>{
        if( action.type === "INCREMENT") return state+1
        if( action.type === "DECREMENT") return state-1
        if( action.type === "RESET") return state =0 

    }

    const [ count , dispatch ] = useReducer( reducer , 0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={ ()=> dispatch({type : "INCREMENT"})}>+</button>
       <button onClick={()=> dispatch({type : "DECREMENT"})}>-</button>
        <button onClick={()=> dispatch({type : "RESET"})}>Reset</button>
    </div>
  )
}

export default Reducer
