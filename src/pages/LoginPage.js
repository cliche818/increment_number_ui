import React from 'react';

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

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/sign_in`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          body: `email=${email}&password=${password}`
        }
      )
      const json = await response.json()
      

      if (!!json["errors"]) {
         this.setState({errorMessage: `${json["errors"]["title"]} | ${json["errors"]["detail"]}`}) 
      } else if (!!json["data"]) {
        const api_token = json["data"]["attributes"]["api_token"]
        sessionStorage.setItem('api_token', api_token); 
        
        console.log('successful log in')
        console.log(sessionStorage.getItem('api_token'))

        this.props.history.push('/number')
      }
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <h1>Login page</h1>
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