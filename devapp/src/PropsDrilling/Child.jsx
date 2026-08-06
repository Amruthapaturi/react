import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { LandContext } from '../ContextAPI/LandContext'

const Child = ({asset}) => {
  const {land, hello} = useContext(LandContext)
  return (
    <div>
      <GrandChild asset1 ={asset}/>
      <p>{land}</p>
      <button onClick={hello}>hello</button>
    </div>
  )
}

export default Child
