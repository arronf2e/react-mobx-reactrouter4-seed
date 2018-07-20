import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { getQueryString } from '../utils';

class Page2 extends Component {
    constructor(props) {
        super(props);
    }

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
