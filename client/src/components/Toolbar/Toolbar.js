import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import './Toolbar.css';
import { Link} from 'react-router-dom';
import yaye from '../Images/yaye.jpg';



const Toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClick} />
                
            </div>
            <div className="toolbar_logo">
               <img src={yaye} alt="yaye" />
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                
                    <Link to='/login'><h4>Login</h4></Link>
                    <Link to='/About_Us' ><h4>About Us</h4></Link>
                    <Link to='/Contact_Us' ><h4>Contact Us</h4></Link>
               
                </ul>

            </div>
        </nav>
    </header>
);

export default Toolbar;