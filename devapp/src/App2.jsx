import React from 'react'

const App2 = ({name1 , bharath , object , students , add}) => {
  return (
    <div>
      <h1>Hello this is App2</h1>
      {/* <h1>Hello this is from App2</h1>
      <p>{name1}</p>
      <p>{bharath}</p>
      <p>{object.profession}</p>

      <div>
        {
            students.map((student)=>{
               return (
                <>
                <p>{student}</p>
                </>
               )
            })
        }
      </div> */}

      <button onClick={add}>Add to cart</button>
    </div>
  )
}

export default App2
