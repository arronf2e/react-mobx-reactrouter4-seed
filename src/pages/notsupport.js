import React, { Component } from 'react';

class NotSupport extends Component {
    constructor(props) {
        super(props);
    }

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
