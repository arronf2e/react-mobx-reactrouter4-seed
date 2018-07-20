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

export {
    getQueryString,
    getIEVersion
}
