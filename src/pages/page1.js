import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('common')
@observer
class Page1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }

    }

    componentDidMount() {
        console.log('page1 did mounted');

        this.props.common.fetchData();
    }

    handleInputChanage = (e) => {
        let { value } = e.target;
        this.setState({
            inputValue: value
        })
    }

    render() {
        console.log(this.props)
        const { common } = this.props;
        return (
            <div>

                <div>{common.user.name}</div>
                <div>{common.user.age}</div>

                hello world, {common.name}

                {common.todos.map(item => <p key={item.id}>{item.name}</p>)}

                {common.gankData.map(item => <p key={item}>{item}</p>)}

                <button onClick={() => common.changeName('steven')}>
                    changename
                </button>
                <button onClick={() => common.pushTodo({id: 2, name: 'jack'})}>
                    pushtodo
                </button>

                <input
                    type="text"
                    onChange={this.handleInputChanage} />

                <button onClick={() => common.changeObjectValue('age', this.state.inputValue)}>
                    changeAge
                </button>

                <Link to="/page2">page2</Link>

            </div>
        )
    }
}

export default Page1;
