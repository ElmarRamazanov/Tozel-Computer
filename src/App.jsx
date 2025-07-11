import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Comment from './components/Comment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'swiper/css';
import 'swiper/css/autoplay';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About/>
      <Services />
      <Comment />
      <Contact />
      <Footer />
     
    </div>
  )
}

export default App
