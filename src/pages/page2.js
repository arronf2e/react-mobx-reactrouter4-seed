import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Page2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>hello page2</p>
            </div>
        )
    }
}

export default Page2;
