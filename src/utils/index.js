const getQueryString = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(decodeURI(r[2]));
    }
    return null;
}

const getIEVersion = () => {
    let ieVersion = (!!window.ActiveXObject && +(/msie\s(\d+)/i.exec(navigator.userAgent)[1])) || NaN;
    return ieVersion;
}

const getFormdata = (data, toObj) => { // 转化成formdata
    let ret;
    if (toObj) {
        ret = {};
    } else {
        if (typeof FormData === 'undefined') return {};
        ret = new FormData();
    }

    for (let key in data) {
        let value = data[key];
        if (value === undefined || value === null) continue;
        function travel (value, path) { // 如果为数组或者对象继续递归，到简单值为止，再把最终path和value添加进form
            if (value instanceof Array) {
                value.forEach((v, i) => {
                    travel(v, `${path}[${i}]`);
                });
            } else if (value instanceof Object) {
                for (let prop in value) {
                    travel(value[prop], `${path}.${prop}`);
                }
            } else {
                if (value === undefined || value === null) return;
                if (toObj) {
                    ret[path] = value;
                } else {
                    ret.append(path, value);
                }
            }
        }
        travel(value, key);
    }
    return ret;
};

export {
    getQueryString,
    getIEVersion,
    getFormdata
}
