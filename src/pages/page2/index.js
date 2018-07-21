import React, { Component } from 'react';

class Page2 extends Component {

    componentDidMount() {
        console.log('page2 did mounted');
    }

    render() {
        return (
            <div>
                <p>hello page2</p>
                <p>{this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Page2;
