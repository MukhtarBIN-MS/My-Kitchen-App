import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import People from '@material-ui/icons/People';
import Fastfood from '@material-ui/icons/Fastfood';
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import './rchoice.css'


const useStyles = makeStyles(theme => ({
    Icon: {
        color: 'black',
        fontSize: 70,
        padding: 10
    }
}));


const Rchoice = () => {
    const classes = useStyles();
    return (
        <div className="rchoice_container">

            <Toolbar />
            <h1>Welcome To My kitchen</h1>
            <h1>Register as ??</h1>

            <div className="content">
                <NavLink to="/signup">
                    <div className="r-choice-r">
                        <People className={classes.Icon} />
                        <h2>Customer</h2>
                    </div>
                </NavLink>
                <NavLink to="/signup">
                    <div className="r-choice-l">
                        <Fastfood className={classes.Icon} />
                        <h2>Chef</h2>
                    </div>
                </NavLink>
            </div>
            <Footer />
        </div>
    );
}

export default Rchoice;