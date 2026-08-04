import React, { useState } from 'react'

const UseState1 = () => {
    const[text , setText]=useState("")
    const[dark , setDark]=useState(false)

  return (
    <div style={{backgroundColor:dark?"black":"white" , color:dark?"white":"black"}}>
      <input type="text" name="" id="" value={text} onChange={(e)=>setText(e.target.value)} />
      cvhbjkl;kj
      <button onClick={()=>setDark(!dark)}>{dark?"Light":"Dark"}</button>
      <p>{text}</p>
      <p>{text.length}</p>
    </div>
  )
}

export default UseState1
