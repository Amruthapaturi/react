import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
    const land = "10 Acres"
  return (
    <div>
      <Parent assets={land}/>
    </div>
  )
}

export default GrandParent
