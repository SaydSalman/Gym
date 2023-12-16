import React, { useState } from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth<=768?true:false
  const [menuOpened,setMenuOpened] = useState(false)
  return (
    
    <div className='header'>
      <img className='logo' src={Logo} alt="" />
      {menuOpened===false && mobile===true?(
        <div onClick={()=>setMenuOpened(true)} style={{backgroundColor:'#3c3f45',padding:'0.5rem',borderRadius:'5px'}}>
          <img src={Bars} alt="" style={{width:'2rem',height:'2rem'}} />
        </div>
      ):(
        <ul className='header-menu'>
        <li ><Link onClick={()=>setMenuOpened(false)} to='home' span={true} smooth={true} >Home</Link></li>
        <li ><Link onClick={()=>setMenuOpened(false)} to='programs' span={true} smooth={true} >Programs</Link></li>
        <li ><Link onClick={()=>setMenuOpened(false)} to='reasons' span={true} smooth={true} >Why Us?</Link></li>
        <li ><Link onClick={()=>setMenuOpened(false)} to='plans' span={true} smooth={true} >Plans</Link></li>
        
        
      </ul>
      )}
      
    </div>
  )
}

export default Header
