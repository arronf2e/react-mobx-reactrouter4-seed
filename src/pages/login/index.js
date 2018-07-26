import React, { Component } from 'react';

class Login extends Component {

    componentDidMount() {
        console.log('login did mounted');
    }

    render() {
        return (
            <div>
                <p>hello login</p>
                {/* {this.props.route.routes} */}
            </div>
        )
    }
}

export default Login;
