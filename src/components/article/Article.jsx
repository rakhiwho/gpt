import React from 'react'
import './Article.css'
export default function Article({img}) {
    return (
        <>
        <div className='gpt3__article' >

          <div className='gpt3__article-img'>
            
            <img src={img} alt="img" />
          </div>
          <div className='gpt3__article-caption'>
       
        <h3>sep 26, 2024</h3>
          <h2>
            GPT-3 and Open  AI is the future.
             Let us exlore how it is?
             </h2>
          <h4>read full article</h4>
        
          </div>
        </div>
        </>
      )
}
