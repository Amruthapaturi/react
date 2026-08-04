import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [data,setData]= useState([])
const [search ,setSearch]= useState("")



useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then((data1)=>
    setData(data1))
},[])
 
const filterdUsers = data.filter((user)=>{
user.toLowerCase()
})

  return (
    <div>

        <input type="text" name="" id="" 
        placeholder='Search users' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
      {
        filterdUsers.map((user)=>{
         return(
            <>
            <p>{user.name} - {user.email} - {user.address.city}</p>
            </>
         )
        })
      }
    </div>
  )
}

export default UseEffect
