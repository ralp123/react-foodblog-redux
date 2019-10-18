import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');



class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            credentials: { username: '', password: '' },
            
            isLogin: false,
            message: ''
        }
    }

    inputChanged = (event) => {
        const {credentials} = this.state;
        credentials[event.target.name] = event.target.value;
        this.setState({
			credentials : credentials,
        });
    }

    login = (e) => {
        e.preventDefault()

        const url = 'http://127.0.0.1:8000/api/auth/';
        const data = this.state.credentials;

        axios.post(
            url,
            data
        ).then((response) => {
            //console.log(response)
            if(response.status === 200){
                this.setState({
                    isLogin : true,
                    message : 'Success!' 
                })
                console.log(response);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    register = () => {
        let path = 'register';
        this.props.history.push(path);
    }
    
    render(){
        const {isLogin, message} = this.state;
        return ( 
            <>
                <div className="container" style={{marginTop: '56px'}}>
                    <h3>Login Page</h3>
                    <form className="">
                        <div className="form-group">
                            <label htmlFor="usr">Username:</label>
                            <input type="text" className="form-control" name="username" id="usr" value={this.state.credentials.username} onChange={this.inputChanged} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" name="password" id="pwd" value={this.state.credentials.password} onChange={this.inputChanged} required/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => this.login(e)}>Login</button>
                        <br /><br />
                        <button type="button" className="btn btn-info" onClick={() => this.register()}>Register</button>
                    </form>
                    <br />
                    {/* {(message === '') ? 
                        (
                            null
                        ) : (
                            <div class="alert alert-danger">
                                <strong>{message}</strong>
                            </div>
                        )
                    } */}
                </div>
            </>
        )
    } 
}

export default Login;