import React from 'react'
import './whatGpt3.css'
import Features from '../Features/Features';
const  WhatGPT3= ()=> {
  return (
    <div className='gpt3__whatGpt3 section__margin' id='wgpt3'>
   <div className='gpt3__whatGpt3-feature'>
    <Features title="what is GPT3" text="We so opinion friends me message as delight. 
Whole front do of plate heard oh ought. 
His defective nor convinced residence own. 
Connection has put impossible own apartments boisterous.
 At jointure ladyship an insisted so humanity he. 
Friendly bachelor entrance to on by."/>
 </div>
 <div className='gpt3__whatGpt3-heading '>
  <h1 className='gradient-text'> The possibilities are beyond your imagination</h1>
  <p className='gradient-text'>Explore The Library</p>
 </div>
 <div className='gpt3__whatGpt3-container'>
  <Features feature={true} title="Chatbots" text="We so opinion friends me message as delight. 
  Whole front do of plate heard oh ought. "/>
  <Features  feature={true} title="Knowledgebase" text="At jointure ladyship an insisted so humanity he.
   Friendly bachelor entrance to on by. As put impossible own apartments b" />
  <Features  feature={true}  title="Education" text="At jointure ladyship an insisted so humanity he.
   Friendly bachelor entrance to on by.
    As put impossible own apartments b" />
 </div>

 </div>
  );
}

export default WhatGPT3
