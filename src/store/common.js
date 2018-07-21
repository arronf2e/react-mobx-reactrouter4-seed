import { observable, action } from "mobx";

import apis from '../apis';

export default class Common {

    @observable name = 'arron';

    @observable todos = [{
        id:1,
        name: 'steven'
    }];

    @observable gankData = [];

    @observable user = {
        name: 'jack',
        age: 23,
        sex: 'gg'
    }

    @action
    changeName(value) {
        this.name = value;
    }

    @action
    pushTodo(todo) {
        this.todos.push(todo);
    }

    @action
    changeObjectValue(key, val) {
        this.user[key] = val;
    }

    @action
    async fetchData() {
        try {
            await apis.apiTest()
        }catch(e) {

        }
    }
}
