import React, { useState } from 'react'
import './Features.css'
export default function Features({title , text ,feature}) {
  
  return (
    <div  className={feature?  'feature':"gpt3__feature-container__feature"} >
    <div  className={feature?  'feature-title':"gpt3__feature-container__feature-title"}>
      <div></div>
      <h1>{title}</h1>
    </div>
    <div  className={feature?  'feature-text':"gpt3__feature-container__feature-text"}>
     <p>{text}</p> 
    </div>
    </div>
  )
}
