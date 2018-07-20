import React, { Component } from 'react';
import { getQueryString } from '../utils';

class Page2 extends Component {

    componentDidMount() {
        console.log('page2 did mounted');
    }

    render() {
        console.log(this.props, getQueryString('name'))
        return (
            <div>
                <p>hello page2</p>
                <p>{this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Page2;
