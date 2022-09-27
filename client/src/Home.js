import React from 'react';
import App from './App'
import Login from './components/Login/Login';
import rchoice from'./components/RChoice/rchoice';
import signup from'./components/signup/signup';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = () => (
    <div className="Home">
        <Router>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/login" exact component={Login} />
                <Route path="/rchoice" exact component={rchoice} />
                <Route path="/signup" exact component={signup} />
               
               
            </Switch>
        </Router>
    </div>
)
export default Home;

