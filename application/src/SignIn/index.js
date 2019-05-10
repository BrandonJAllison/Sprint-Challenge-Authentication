import React from 'react';
import axios from 'axios';

const form ={
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    textAlign: 'center'
  }
  
  const input={
    border: 'none',
    borderBottom: '2px solid black',
    width: '200px',
    margin: '20px'
  }

  const button ={
    width: '200px',
    padding: '10px',
    color: '#black',
    borderRadius: '15px',
    border: '1px solid black',
    background: 'white',
    margin: '20px 0',
    boxShadow: '0px 8px 15px black'
  }

class SignIn extends React.Component {
    state = {
        username: '',
        password: ''
    }

    InputHandler = event => {
        event.preventDefault();
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }

    SubmitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        const credentials = this.state;
        const endpoint = 'http://localhost:3300/api/login';
        axios.post(endpoint, credentials)
            .then (res => {
                console.log('response data from login', res.data);
                localStorage.setItem('jwt', res.data.token);
            })
            .catch( err => {
                console.log('err from login', err);
            });
    }

    render() {
        return (
            <form style={form} onSubmit={this.SubmitHandler}>
            <div>
                <div>
                    <label htmlFor="username">Username: &nbsp;</label>
                    <input style={input} name="username" value={this.state.username} onChange={this.InputHandler} type='text' />
                </div>
                <div>
                    <label htmlFor="password">Password: &nbsp;</label>
                    <input style={input} name="password" value={this.state.password} onChange={this.InputHandler} type='password' />
                </div>
                <div>
                    <button style={button} type='submit'>Sign In</button>
                </div>
                </div>
            </form>
        )
    }
}

export default SignIn;