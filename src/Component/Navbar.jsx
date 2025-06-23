import React from 'react'
import './Navbar.css'
import menu_icon from '../assets/menu.png'
import search_icon from '../assets/search.png'
import notification from '../assets/notification.png'
import more from '../assets/more.png'
import upload from '../assets/upload.png'
import user_profile from '../assets/user_profile.jpg'
import logo from '../assets/youtube.jpg'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu-icon' onClick={()=>setSidebar((prev)=>!prev)} src={menu_icon} alt="" />
            <Link to='/'><img className='logo' src={logo}/></Link>
        </div>
        <div className="nav-mid flex-div">
            <div className="search-box flex-div">
            <input type="search" placeholder='Search'/> 
            <img className='search-icon' src={search_icon} alt="" />
        </div>
        </div>
        <div className="nav-right flex-div">
            <img src={notification} alt="" />
            <img src={more} alt="" />
            <img src={upload} alt="" />
            <img className='user-profile' src={user_profile} alt="" />
        </div>
    
</nav>
    
  )
}

export default Navbar
