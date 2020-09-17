import React from "react";

export function requireAuthentication(Component) {
    return class AuthenticatedComponent extends React.Component {
        isAuthenticated = () => {
            const api_token = sessionStorage.getItem('api_token')
            return !!api_token
        }

        render() {
            const loginErrorMessage = (
                <div>
                    Please <a href="/login">login</a> in order to view this part of the application.
                </div>
            );

            return (
                <div>
                    { this.isAuthenticated() === true ? <Component {...this.props} /> : loginErrorMessage }
                </div>
            );
        }
    };
}

export default requireAuthentication;