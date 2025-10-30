import React from 'react'

const PropDrill = () => {
  return (
    <div>
        <ChildComponent value = "HELLO"/>
      
    </div>
  )
}

const ChildComponent = ( props )=>{
    return (<>
        <GrandChild value = { props.value}/>
    </>)
}

const GrandChild = ( {value})=>{
    return (
        <>
        <h1>{value}</h1>
        </>
    )
}

export default PropDrill
