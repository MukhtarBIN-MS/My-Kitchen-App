import React from 'react'
import { TextField } from '@material-ui/core';
import yayi from '../Images/yayi.jpg'
import { button } from 'shards-react';
import { Form, FormGroup, InputGroupAddon, InputGroup, InputGroupText } from 'shards-react'
import Account from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Footer from '../Footer/Footer'
import '../Login/Login.css';






class signup extends React.Component {
    constructor() {

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

    handleChange (e){
        e.preventDefault();
    }

    
    render() {
        const val = this.state.input;

        return (

            <div className="containe" >
                   
               <img src={yayi} alt="log_image" className="Popme" />

                
                <div className="footerr">

                    <div className="action">

                        <Form>
                            <FormGroup onSubmit={(e)=>this.handleChange(e)}>
                              
                                <InputGroup className="mb-2">
                                    <InputGroupAddon type="append">
                                        <InputGroupText><Account /></InputGroupText>
                                    </InputGroupAddon>

                                    <TextField
                                        variant="outlined"
                                        label="Firstname"
                                        floatingLabelText="Task"
                                        floatingLabelStyle={{ color: "rgb(0, 0, 0, 0)" }}
                                        type="text"
                                        name="text"
                                        value={val}
                                        onChange={(e) => this.HandleTextChange(e)}
                                        id="text"
                                        required={true}
                                        autoCapitalize={false} />


                                </InputGroup>


                             
                                <InputGroup className="mb-2">
                                    <InputGroupAddon type="append">
                                        <InputGroupText><Account /></InputGroupText>
                                    </InputGroupAddon>

                                    <TextField
                                        variant="outlined"
                                        label="Lastname"
                                        floatingLabelText="Task"
                                        floatingLabelStyle={{ color: "rgb(0, 0, 0, 0)" }}
                                        type="text"
                                        name="text"
                                        required={true}
                                       
                                        id="text"

                                        autoCapitalize={false} />


                                </InputGroup>

                        

                               
                                <InputGroup className="mb-2">
                                    <InputGroupAddon type="append">
                                        <InputGroupText><Lock /></InputGroupText>
                                    </InputGroupAddon>

                                    <TextField
                                        variant="outlined"
                                        label="Choose Password"
                                        floatingLabelText="Task"
                                        floatingLabelStyle={{ color: "rgb(0, 0, 0, 0)" }}
                                        type="Password"
                                        name="text"
                                       
                                         required={true}
                                        id="text"

                                        autoCapitalize={false} />


                                </InputGroup>

                               
                                <InputGroup className="mb-2">

                                    <InputGroupText><Lock /></InputGroupText>

                                </InputGroup>
                                <TextField
                                    variant="outlined"
                                    label=" Repeat password"
                                    floatingLabelText="Task"
                                    floatingLabelStyle={{ color: "rgb(0, 0, 0, 0)" }}
                                    type="password"
                                    name="input"
                                    className="user"
                                    id="text"
                                    required={true}
                                    autoCapitalize={false} /><br /><br />

                                <button className="primary-button">Submit</button>
                            </FormGroup>
                        </Form>



                    </div>
                </div>
                <Footer />
            </div>

        );

    }

}
export default signup;