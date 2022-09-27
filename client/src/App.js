import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'
import Footer from './components/Footer/Footer';
import Card from './components/Cards/Card';
import Header from './components/Header/Header';
import Content from './components/Content/content';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';


class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  componentDidMount() {
    AOS.init({
      duration: 3000
    })
  }

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  
  render() {
   
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropHandler} />
    }
    return (
      <div style={{ height: "100%" }} className="contain">
        <Header />
        <Toolbar drawerClick={this.drawerToggleHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
           <Content />
           <Card />
          <Footer />
        </main>
      </div>
    )
   
  }
 

}


export default App;
