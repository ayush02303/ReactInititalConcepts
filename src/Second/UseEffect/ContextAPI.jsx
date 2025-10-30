// import React, { createContext } from 'react'

import { createContext } from "react";

//  export  const BioContext =  createContext()

//  export const ContextAPI = ( {children }) => {
//     const myName = "ayush"
//     const age = 20
 
//   return (
//    <BioContext.Provider value={{myName,age}}>
//     {children }
//    </BioContext.Provider>
//   )
// }

// export default ContextAPI

 export const BioContext = createContext()

 import React from 'react'
 
 export const ContextAPI = ( {children }) => {
    let name = "ayush"
    let age = 12
   return (
     <BioContext.Provider value={{ name ,age}}>
        {children }
     </BioContext.Provider>
   )
 }
 
 export default ContextAPI
 
