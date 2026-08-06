import React, { useContext } from 'react'
import Parent from './Parent'
import { LandContext } from '../ContextAPI/LandContext'

const GrandParent = () => {
    const {land , hello} = useContext(LandContext)
  return (
    <div>
      <Parent assets={land}/>
    </div>
  )
}

export default GrandParent
