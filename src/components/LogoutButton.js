import React from 'react';
import { deleteApiToken } from '../lib/Auth'

export default class LogoutButton extends React.Component {

  logoutAction = () => {
    deleteApiToken()
    this.props.history.push('/login')
  }

  render() {
    return (
      <button onClick={this.logoutAction}>Log out</button>
    )
  }
}  