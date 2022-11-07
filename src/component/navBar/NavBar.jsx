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
import { AuthContext } from '../context/authContext';
const NavBar = () => {

    const {currentUser} = useContext(AuthContext)
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
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar