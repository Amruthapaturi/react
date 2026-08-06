import React, { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../ContextAPI/ThemeContext'

const Prevcount = () => {
  const {theme,toggleTheme}= useContext(ThemeContext)
    const[count , setCount]= useState(100)
   const prevCount = useRef([])
   const currentRef = useRef(null)

// currentRef.current++

   useEffect(()=>{
    currentRef.current++
    console.log("Running")
   })

   useEffect(()=>{
    prevCount.current.push(count)
   },[count])
   console.log(prevCount.current) 
  return (
    <div style={{backgroundColor:theme ==="light"?"white":"black" , color:theme==="light"?"black":"white"}}>
     <button onClick={toggleTheme}>Theme</button>
      <p>Count is {count}</p> 
      <p>Previous Count is </p>
      <div>
          {
          prevCount.current.map((value)=>{
            return(
                <>
                <p>{value}</p>
                </>
            )
          })
          }
      </div>


      
      <button onClick={()=>setCount((prev)=>prev+1)}>Inc</button> 
    </div>
  )
}

export default Prevcount
