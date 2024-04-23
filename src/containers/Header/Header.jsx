import React from 'react'
import './Header.css'
import   ai from   '../../assets/ai.png'
import people from '../../assets/people.png'
const Header = ()=> {
  return (

   <>
    <div className='gpt3__header section__padding ' id='home'>
   
      <div className='gpt3__header-info'>
   <h1 className='gradient-text'>let's build somethig amazing with gPT-3 openAI</h1>

   <p className='para'>
    Yet bed any for travelling assistance indulgence unpleasing.
    Not thoughts all exercise blessing.
     indulging way everthing joy alteration boistourous the attachement .party 
     we years to order allow asked of.
   </p>

   <div className='gpt3__header-input'>
    <input placeholder='Write Your email' type="email" name="email" id="email" />
    <button> Get started</button>
   </div>
    <div className='gpt3__header-lastvisits'>
   <img src={people} alt="people" /> 
   <p>1600  people requested access a visit in last 24 hours</p>
    </div>
    </div>
     
    <div className='gpt3__header-ai'>
       <img src={ai} alt="Ai_image" />
      
      </div>
      </div>
   </>
  )
}
export default Header;