import React from 'react'
import possibility from '../../assets/possibility.png'
import './Possibility.css'
export default function Possibility() {
  return (
    <div className='gpt3__possibilities section__margin' id='possibilities'>
     <div className='gpt3__possibilities-img'>
      <img src={possibility} alt="possibility" />
     </div>
     <div className='gpt3__possibilities-container'>
   <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
   <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
   <h3 className='access'>Request Early Access to Get Started</h3>
     </div>
    </div>
  )
}
