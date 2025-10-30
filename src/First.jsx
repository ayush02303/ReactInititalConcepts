import React from 'react'

const First = ( { users }) => {
  return (
    <div>
      {
        users.map( ( user)=>{
          return <div>
            <h4>{ user.name}</h4>
            <p>{ user.age}</p>
            <p>{ user.city}</p>
          </div>
        })
      }
      
    </div>
  )
}

export default First
