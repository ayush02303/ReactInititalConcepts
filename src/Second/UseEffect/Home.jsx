import React, { use } from 'react'
import { ConOne } from './ContextApplication'


 
const Home = () => {

  const { name ,age }= useCustom()
  return (
    <div>
      <h1>{name} - { age}</h1>
    </div>
  )
}
// creating custom hooks 
const useCustom = ()=>{
  const data = use(ConOne)
  return data
}

export default Home
