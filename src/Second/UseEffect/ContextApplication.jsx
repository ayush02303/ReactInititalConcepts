import React, { createContext } from 'react'

   export const ConOne = createContext()

export const ContextApplication = ({ children }) => {

    let name = "sam"
    let age = 122 

  
  return (
   <ConOne.Provider value = { { name ,age}} >
    {children}
   </ConOne.Provider>
  )
}

export default ContextApplication
