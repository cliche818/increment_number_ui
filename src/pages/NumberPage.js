import * as React from 'react';
import requireAuthentication from '../AuthenticatedComponent';
import LogoutButton from '../components/LogoutButton'

class NumberPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Number Page</h1>
        <LogoutButton history={this.props.history}/>
      </div>
    )
  }
}

export default requireAuthentication(NumberPage);