import React from 'react'
import Child from './Child'

const Parent = ({assets}) => {
  return (
    <div>
     <Child asset ={assets}/> 
    </div>
  )
}

export default Parent
