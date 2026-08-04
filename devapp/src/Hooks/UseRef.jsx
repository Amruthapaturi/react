import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)
    const scrollRef = useRef(null)
    const aboutRef = useRef(null)

    const scroll =()=>{
        scrollRef.current.scrollIntoView({behaviour:"smooth"})
    }
    const scrollabout =()=>{
        aboutRef.current.scrollIntoView({behaviour:"smooth"})
    }
    useEffect(()=>{
    inputRef.current.focus()
    },[])
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" placeholder='search Bar....' />
      <button onClick={scroll}>Contact Us</button>
      <button onClick={scrollabout}>About me</button>
      <h1 ref={scrollRef} style={{marginTop:"600px"}}>Contact me </h1>
        <h1 ref={aboutRef} style={{marginTop:"600px"}}>About me</h1>

    </div>
  )
}

export default UseRef
