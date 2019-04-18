// JavaScript Base Type Extra API


/**
 * 删除左右两端的空格
 */
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};
/**
 * 删除左边的空格
 */
String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, "");
};
/**
 * 删除右边的空格
 */
String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, "");
};
String.prototype.isNullOrEmpty = function () {
    if (typeof this == "undefined" || this === null) {
        return true;
    }
    if (typeof this == "string" && this === "") {
        return true;
    }
    return false;
};

//给Number类型增加一个add方法，使用时直接用 .add 即可完成加法计算。
Number.prototype.add = function (arg) {
    var accAdd = function (arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    };

    return accAdd(arg, this);
};

//给Number类型增加一个sub方法，，使用时直接用 .sub 即可完成减法计算。
Number.prototype.sub = function (arg) {
    return this.add(this, -arg);
};

//给Number类型增加一个mul方法，使用时直接用 .mul 即可完成乘法计算。
Number.prototype.mul = function (arg) {
    var accMul = function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        }
        catch (e) {
        }
        try {
            m += s2.split(".")[1].length;
        }
        catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    };

    return accMul(arg, this);
};

//给Number类型增加一个div方法，，使用时直接用 .div 即可完成除法计算。
Number.prototype.div = function (arg) {
    var accDiv = function (arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
        }
        try {
            t2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
        }
        if (Math) {
            r1 = Number(arg1.toString().replace(".", ""));
            r2 = Number(arg2.toString().replace(".", ""));
            return (r1 / r2) * pow(10, t2 - t1);
        }
    };
    return accDiv(this, arg);
};

Array.prototype.remove = function (i) {
    if (isNaN(i) || i < 0 || i >= this.length) {
        return this;
    }
    this.splice(i, 1);
    return this;
};
Array.prototype.remove2 = function (i) {
    if (isNaN(i))
        return this;
    if (i < 0 || i >= this.length)
        return this;
    else
        return this.slice(0, i).concat(this.slice(i + 1, this.length));
};
Array.prototype.remove3 = function (dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i];
        }
    }
    this.length -= 1;
};
Array.prototype.insert = function (i, item) {
    return this.splice(i, 0, item);
};
Date.prototype.format = function (format) {
    // (new Date()).format("yyyy-MM-dd hh:mm:ss")
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};