import React from 'react';

export default class LogoutButton extends React.Component {

  logoutAction = () => {
    sessionStorage.removeItem('api_token')
    this.props.history.push('/login')
  }

  render() {
    return (
      <button onClick={this.logoutAction}>Log out</button>
    )
  }
}  