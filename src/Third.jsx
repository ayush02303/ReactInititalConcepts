import React, { useState } from 'react'

const Third = () => {
    const [ user , setUser] = useState([
  { id: 1, name: "Ayush Badola", age: 22, city: "Dehradun" },
  { id: 2, name: "Riya Sharma", age: 24, city: "Delhi" },
  { id: 3, name: "Aman Verma", age: 21, city: "Pune" },
  { id: 4, name: "N Singh", age: 23, city: "Mumbai" },
  { id: 5, name: "Karan Patel", age: 25, city: "Bangalore" }
]
)
  return (
    <div>
        <ul>
            {
                user.map( ( user ) =>{
                    return <li key={ user.id}>
                        {  user.name} - { user.id} - { user.city}
                    </li>
                 })
            }
        </ul>
      
    </div>
  )
}

export default Third
