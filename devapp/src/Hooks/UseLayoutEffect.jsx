import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {

    useEffect(()=>{
        console.log("This is Effect")
    },[])

    useLayoutEffect(()=>{
        console.log("This is Layout")
    },[])
  return (
    <div>
      this is Layout Example
    </div>
  )
}

export default UseLayoutEffect
