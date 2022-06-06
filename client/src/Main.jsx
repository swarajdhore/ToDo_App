import React from 'react'
import Background_Image from './components/Background_Image/Background_Image';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';

function Main() {
  return (
      <>
    <div>
        <Navbar/>
    </div>
    <div>
        
        <Background_Image/>
    </div>
    </>
    
  );
}

export default Main;