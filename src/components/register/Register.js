import React, { Component } from 'react';
const axios = require('axios');


class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            details: { username: '', password: '' },
            
            isLogin: false,
            message: ''
        }
    }

    inputChanged = (event) => {
        const {details} = this.state;
        details[event.target.name] = event.target.value;
        this.setState({
			details : details,
        });
    }

    register = (e) => {
        e.preventDefault()

        const url = 'http://127.0.0.1:8000/api/users/';
        const data = this.state.details;

        axios.post(
            url,
            data
        ).then((response) => {

            console.log(response)
            // if(response.status === 200){
            //     this.setState({
            //         isLogin : true,
            //         message : 'Success!' 
            //     })
            //     console.log(response);
            // }
        }).catch((error) => {
            console.error(error);
        });
    }

    // register = () => {
    //     console.log('test')
    // }
    
    render(){
        const {isLogin, message} = this.state;
        return ( 
            <>
                <div className="container" style={{marginTop: '56px'}}>
                    <h3>Registration Page</h3>
                    <form className="">
                        <div className="form-group">
                            <label htmlFor="usr">Username:</label>
                            <input type="text" className="form-control" name="username" id="usr" value={this.state.details.username} onChange={this.inputChanged} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" name="password" id="pwd" value={this.state.details.password} onChange={this.inputChanged} required/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => this.register(e)}>Register</button>
                    </form>
                    <br />
                </div>
            </>
        )
    } 
}

export default Register;