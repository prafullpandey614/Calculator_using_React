import './App.css';



import React, { useState } from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import {Calculator } from './components/Calculator';
import {Calculator} from './components/Calculator';

export const App = () => {
  
  return (
  
    <>
    <Header />
    <div className="App"> <Calculator /></div>
    
   
    <Footer />
    </>
  )
}


export default App;
