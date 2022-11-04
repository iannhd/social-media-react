import React from 'react'
import Friends from '../../assets/1.png'
import Groups from '../../assets/2.png'
import Market from '../../assets/3.png'
import Watch from '../../assets/4.png'
import Memories from '../../assets/5.png'
import Events from '../../assets/6.png'
import Gaming from '../../assets/7.png'
import Gallery from '../../assets/8.png'
import Videos from '../../assets/9.png'
import Message from '../../assets/10.png'
import Tutorial from '../../assets/11.png'
import Course from '../../assets/12.png'
import Funds from '../../assets/13.png'

import './leftbar.scss'
const LeftBar = () => {
  return (
    <div className="leftBar">
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src={"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" />
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src={Groups} alt="" />
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src={Market} alt="" />
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <img src={Watch} alt="" />
                    <span>Watch</span>
                </div>
                <div className="item">
                    <img src={Memories} alt="" />
                    <span>Memories</span>
                </div>
                <hr/>
            </div>
        </div>
    </div>
  )
}

export default LeftBar