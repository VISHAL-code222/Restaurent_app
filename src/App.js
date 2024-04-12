import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Events from './components/Events';

import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; 
import Book_A_Table from './components/Book_A_Table';
import Loading from './components/Loading';
import 'animate.css';


function App() {
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setLoading(false)
    },500)

    return ()=> clearTimeout(timeout)


  },[])

// 


  return (
    <div>
       
      <BrowserRouter>
      
      <Navbar />


     
       

          {loading ?(
            <div className="loading-bar"><Loading/></div>
          ):(
            <Routes>
            <Route path="/" element={<Home   classname="animate__animated animate__fadeInLeft"              />} />
           
            <Route path="/about" element={<About  classname="animate__animated animate__fadeInLeft" />} />
            <Route path="/menu" element={<Menu   classname="animate__animated animate__fadeInLeft"/>} />
            <Route path="/specials" element={<Specials   classname="animate__animated animate__fadeInLeft"/>} />
            <Route path="/events" element={<Events  classname="animate__animated animate__fadeInLeft" />} />
            
            <Route path="/gallery" element={<Gallery   classname="animate__animated animate__fadeInLeft"/>} />
            <Route path="/contact" element={<Contact   classname="animate__animated animate__fadeInLeft"/>} />
            <Route path='/bookatable' element={<Book_A_Table  classname="animate__animated animate__fadeInLeft"/>}/>
            
          </Routes>
          )}
         
      </BrowserRouter>
    </div>
  );
}

export default App;


