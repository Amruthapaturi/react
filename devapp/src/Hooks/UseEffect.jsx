import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ToastContainer , toast} from 'react-toastify'

const UseEffect = () => {
const [data,setData]= useState([])
const [search ,setSearch]= useState("")



// useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then((data1)=>
//     setData(data1))
// },[])

const fetchData =async()=>{
try {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users')
  setData(users.data)
} catch (error) {
  console.log(error)
}
}

useEffect(()=>{
  fetchData()
},[])
 
// const filterdUsers = data.filter((user)=>{
// user.toLowerCase()
// })

  return (
    <div>

        <input type="text" name="" id="" 
        placeholder='Search users' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
      {
        data.map((user)=>{
         return(
            <>
            <p>{user.name} - {user.email} - {user.address.city}</p>
            </>
         )
        })
      }

      <button onClick={()=>toast.warn("Clicked Sucessfully")}>Sucess</button>
    <ToastContainer/>
    </div>
  )
}

export default UseEffect
