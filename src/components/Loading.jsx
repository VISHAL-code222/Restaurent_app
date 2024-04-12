import React from 'react'
import loading_image from "../assets/loading_image.gif"
import "../css/Loading.css"

function Loading() {
  return (
    <div>
        <div className="loading-screen">
      <img src={loading_image} alt='loading'/>
      </div>
    </div>
  )
}

export default Loading
