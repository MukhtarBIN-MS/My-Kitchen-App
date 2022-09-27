import React from 'react';
import './SideDrawer.css';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import Refresh from '@material-ui/icons/Autorenew';
import Account from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import pic from '../Images/yayi.jpg'

const useStyles = makeStyles(theme => ({
    Icon: {
        color: 'black',
        padding:'10px',
        marginLeft:'-30px'
    }
}))





const SideDrawer = props => {

    const classes = useStyles()
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = 'side-drawer open';

    }


    return (
        <div className="container">

            <nav className={drawerClasses}>
                <img src={pic} alt="side_drawer_pic" id="picture" />
                <hr className="line" />

                <ul data-aos="zoom=in">

                    <Link to="/login"><Account className={classes.Icon} /> <h4>Account</h4></Link>
                    <Link to="/login"> <Search className={classes.Icon} /> <h4>Search</h4></Link>
                    <Link to="/login"> <Home className={classes.Icon} />  <h4>Home</h4></Link>
                    <Link to="/login"> <Refresh className={classes.Icon} /> <h4>Refresh</h4></Link>

                </ul>

                <hr />
            </nav>


        </div>
    );
}
export default SideDrawer;