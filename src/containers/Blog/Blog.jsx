import React from 'react'
import './Blog.css'

import { blog01,blog02,blog03,blog04,blog05 } from './imports'
import Article from '../../components/article/Article'
 
export default function Blog() {

    const blog = [
    

      blog02,

      blog03,
     
      blog04,
      
      blog05,
      ]

    return (
      <div className='gpt3__blog section__padding  '>
    <div className='gpt3__blog-header' id='blog' >
      
    A lot is happening, 
    We are blogging about it.
    </div>
    <div className="gpt3__blog-footer">
      <div className='groupA'>
    
          <Article img={blog01}/>
        </div>
        <div className="groupB">
        {blog.map(item =>{
          return(
< Article img={item}/>
          )
      
     })}
        </div>

    </div>
      </div>
    )
  }
