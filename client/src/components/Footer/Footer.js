import React from 'react';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import Refresh from '@material-ui/icons/Autorenew';
import Account from '@material-ui/icons/AccountCircle';
import { NavLink} from 'react-router-dom';
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    Icon: {
    color:'black'
    }
  })) 


const Footer = () => {
const classes = useStyles()


    return (
        <div  className="footer">
            <nav className="footer_items">
                <ul>
                 
                <span><NavLink to="/"><Home className={classes.Icon} /></NavLink></span>  
                <span><NavLink to="/login"><Search className={classes.Icon} /></NavLink></span>  
                <span><NavLink to="/login"><Refresh className={classes.Icon} /></NavLink></span>  
                <span><NavLink to="/login"><Account className={classes.Icon} /></NavLink></span>  
                  
                </ul>
            </nav>
        </div>
    );
}
export default Footer;