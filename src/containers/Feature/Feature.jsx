import React from 'react'
import './feature.css'
import Features from '../Features/Features'
export default function Feature() {

    const features =[
        {
            title:"Improving end distrusts instantly ",
            text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        },
        {
            title:"Become the tended active ",
            text:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        },
        {
            title:"Message or am nothing",
            text:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
        },
        {
            title:"Really boy law county",
            text:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        }
    ]
  return (
    <div className='gpt3__feature section__padding' id='feature'>
      <div className='gpt3__feature-heading'>
        <h1 className='gradient-text'> the future is now and you just need to realize it.
        step into future today & make it happen</h1>
        <p className='gradient__text'> request early excess</p>
      </div>
      <div className='gpt3__feature-items'>
        {
        features.map(items=>{
          return(
          <Features title={items.title} text={items.text}/>
          )
        })
        }
      </div>
    </div>
  )
}
