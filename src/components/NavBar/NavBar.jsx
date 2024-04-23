import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';
import './navBar.css'
import logo from '../../assets/logo.svg'

const Manu =()=>{
  return<>
  <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is gpt3</a></p>
            <p><a href="#possibilities">Open Ai</a></p>
            <p><a href="#feature">Case studies</a></p>
            <p><a href="#blog">Library</a></p>
  </>
}
export default function NavBar() {
  const[togglemenu ,setTogglemenu] = useState(false);
  return (
    <div className='gpt3__navBar '>
      <div className='gpt3__navBar-links'> 
        <div className='gpt3__navBar-links_logo'>
          <img src={logo} alt="logo" />
          <div className='gpt3__navBar-links_container'>
          <Manu/>
          </div>
        </div>
        <div className='gpt3__navBar-sign'>
          <p>sign in</p>
          <button type='button'>sign up</button>
        </div>
        <div className='gpt3__navBar-menu'>
   {togglemenu ? <FaTimes color="#fff" size='27' onClick={()=>setTogglemenu(false)}/>: 
    <FaBars color="#fff" size='27' onClick={()=>setTogglemenu(true)}/> }
    {togglemenu &&<div className='gpt3__navBar-menu_container scale-up-center'>  <div className='gpt__navBar-menu_container-links'> 
      <Manu/>
     <div className='gpt3__navBar-menu_container-links-sign'>
          <p>sign in</p>
          <button type='button'> sign up</button>
        </div>
        </div>
    </div> }
        </div>
      </div>
     </div>
  )
}
