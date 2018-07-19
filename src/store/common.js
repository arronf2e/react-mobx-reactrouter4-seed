import { observable, action } from "mobx";

export default class Common {

    @observable name = 'arron';

    @observable todos = [{
        id:1,
        name: 'steven'
    }];

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

}
