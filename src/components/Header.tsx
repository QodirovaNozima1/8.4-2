import React from 'react'
import BG from "../assets/Background.svg"
import Hero from './Hero'
import Navbar from './Navbar';

const Header:React.FC = () => {
  return (
    <div 
    style={{ backgroundImage: `url(${BG})` }}
      className="bg-cover bg-center h-screen "
    >
        <Navbar/>
      <Hero/>
    </div>
  );
}

export default Header