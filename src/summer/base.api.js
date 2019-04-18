var u = window.$summer || {};
var isAndroid = (/android/gi).test(navigator.appVersion);

u.os = (function (env) {
    var browser = {
        info: function () {
            var ua = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                //trident: ua.indexOf('Trident') > -1, //IE内核
                //presto: ua.indexOf('Presto') > -1, //opera内核
                webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                //gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
                mobile: !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: ua.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: ua.indexOf('iPad') > -1, //是否iPad
                //webApp: ua.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                platform: navigator.platform
            };
        }(),
        lang: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (browser.info.platform.toLowerCase().indexOf("win") >= 0 || browser.info.platform.toLowerCase().indexOf("mac") >= 0) {
        return "pc";
    } else if (browser.info.android) {
        return "android";
    } else if (browser.info.ios || browser.info.iPhone || browser.info.iPad) {
        return "ios";
    } else {
        return "";
    }
})(u);
u.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};
u.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
};
u.isEmptyObject = function (obj) {
    if (JSON.stringify(obj) === '{}') {
        return true;
    }
    return false;
};
u.alert = function (msg) {
    try {
        if (typeof msg == "string") {
            alert(msg);
        } else if (typeof msg == "object") {
            alert(u.jsonToStr(msg));
        } else {
            alert(msg);
        }
    } catch (e) {
        alert(msg);
    }
};
//获取随机的唯一id，随机不重复，长度固定
u.UUID = function (len) {
    len = len || 6;
    len = parseInt(len, 10);
    len = isNaN(len) ? 6 : len;
    var seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ';
    var seedLen = seed.length - 1;
    var uid = '';
    while (len--) {
        uid += seed[Math.round(Math.random() * seedLen)];
    }
    return uid;
};

u.isJSONObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};
u.isJSONArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};
u.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
};
//是否为空字符串
u.isEmpty = function (obj) {
    if (obj === undefined || obj === null || (obj.toString && obj.toString() === "")) {
        return true;
    }
    return false;
};
u.check = function (obj, paramNameArray, msg) {
    for (var i = 0, len = paramNameArray.length; i < len; i++) {
        if (obj[paramNameArray[i]] === undefined || obj[paramNameArray[i]] === null) {
            var str = "参数[" + paramNameArray[i] + "]不能为空";
            alert(msg ? msg + str : str);
            return false;
        }
    }
    return true;
};
u.checkIfExist = function (obj, paramNameArray, msg) {
    for (var i = 0, len = paramNameArray.length; i < len; i++) {
        var key = paramNameArray[i];
        if (key in obj && $summer.isEmpty(obj[key])) {
            var str = "参数[" + paramNameArray[i] + "]不能为空";
            alert(msg ? msg + str : str);
            return false;
        }
    }
    return true;
};
u.isNamespace = function (ns) {
    if (typeof ns == "undefined" || ns === null) {
        return false;
    }
    if (typeof ns == "string" && ns === "") {
        return false;
    }

    if (ns.indexOf(".") < 0 || ns.substring(0, 1) == "." || ns.substring(ns.length - 1) == ".") {
        alert("包名非法，不包含.或以.开始结束");
        return false;
    }

    var nameArr = ns.split(".");
    for (var i = 0, len = nameArr.length; i < len; i++) {
        var name = nameArr[i];
        if (name === "") {
            alert("非法的包名中连续含有两个.");
            return false;
        } else {
            var pattern = /^[a-z]+([a-zA-Z_][a-zA-Z_0-9]*)*$/;
            if (!pattern.test(name)) {
                alert("非法的包名");
                return false;
            }
        }
    }
    return true;
};

window.$isJSONObject = u.isJSONObject;
window.$isJSONArray = u.isJSONArray;
window.$isFunction = u.isFunction;
window.$isEmpty = u.isEmpty;
window.$summer = window.$summer || u;

