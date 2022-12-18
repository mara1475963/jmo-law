import React from 'react'
import './lukasJansa.scss'

const LukasJansa = ({profile}) => {
  return (
    <div className='profile-detail'>
  
    <div className='left'>
    <h3>Valné hromady, převody obchodních podílů, akcií</h3>
        <ul>
            <li>absolvoval právnickou fakultu MU v Brně a je zapsán v seznamu advokátů pod č. 11019</li>
            <li>absolvoval právnickou fakultu MU v Brně a je zapsán v seznamu advokátů pod č. 11019</li>
            <li>absolvoval právnickou fakultu MU v Brně a je zapsán v seznamu advokátů pod č. 11019</li>
            <li>absolvoval právnickou fakultu MU v Brně a je zapsán v seznamu advokátů pod č. 11019</li>
            <li>absolvoval právnickou fakultu MU v Brně a je zapsán v seznamu advokátů pod č. 11019</li>

        </ul>
    </div>
    <div className='right'>
        <img src={profile} />
    </div>
  </div>
  )
}

export default LukasJansa