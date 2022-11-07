import React, { useContext } from 'react'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/darkModeContext';
const NavBar = () => {

    const {darkMode, toggle} = useContext(DarkModeContext)

  return (
    <div className='navbar'>
        <div className="left">
            <Link to ='/' style={{textDecoration: "none"}}>
            <span>thesocialapp</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ? <DarkModeOutlinedIcon onClick={toggle}/>
            : <WbSunnyOutlinedIcon onClick={toggle} />}
            <GridViewOutlinedIcon />
            <div className="search">
                <SearchOutlinedIcon />
                <input placeholder="Search.."/>
            </div>
        </div>
        <div className="right">
            <PersonOutlineOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className='user'>
                <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                <span>John Doe</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar