import React from 'react';
import { handleAuthRequest } from '../lib/Auth'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.state = {
      errorMessage: ""
    }
  }

  loginUser = async () => {
    this.setState({errorMessage: ''})

    const email = this.emailInput.current.value
    const password = this.passwordInput.current.value

    const message = await handleAuthRequest('/users/sign_in', email, password)

    if (message === 'success') {
      this.props.history.push('/number')
    } else {
      this.setState({errorMessage: message})
    }
  }

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <a href="/signup">Go to Sign Up Page</a>
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
        <button onClick={this.loginUser}>Sign In</button>

        <br/>
        <p>{`${this.state.errorMessage}`}</p>
      </div>
    )
  }
}