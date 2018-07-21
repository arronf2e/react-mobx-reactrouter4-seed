import React, { Component } from 'react';
import fundebug from 'fundebug-javascript';

fundebug.apikey = ""; // 填写 fundebug apikey

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidMount() {
        console.log('error boundary did mount');
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
        fundebug.notifyError(error, {
            metaData: {
                info: info
            }
        })
    }

    render() {
        if(this.state.hasError) {
            return null;
            // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
