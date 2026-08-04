import React, { useState } from 'react'

const UseState = () => {
    // const [count , setCount]= useState(0)
    const[showPassword , setShowPassword]=useState(false)
    const [password , setPassword] = useState("")
    const[showText ,setShowText]=useState(false)

    const handleclick =()=>{
        setShowText(prev =>!prev)
    }

  return (
    <div>

        <input type={showPassword?"text":"password"} name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>setShowPassword(prev =>!prev)}>{showPassword?"Hide":"Show"}</button> <br /> <br />
   
      {/* <p>Count: {count}</p>
      <button onClick={()=>setCount((prev)=>prev +1)}>Inc</button> */}
   <button onClick={handleclick}>{showText?"Hide Text":"Show Text"}</button>
   { showText && <img src='' alt='' widt/>}
    
    </div>
  )
}

export default UseState
