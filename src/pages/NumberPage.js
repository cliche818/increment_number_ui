import * as React from 'react';
import requireAuthentication from '../AuthenticatedComponent';
import LogoutButton from '../components/LogoutButton'

class NumberPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMessage: 'No action taken yet'
    }
  }

  apiToken = () => {
    return sessionStorage.getItem('api_token')
  }

  createDisplayMessage(action, json) {
    if (!!json["data"]) {
      const number = json["data"]["attributes"]["number"]
      return `Action: ${action}, number: ${number}`
    } else if (!!json["error"]) {
      return `Action: ${action}, error: ${json["error"]["title"]} | ${json["error"]["title"]}`
    } else {
      return `Action: ${action}, unknown error`
    }
  }

  currentNumber = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/current`,
      {
        headers: {
          "Authorization": `Bearer ${this.apiToken()}`
        },
        method: "GET",
      }
    )
    const json = await response.json()
    
    const displayMessage = this.createDisplayMessage('current', json)

    this.setState({displayMessage: displayMessage})
  }

  render() {
    return (
      <div>
        <h1>Number Page</h1>
        <LogoutButton history={this.props.history} />

        <br />

        <p>{`${this.state.displayMessage}`}</p>

        <button onClick={this.currentNumber}>Current Number </button>
      </div>
    )
  }
}

export default requireAuthentication(NumberPage);