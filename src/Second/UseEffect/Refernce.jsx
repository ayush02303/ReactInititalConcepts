import React, { useRef } from 'react'

const Refernce = () => {

        const username = useRef(null)
        const lastname = useRef(null)

    const handleSubmit = (e)=>{ 
        e.preventDefault() 
        // const username = document.getElementById('one')
        // const lastname = document.getElementById('two')

       

        console.log( username.current.value, lastname.current.value )

    }

    
  return (
    <div>
      <form action="" onSubmit={ handleSubmit}>
        <input type="text"  id='one' ref={ username}/>
        <input type="text"  id='two' ref={ lastname}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Refernce
