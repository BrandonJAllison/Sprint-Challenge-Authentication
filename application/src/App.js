import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import Users from './Jokes';
import image from './HnEDRAB.jpg'

const style ={
  color: 'white',
  textDecoration: 'none',
  opacity: '.6'
}

const button = {
  background:'transparent',
  borderRadius: "15px",
  border: 'none',
  padding: '10px',
  magring: '10px',
  width: '100px'
}

const imageStlye ={
  height: '500px',
  widht : '500px'
}

const header={
  height: '60px',
  color: 'white',
  background: '#5F9217',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const Home = props => {
  return (
    <div>
      <h2>Dad Jokes</h2>
      <h4>Are you Ready for some Laughs?</h4>
      <img style={imageStlye} src={image} alt="guy telling dad joke"/>
    </div>
  )
}

class App extends Component {
  logout = () => {
    localStorage.removeItem('jwt');
    window.location.reload();

  }

  SubmitHandler = (event) => {
    event.preventDefault();
    this.setState();

  }

  render() {
    return (
      <div className="App">
        <header style={header} >
            <NavLink style={style}
             activeStyle={{
             textDecoration: "underline",
             color: "white",
             opacity: "1" }} 
             to='/' exact> Home</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink style={style}
            activeStyle={{
            textDecoration: "underline",
            color: "white",
            opacity: "1" }} 
            to='/SignUp'>Sign Up</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink style={style}
            activeStyle={{
            textDecoration: "underline",
            color: "white",
            opacity: "1" }} 
            to='/SignIn'>Sign In</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink style={style}
            activeStyle={{
            textDecoration: "underline",
            color: "white",
            opacity: "1"}} 
            to='/Jokes'>Jokes</NavLink>&nbsp;&nbsp;
            <button style={button} onClick={this.logout} onSubmit={this.SubmitHandler}><i class="fas fa-door-open"></i></button>
          </header>
        
        <div>
          <Route path='/' component={Home} exact></Route>
          <Route path='/SignUp' component={SignUp} exact></Route>
          <Route path='/SignIn' component={SignIn} exact></Route>
          <Route path='/Jokes' component={Users} exact></Route>
        </div>
        
      </div>
    );
  }
}

export default App;

