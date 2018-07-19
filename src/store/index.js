import Common from './common';

export default class {
    constructor(initState = {}) {
        this.common = new Common(initState.common || {});
    }
}
