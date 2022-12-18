import React from 'react'
import './sectionHeader.scss'

const SectionHeader = ({text,iconUrl,profile}) => {
  let firstname ='';
  let lastname = '';
  if(profile){
     [firstname,lastname] = profile.split(' ')
  }

  return (
    <>
        {iconUrl?
        <h2 className='header-section'>
          <span className='icon'>{iconUrl && <img src={iconUrl} />}{text}</span>
        </h2> :
        profile?
        <h3 className='header-section header-profile'><span className='name'>{firstname} <span style={{color:'red'}}>{lastname}</span></span></h3>
        :<h1 className='header-section'><span>{text}</span></h1>         
        }
       
    </>
  )
}

export default SectionHeader