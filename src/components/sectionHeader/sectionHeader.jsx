import React from 'react'
import './sectionHeader.scss'

const SectionHeader = ({text,iconUrl}) => {
    
  return (
    <>
    
        <h2>
          <span>{iconUrl && <img src={iconUrl} />}{text}</span>
        </h2>   
    </>
  )
}

export default SectionHeader