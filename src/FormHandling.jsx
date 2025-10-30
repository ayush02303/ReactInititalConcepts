import React, { useState } from 'react'

const FormHandling = () => {

    const [ firstname , setFirstName] = useState("")
    const [ lastname , setLastName] = useState("")

    const handleFormChange = (e)=>{
        e.preventDefault(); 
        // for sending data to the back end 
        const data = { firstname, lastname}
        console.log(data)


    }
  return (
    <div>
        <form action="" onSubmit={ handleFormChange}>
            <label htmlFor="one" >First Name</label>
            <input type="text" id='one'  value={ firstname} onChange={ (e)=>setFirstName(e.target.value)  }/>

             <label htmlFor= "two" >Last Name</label>
            <input type="text" id='two'  value={ lastname} onChange={(e)=> setLastName(e.target.value)}/>

            <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}

export default FormHandling
