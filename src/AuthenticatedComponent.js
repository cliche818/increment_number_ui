import React from "react";
import { getApiToken} from "./lib/Auth"

export function requireAuthentication(Component) {
    return class AuthenticatedComponent extends React.Component {
        isAuthenticated = () => {
            const api_token = getApiToken()
            console.log(api_token)
            return !!api_token
        }

        render() {
            const loginErrorMessage = (
                <div>
                    Please <a href="/login">login</a> or <a href="/signup">sign up</a> in order to view this part of the application.
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