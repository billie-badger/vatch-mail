import React, { Component } from 'react'
import EmailInput from './components/email-input'
import PasswordInput from './components/password-input'


class App extends Component {
  constructor() {
    super() 
    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, attr) {
    const newState = { ...this.state }
    newState[attr] = event.target.value
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <EmailInput
          value = {this.state.email}
          placeholder= 'Your Email Here'
          handleChange = {(e) => this.handleChange(e, 'email')}
        />
        <PasswordInput
          value = {this.state.password}
          placeholder= 'A Secure Password'
          handleChange = {(e) => this.handleChange(e, 'password')}
        />
      </div>
    );
  }
}

export default App
