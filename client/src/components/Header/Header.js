import React from 'react';
import './Header.css';
import yayi from '../Images/yayi.jpg'



const Header =()=>(
    <header className="main-header" data-aos="zoom-in" >
      <img src={yayi}  alt="header" className="myImg" />
    </header>
);


export default Header;