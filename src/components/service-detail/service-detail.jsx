import React from 'react'
import SectionHeader from '../sectionHeader/sectionHeader.jsx'
import FiremniPravo from '../service-detail-bodies/firemniPravo.jsx';

import './service-detail.scss'

const ServiceDetail = ({service}) => {
const {title,iconActive, body} = service;



  return (
    <div className='service-detail-container'>
    
    <SectionHeader text={title} iconUrl={iconActive}/>
    
        {body}

    
   
    <button>Kontaktujte nas</button>
    </div>
  )
}

export default ServiceDetail