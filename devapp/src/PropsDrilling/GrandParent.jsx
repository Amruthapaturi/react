import React, { useContext } from 'react'
import Parent from './Parent'
import { NameContext } from '../ContextAPI/LandContext'

const GrandParent = () => {
   const {sname , greet}= useContext(NameContext)
  return (
    <div>
      {/* <Parent assets={land}/> */}
      <p>{sname}</p>
      <button onClick={greet}>Greet</button>
    </div>
  )
}

export default GrandParent
