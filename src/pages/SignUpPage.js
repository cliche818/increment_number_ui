import React from 'react';
import { handleAuthRequest } from '../lib/Auth'


export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.state = {
      errorMessage: ""
    }
  }

  SignUpUser = async () => {
    this.setState({errorMessage: ''})

    const email = this.emailInput.current.value
    const password = this.passwordInput.current.value

    const message = await handleAuthRequest('/users/sign_up', email, password)

    if (message == 'success') {
      this.props.history.push('/number')
    } else {
      this.setState({errorMessage: message})
    }
  }

  render() {
    return (
      <div>
        <h1>Sign up page</h1>
        <a href="/login">Go to Login Page</a>
        <br/>
        <br/>
        <input
          ref={this.emailInput}
          type="email"
          placeholder="email"
        />
        <input
          ref={this.passwordInput}
          type="password"
          placeholder="password"
        />
        <button onClick={this.SignUpUser}>Sign Up</button>

        <br/>
        <p>{`${this.state.errorMessage}`}</p>
      </div>
    )
  }
}