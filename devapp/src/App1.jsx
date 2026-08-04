import React from 'react'
import App2 from './App2'

const App1 = ({add}) => {
    const name="Raju"
    const lastname = "Ram"

    const details ={
        name:"Raju",
        age:30,
        profession:"Engineer"
    }

    const students =["Kavya" ,"Ramya" , "sudha" , "hjdkjds"]
  return (
    <div>
      <h1>Hello this is App1</h1>
      <button onClick={add}>Add to cart</button>
      {/* <App2 name1={name} students={students} bharath={lastname} object={details} /> */}
    </div>
  )
}

export default App1
