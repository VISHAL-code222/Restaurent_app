import React from 'react'
import {Link} from "react-router-dom"

import "../css/Home.css"

function Home({classname}) {
  return (
   <div className={classname}>
    <section className='home-start'>

 


    <main className="home-main-content">

        <h1>Delight in Every Bite</h1>
        <p>Experience a culinary journey through India's rich flavors at our restaurant. Indulge in the vibrant spices, aromatic herbs, and exquisite textures that define authentic Indian cuisine. Each dish is crafted with care and tradition, promising a gastronomic adventure that delights the senses and leaves a lasting impression.</p>

        <div className="btn">
     <Link  to="/menu">      <button>MENU</button></Link> 
      <Link to="bookatable">    <button>BOOK A TABLE</button> </Link>  
        </div>

    </main>



    </section>
   </div>
  )
}

export default Home
