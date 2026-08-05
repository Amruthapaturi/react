import React, { useEffect, useRef, useState } from 'react'

const Prevcount = () => {
    const[count , setCount]= useState(100)
   const prevCount = useRef()
   const currentRef = useRef(null)

// currentRef.current++

   useEffect(()=>{
    currentRef.current++
    console.log("Running")
   })

   useEffect(()=>{
    prevCount.current = count
   },[count])
   console.log(prevCount.current)

   
  return (
    <div>
      <p>Count is {count}</p> 101
      <p>Previous Count is {prevCount.current}</p>
      <button onClick={()=>setCount((prev)=>prev+1)}>Inc</button> 
    </div>
  )
}

export default Prevcount
