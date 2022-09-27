import React from 'react'
import { TextField } from '@material-ui/core';
import {Form, FormGroup, InputGroupAddon, InputGroup, InputGroupText} from 'shards-react';
import {Link} from 'react-router-dom'
import Account from '@material-ui/icons/AccountCircle';
import yayi from '../Images/yayi.jpg'
import Lock from '@material-ui/icons/Lock';
import Footer from '../Footer/Footer.js';


import './Login.css';


class Login extends React.Component {
  constructor (){

    super()

    this.HandleTextChange = this.HandleTextChange.bind(this);

  }
   

  state = {
    secureTextEntry: false,
    input: ''
};
 



    HandleTextChange = (event) => {
        this.setState({
            input: event.target.value
        });
    };

    render() {
        const val = this.state.input;

        return (

            <div className="containe">
                    <img src={yayi} alt="yayi"  className="Popme"/>
                
                <div className="footerr">

                    <div className="action">
                      
                        <Form>
                            <FormGroup>
                          
                                <InputGroup className="mb-2">
                                    <InputGroupAddon type="append">
                                    <InputGroupText><Account /></InputGroupText>
                                    </InputGroupAddon>
                                    
                        <TextField
                            variant="outlined"
                            label="Username"
                            floatingLabelText="Task"
                            floatingLabelStyle={{ color: "rgb(0, 0, 0, 0)" }}
                            type="text"
                            name="text"
                            value={val}
                            onChange={(e)=>this.HandleTextChange(e)}
                            id="text"

                            autoCapitalize={false} />
                           

                            </InputGroup><br/><br/>
                            

                     
                        <InputGroup className="mb-2">
                                 
                                    <InputGroupText><Lock /></InputGroupText>
                                   
                       </InputGroup>
                        <TextField
                            variant="outlined"
                            label="password"
                            floatingLabelText="Task"
                            floatingLabelStyle={{ color: "rgb(0, 0, 0, 0)" }}
                            type="password"
                            name="input"
                            className="user"
                            id="text"
                            autoCapitalize={false} /><br/><br />

                            <button class="primary-button">Login</button>
                            </FormGroup>
                            </Form>

                       

                    </div>
                    <h5>Dont Have an Account ?<Link to="/rchoice">Register here</Link></h5>
                    </div>

                    <Footer />
                </div>
           
        );

    }

}
export default Login;