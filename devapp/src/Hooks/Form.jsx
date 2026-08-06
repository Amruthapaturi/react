import React, { useState } from 'react'
import { useContext } from 'react'
import { NameContext } from '../ContextAPI/LandContext'

const Form = () => {
  const {sname , greet} = useContext(NameContext)
  const[name ,setName]= useState("")
  const[email , setEmail] = useState("")
  const[password , setPassword] = useState("")

  const submitData=(e)=>{
    e.preventDefault()
    try {
        const data = {name , email,password}
        sessionStorage.setItem("data" , JSON.stringify(data))
        localStorage.setItem("data" , JSON.stringify(data))
        alert("Details Saved to Local Storage")
        setName("")
        setEmail("")
        setPassword("")
    } catch (error) {
        
    }

  }

  return (
    <div>
      <h2>This is Signup form</h2>
      <p>{sname}</p>
      <form action="" onSubmit={submitData}>

        <label htmlFor="">Name : </label>
      <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
      <label htmlFor="">Email : </label>
      <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />
      <label htmlFor="">Password : </label>
      <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
      <button type="submit">Submit</button> <br />
      </form>

        </div>
  )
}

export default Form
