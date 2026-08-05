import React, { useRef, useState } from 'react'
const TimerRef = () => {
    const[seconds , setSeconds]=useState(0)
    const intervalRef = useRef(null)
    const start =()=>{
        if(!intervalRef.current){
            intervalRef.current = setInterval(()=>{
            setSeconds((prev)=>prev+1)
        },1000)
        }
    }
    const stop =()=>{
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    const reset =()=>{
        setSeconds(0)
    }
  return (
    <div>
      <h2>Timer</h2>
      <p>Stop watch : {seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default TimerRef
