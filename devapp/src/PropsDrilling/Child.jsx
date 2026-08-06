import React, { useContext } from 'react'
import GrandChild from './GrandChild'


const Child = ({asset}) => {

  return (
    <div>
      <GrandChild asset1 ={asset}/>

    </div>
  )
}

export default Child
