import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('login did mounted');
    }

    render() {
        return (
            <div>
                <p>hello login</p>
            </div>
        )
    }
}

export default Login;
