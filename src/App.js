 import React from 'react'
import'./index.css'
 import { Blog ,Header,Possibility, Footer ,Feature } from './containers'
 import { Brand , NavBar } from './components/index.js'
import './App.css';
import WhatGPT3 from './containers/WhatGPT3/WhatGpt3.jsx'
import CTA from './components/CTA/CTA.jsx'
 export default function App() {
   return (
     <>
      <div className='App'>
      <div className="gredient__bg">
      <NavBar  />
      <Header/>
      </div>
      <Brand/>

      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/> 
  </div>

     </>
   )
 }
 