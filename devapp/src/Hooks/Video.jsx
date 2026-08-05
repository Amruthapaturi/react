import React, { useRef } from 'react'

const Video = () => {
    const videoRef = useRef(null)
  return (
    <div>
      This is some video

      <video ref={videoRef} src="" controls></video>
      <button onClick={()=>videoRef.current.play()}>Play</button>
      <button onClick={()=>videoRef.current.pause()}>Pause</button>
    </div>
  )
}

export default Video
