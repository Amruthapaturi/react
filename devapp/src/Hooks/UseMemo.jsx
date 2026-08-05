import React, { useState , useMemo } from 'react'

const UseMemo = () => {
const [count ,setCount] = useState(0)
const [search , setSearch]= useState("")

// without Memo
// const doubleCount = ()=>{
//     console.log("Count Double..")
//     return count *2
// }
// doubleCount()

//with Memo 
const doubleCount = useMemo(()=>{
    console.log("Count double..")
    return count*2
},[count])

  return (
    <div>
      this is memo example <br />
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>

<p>Count is {count}</p>
<p>Double count is {doubleCount}</p>
<button onClick={()=>setCount(prev=>prev+1)}>Inc</button>

    </div>
  )
}

export default UseMemo
