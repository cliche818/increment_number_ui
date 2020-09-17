import * as React from 'react';
import requireAuthentication from '../AuthenticatedComponent';

class NumberPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Number Page</h1>
      </div>
    )
  }
}

export default requireAuthentication(NumberPage);