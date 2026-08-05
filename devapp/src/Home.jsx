import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      This is Home Component
      <button onClick={()=>navigate('/timeref')}>Go To Timer</button>
    </div>
  )
}

export default Home
