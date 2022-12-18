import React, { useRef, useState } from 'react'
import ServiceDetail from "../../components/service-detail/service-detail";
import './services.scss'
import FiremniPravo from '../service-detail-bodies/firemniPravo';
import PravoNemovitosti from '../service-detail-bodies/pravoNemovitosti';

const Services = () => {
const icon = '/assets/service-icons/service-icon.PNG'
  const icons = [{
    icon:'/assets/service-icons/service-icon.PNG',
    iconActive:'/assets/service-icons/service-icon-active.PNG',
    title:'Firemni Pravo',
    body:<FiremniPravo />
  },
  {
    icon:icon,
    iconActive:'/assets/service-icons/service-icon-active.PNG',
    title:'OBCHODNÍ PRÁVO'
  },
  {
    icon:icon,
    title:'Firemni Pravo'
  },
  {
    icon:icon,
    title:'Firemni Pravo'
  },
  {
    icon:icon,
    title:'Firemni Pravo'
  },
  {
    icon:icon,
    title:'Firemni Pravo'
  },
  {
    icon:'/assets/service-icons/service-icon2.PNG',
    iconActive:'/assets/service-icons/service-icon2-active.PNG',
    title:'PRÁVO NEMOVITOSTNÍ',
    body:<PravoNemovitosti />
  },
  {
    icon:icon,
    title:'Firemni Pravo'
  },
]
const [selected,setSelected] = useState(null)

const myRef = useRef(null);

const executeScroll = () => {
    console.log()
    myRef.current.scrollIntoView({behavior: 'smooth'})
}
const onClickHandler = (id)=>{
    if(id === null){
      setSelected(null)
      return;
    }
    setSelected({...icons[id]});
    executeScroll(); 
}

console.log(selected)

  return (
    <div id='section--1'>
    <div className='services-container'>
        {icons.map(({icon,iconActive,title},idx)=> (
          <div className='service-container' key={idx} onClick={()=>onClickHandler(idx)}>
              
              <img alt='N/A' src={selected&& icons[idx].title===selected.title ? iconActive:icon} />
              <span className='title'>{title}</span>
          </div>
           
           ))} 
    </div>
    
        {selected && 
        <div ref={myRef} >
          <button onClick={()=>onClickHandler(null)}>X</button>
        <ServiceDetail service={selected}/>
        </div>}
    
    
    </div>
  )
}

export default Services