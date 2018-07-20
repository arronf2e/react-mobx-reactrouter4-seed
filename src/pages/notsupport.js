import React, { Component } from 'react';

class NotSupport extends Component {

    componentDidMount() {
        console.log('notsupport did mounted');
    }

    render() {
        return (
            <div>
                <p>hello notsupport</p>
            </div>
        )
    }
}

export default NotSupport;
