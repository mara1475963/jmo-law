import React from 'react'
import SectionHeader from '../sectionHeader/sectionHeader';
import './aboutUs-detail.scss'

const AboutUsDetail = ({profile}) => {
    const {name,imgProfile, body} = profile;
  return (
    <div className='profile-detail-container'>
    
    <SectionHeader profile={name} />
    
        {body}
    </div>
  )
}

export default AboutUsDetail