import React from 'react'
import { photo } from '../data/photo'
import "../css/Gallery.css"


function Gallery({classname}) {
  return (
    <div className={classname}>
    <div className='container  '>
      <h1 style={{textAlign:"center",fontStyle:"italic",fontFamily:"Lobster, sans-serif",fontWeight:"400",fontStyle:"normal",letterSpacing:"1px",position:"relative",top:"15px"}}>GALLERY</h1>

     <section className="gallery-photo">

     {photo.map((res)=>{
      return <div className="photo-style" id={res.id}>


       <img src={res.image} alt="" />





      </div>
     })}







     </section>


    </div>
    </div>
  )
}

export default Gallery
