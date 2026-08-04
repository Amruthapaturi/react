import React, { useEffect, useState } from 'react'

const UseState = () => {
    const [count , setCount]= useState(0)
    const[showPassword , setShowPassword]=useState(false)
    const [password , setPassword] = useState("")
    const[showText ,setShowText]=useState(false)
    const[type , setType]=useState("Even")

    const handleclick =()=>{
        setShowText(prev =>!prev)
    }

    useEffect(()=>{
      if(count%2 === 0){
        setType("Even")
      }else{
        setType("Odd")
      }
    },[count])

  return (
    <div>
<p>Count: {count}</p>
      <button onClick={()=>setCount((prev)=>prev +1)}>Inc</button>
      <p>Type is : {type}</p>
        <input type={showPassword?"text":"password"} name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>setShowPassword(prev =>!prev)}>{showPassword?"Hide":"Show"}</button> <br /> <br />
   
      
   <button onClick={handleclick}>{showText?"Hide Text":"Show Text"}</button>
   { showText && <img src='' alt='' widt/>}
    
    </div>
  )
}

export default UseState
