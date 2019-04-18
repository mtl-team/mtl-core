(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.mtl = factory());
}(this, function () { 'use strict';

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
    }; //给Number类型增加一个add方法，使用时直接用 .add 即可完成加法计算。


    Number.prototype.add = function (arg) {
      var accAdd = function accAdd(arg1, arg2) {
        var r1, r2, m;

        try {
          r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
          r1 = 0;
        }

        try {
          r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
          r2 = 0;
        }

        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
      };

      return accAdd(arg, this);
    }; //给Number类型增加一个sub方法，，使用时直接用 .sub 即可完成减法计算。


    Number.prototype.sub = function (arg) {
      return this.add(this, -arg);
    }; //给Number类型增加一个mul方法，使用时直接用 .mul 即可完成乘法计算。


    Number.prototype.mul = function (arg) {
      var accMul = function accMul(arg1, arg2) {
        var m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();

        try {
          m += s1.split(".")[1].length;
        } catch (e) {}

        try {
          m += s2.split(".")[1].length;
        } catch (e) {}

        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
      };

      return accMul(arg, this);
    }; //给Number类型增加一个div方法，，使用时直接用 .div 即可完成除法计算。


    Number.prototype.div = function (arg) {
      var accDiv = function accDiv(arg1, arg2) {
        var t1 = 0,
            t2 = 0,
            r1,
            r2;

        try {
          t1 = arg1.toString().split(".")[1].length;
        } catch (e) {}

        try {
          t2 = arg2.toString().split(".")[1].length;
        } catch (e) {}

        if (Math) {
          r1 = Number(arg1.toString().replace(".", ""));
          r2 = Number(arg2.toString().replace(".", ""));
          return r1 / r2 * pow(10, t2 - t1);
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
      if (isNaN(i)) return this;
      if (i < 0 || i >= this.length) return this;else return this.slice(0, i).concat(this.slice(i + 1, this.length));
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
        "M+": this.getMonth() + 1,
        //month
        "d+": this.getDate(),
        //day
        "h+": this.getHours(),
        //hour
        "m+": this.getMinutes(),
        //minute
        "s+": this.getSeconds(),
        //second
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //quarter
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

    var u = window.$summer || {};
    var isAndroid = /android/gi.test(navigator.appVersion);

    u.os = function (env) {
      var browser = {
        info: function () {
          var ua = navigator.userAgent,
              app = navigator.appVersion;
          return {
            //移动终端浏览器版本信息
            //trident: ua.indexOf('Trident') > -1, //IE内核
            //presto: ua.indexOf('Presto') > -1, //opera内核
            webKit: ua.indexOf('AppleWebKit') > -1,
            //苹果、谷歌内核
            //gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
            mobile: !!ua.match(/AppleWebKit.*Mobile.*/),
            //是否为移动终端
            ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            //ios终端
            android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
            //android终端或uc浏览器
            iPhone: ua.indexOf('iPhone') > -1,
            //是否为iPhone或者QQHD浏览器
            iPad: ua.indexOf('iPad') > -1,
            //是否iPad
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
    }(u);

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
    }; //获取随机的唯一id，随机不重复，长度固定


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
    }; //是否为空字符串


    u.isEmpty = function (obj) {
      if (obj === undefined || obj === null || obj.toString && obj.toString() === "") {
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

    var u$1 = window.$summer || {};

    u$1.isElement = function (obj) {
      return !!(obj && obj.nodeType == 1);
    };

    u$1.addEvt = function (el, name, fn, useCapture) {
      if (!u$1.isElement(el)) {
        console.warn('$summer.addEvt Function need el param, el param must be DOM Element');
        return;
      }

      useCapture = useCapture || false;

      if (el.addEventListener) {
        el.addEventListener(name, fn, useCapture);
      }
    };

    u$1.rmEvt = function (el, name, fn, useCapture) {
      if (!u$1.isElement(el)) {
        console.warn('$summer.rmEvt Function need el param, el param must be DOM Element');
        return;
      }

      useCapture = useCapture || false;

      if (el.removeEventListener) {
        el.removeEventListener(name, fn, useCapture);
      }
    };

    u$1.one = function (el, name, fn, useCapture) {
      if (!u$1.isElement(el)) {
        console.warn('$api.one Function need el param, el param must be DOM Element');
        return;
      }

      useCapture = useCapture || false;
      var that = this;

      var cb = function cb() {
        fn && fn();
        that.rmEvt(el, name, cb, useCapture);
      };

      that.addEvt(el, name, cb, useCapture);
    };

    u$1.dom = function (el, selector) {
      if (arguments.length === 1 && typeof arguments[0] == 'string') {
        if (document.querySelector) {
          return document.querySelector(arguments[0]);
        }
      } else if (arguments.length === 2) {
        if (el.querySelector) {
          return el.querySelector(selector);
        }
      }
    };

    u$1.domAll = function (el, selector) {
      if (arguments.length === 1 && typeof arguments[0] == 'string') {
        if (document.querySelectorAll) {
          return document.querySelectorAll(arguments[0]);
        }
      } else if (arguments.length === 2) {
        if (el.querySelectorAll) {
          return el.querySelectorAll(selector);
        }
      }
    };

    u$1.byId = function (id) {
      return document.getElementById(id);
    };

    u$1.first = function (el, selector) {
      if (arguments.length === 1) {
        if (!u$1.isElement(el)) {
          console.warn('$summer.first Function need el param, el param must be DOM Element');
          return;
        }

        return el.children[0];
      }

      if (arguments.length === 2) {
        return this.dom(el, selector + ':first-child');
      }
    };

    u$1.last = function (el, selector) {
      if (arguments.length === 1) {
        if (!u$1.isElement(el)) {
          console.warn('$summer.last Function need el param, el param must be DOM Element');
          return;
        }

        var children = el.children;
        return children[children.length - 1];
      }

      if (arguments.length === 2) {
        return this.dom(el, selector + ':last-child');
      }
    };

    u$1.eq = function (el, index) {
      return this.dom(el, ':nth-child(' + index + ')');
    };

    u$1.not = function (el, selector) {
      return this.domAll(el, ':not(' + selector + ')');
    };

    u$1.prev = function (el) {
      if (!u$1.isElement(el)) {
        console.warn('$api.prev Function need el param, el param must be DOM Element');
        return;
      }

      var node = el.previousSibling;

      if (node.nodeType && node.nodeType === 3) {
        node = node.previousSibling;
        return node;
      }
    };

    u$1.next = function (el) {
      if (!u$1.isElement(el)) {
        console.warn('$api.next Function need el param, el param must be DOM Element');
        return;
      }

      var node = el.nextSibling;

      if (node.nodeType && node.nodeType === 3) {
        node = node.nextSibling;
        return node;
      }
    };

    u$1.closest = function (el, selector) {
      if (!u$1.isElement(el)) {
        console.warn('$api.closest Function need el param, el param must be DOM Element');
        return;
      }

      var doms, targetDom;

      var isSame = function isSame(doms, el) {
        var i = 0,
            len = doms.length;

        for (i; i < len; i++) {
          if (doms[i].isEqualNode(el)) {
            return doms[i];
          }
        }

        return false;
      };

      var traversal = function traversal(el, selector) {
        doms = u$1.domAll(el.parentNode, selector);
        targetDom = isSame(doms, el);

        while (!targetDom) {
          el = el.parentNode;

          if (el !== null && el.nodeType == el.DOCUMENT_NODE) {
            return false;
          }

          traversal(el, selector);
        }

        return targetDom;
      };

      return traversal(el, selector);
    };

    u$1.contains = function (parent, el) {
      var mark = false;

      if (el === parent) {
        mark = true;
        return mark;
      } else {
        do {
          el = el.parentNode;

          if (el === parent) {
            mark = true;
            return mark;
          }
        } while (el === document.body || el === document.documentElement);

        return mark;
      }
    };

    u$1.remove = function (el) {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };

    u$1.attr = function (el, name, value) {
      if (!u$1.isElement(el)) {
        console.warn('$api.attr Function need el param, el param must be DOM Element');
        return;
      }

      if (arguments.length == 2) {
        return el.getAttribute(name);
      } else if (arguments.length == 3) {
        el.setAttribute(name, value);
        return el;
      }
    };

    u$1.removeAttr = function (el, name) {
      if (!u$1.isElement(el)) {
        console.warn('$api.removeAttr Function need el param, el param must be DOM Element');
        return;
      }

      if (arguments.length === 2) {
        el.removeAttribute(name);
      }
    };

    u$1.hasCls = function (el, cls) {
      if (!u$1.isElement(el)) {
        console.warn('$api.hasCls Function need el param, el param must be DOM Element');
        return;
      }

      if (el.className.indexOf(cls) > -1) {
        return true;
      } else {
        return false;
      }
    };

    u$1.addCls = function (el, cls) {
      if (!u$1.isElement(el)) {
        console.warn('$api.addCls Function need el param, el param must be DOM Element');
        return;
      }

      if ('classList' in el) {
        el.classList.add(cls);
      } else {
        var preCls = el.className;
        var newCls = preCls + ' ' + cls;
        el.className = newCls;
      }

      return el;
    };

    u$1.removeCls = function (el, cls) {
      if (!u$1.isElement(el)) {
        console.warn('$api.removeCls Function need el param, el param must be DOM Element');
        return;
      }

      if ('classList' in el) {
        el.classList.remove(cls);
      } else {
        var preCls = el.className;
        var newCls = preCls.replace(cls, '');
        el.className = newCls;
      }

      return el;
    };

    u$1.toggleCls = function (el, cls) {
      if (!u$1.isElement(el)) {
        console.warn('$api.toggleCls Function need el param, el param must be DOM Element');
        return;
      }

      if ('classList' in el) {
        el.classList.toggle(cls);
      } else {
        if (u$1.hasCls(el, cls)) {
          u$1.addCls(el, cls);
        } else {
          u$1.removeCls(el, cls);
        }
      }

      return el;
    };

    u$1.val = function (el, val) {
      if (!u$1.isElement(el)) {
        console.warn('$api.val Function need el param, el param must be DOM Element');
        return;
      }

      if (arguments.length === 1) {
        switch (el.tagName) {
          case 'SELECT':
            var value = el.options[el.selectedIndex].value;
            return value;

          case 'INPUT':
            return el.value;

          case 'TEXTAREA':
            return el.value;
        }
      }

      if (arguments.length === 2) {
        switch (el.tagName) {
          case 'SELECT':
            el.options[el.selectedIndex].value = val;
            return el;

          case 'INPUT':
            el.value = val;
            return el;

          case 'TEXTAREA':
            el.value = val;
            return el;
        }
      }
    };

    u$1.prepend = function (el, html) {
      if (!u$1.isElement(el)) {
        console.warn('$api.prepend Function need el param, el param must be DOM Element');
        return;
      }

      el.insertAdjacentHTML('afterbegin', html);
      return el;
    };

    u$1.append = function (el, html) {
      if (!u$1.isElement(el)) {
        console.warn('$api.append Function need el param, el param must be DOM Element');
        return;
      }

      el.insertAdjacentHTML('beforeend', html);
      return el;
    };

    u$1.before = function (el, html) {
      if (!u$1.isElement(el)) {
        console.warn('$api.before Function need el param, el param must be DOM Element');
        return;
      }

      el.insertAdjacentHTML('beforebegin', html);
      return el;
    };

    u$1.after = function (el, html) {
      if (!u$1.isElement(el)) {
        console.warn('$api.after Function need el param, el param must be DOM Element');
        return;
      }

      el.insertAdjacentHTML('afterend', html);
      return el;
    };

    u$1.html = function (el, html) {
      if (!u$1.isElement(el)) {
        console.warn('$api.html Function need el param, el param must be DOM Element');
        return;
      }

      if (arguments.length === 1) {
        return el.innerHTML;
      } else if (arguments.length === 2) {
        el.innerHTML = html;
        return el;
      }
    };

    u$1.text = function (el, txt) {
      if (!u$1.isElement(el)) {
        console.warn('$api.text Function need el param, el param must be DOM Element');
        return;
      }

      if (arguments.length === 1) {
        return el.textContent;
      } else if (arguments.length === 2) {
        el.textContent = txt;
        return el;
      }
    };

    u$1.offset = function (el) {
      if (!u$1.isElement(el)) {
        console.warn('$api.offset Function need el param, el param must be DOM Element');
        return;
      }

      var sl, st;

      if (document.documentElement) {
        sl = document.documentElement.scrollLeft;
        st = document.documentElement.scrollTop;
      } else {
        sl = document.body.scrollLeft;
        st = document.body.scrollTop;
      }

      var rect = el.getBoundingClientRect();
      return {
        l: rect.left + sl,
        t: rect.top + st,
        w: el.offsetWidth,
        h: el.offsetHeight
      };
    };

    u$1.css = function (el, css) {
      if (!u$1.isElement(el)) {
        console.warn('$api.css Function need el param, el param must be DOM Element');
        return;
      }

      if (typeof css == 'string' && css.indexOf(':') > 0) {
        el.style && (el.style.cssText += ';' + css);
      }
    };

    u$1.cssVal = function (el, prop) {
      if (!u$1.isElement(el)) {
        console.warn('$api.cssVal Function need el param, el param must be DOM Element');
        return;
      }

      if (arguments.length === 2) {
        var computedStyle = window.getComputedStyle(el, null);
        return computedStyle.getPropertyValue(prop);
      }
    };

    u$1.jsonToStr = function (json) {
      if (typeof json === 'object') {
        return JSON && JSON.stringify(json);
      } else {
        alert("$summer.jsonToStr's parameter is not a json, it's typeof is " + typeof json);
      }
    };

    u$1.strToJson = function (str) {
      if (typeof str === 'string') {
        return JSON && JSON.parse(str);
      } else {
        alert("$summer.strToJson's parameter is not a string, it's typeof is " + typeof str);
      }
    }; //gct api


    u$1.winWidth = function () {
      return document.documentElement.offsetWidth || document.body.offsetWidth;
    }; //gct api


    u$1.winHeight = function () {
      return document.documentElement.offsetHeight || document.body.offsetHeight;
    };
    /******************** HTML API END ********************/

    /******************** Native API BEGIN ********************/
    //20160810


    u$1.fixStatusBar = function (el) {
      if (!u$1.isElement(el)) {
        alert('$summer.fixStatusBar Function need el param, el param must be DOM Element');
        return;
      } // var strDM = api.systemType;
      // if (strDM == 'ios') {
      //     var strSV = api.systemVersion;
      //     var numSV = parseInt(strSV,10);
      //     var fullScreen = api.fullScreen;
      //     var iOS7StatusBarAppearance = api.iOS7StatusBarAppearance;
      //     if (numSV >= 7 && !fullScreen && iOS7StatusBarAppearance) {
      //         el.style.paddingTop = '20px';
      //     }
      // }


      var sysInfo = summer.getSysInfo();
      var strST = sysInfo.systemType;
      var strSV = sysInfo.systemVersion;
      var fullScreen = sysInfo.fullScreen;
      var statusBarAppearance = sysInfo.statusBarAppearance;
      var statusBarHeight = sysInfo.statusBarHeight;

      if (strST == "ios" && fullScreen && statusBarAppearance == '1' || strST == "pc") {
        el.style.paddingTop = '20px';
        $(el).children().css("top", "20px");
      } else if (strST == "android" && fullScreen && statusBarAppearance) {
        el.style.paddingTop = statusBarHeight + 'px';
        $(el).children().css("top", statusBarHeight + 'px');
      }
    };

    window.$summer = window.$summer || u$1;
    window.$api = window.$summer;

    var EventMgr = function EventMgr() {
      this._events = {};
    };

    EventMgr.prototype.on = function (evtName, handler) {
      if (this._events[evtName] == undefined) {
        this._events[evtName] = [];
      }

      this._events[evtName].push(handler);
    };

    EventMgr.prototype.off = function (evtName, handler) {
      var handlers = this._events[evtName];

      if (typeof handler == "undefined") ; else {
        var index = -1;

        for (var i = 0, len = handlers.length; i < len; i++) {
          if (handler == handlers[i]) {
            index = i;
            break;
          }
        }

        if (index > 0) handlers.remove(index);
      }
    };

    EventMgr.prototype.trigger = function (evtName, sender, args) {
      try {
        var handlers = this._events[evtName];
        if (!handlers) return;
        var handler;
        args = args || {};

        for (var i = 0, len = handlers.length; i < len; i++) {
          handler = handlers[i];
          handler(sender, args);
        }
      } catch (e) {
        alert(e);
      }
    };

    var _ems = new EventMgr();

    var w$1 = {};
    w$1.$summer = w$1.$summer || {};
    w$1.summer = w$1.summer || {};
    w$1.api = w$1.summer;

    (function () {
      try {
        var summerDOMContentLoaded = function summerDOMContentLoaded() {
          document.addEventListener('DOMContentLoaded', function () {
            summer.trigger("init");
            summer.pageParam = window.localStorage;
            if (typeof summerready == "function") summerready();
            if (typeof summerReady == "function") summerReady();
            summer.trigger("ready");
            summer.trigger("aftershowwin");
          }, false);
        };

        if ($summer.os == "pc" || !window.summerBridge) {
          summer.__debug = true;
          console.log("run by file:// protocol in debug Mode");
          summerDOMContentLoaded();
        } else {
          var url = "";

          if (document.location.href.indexOf("http") === 0) {
            //1、webapp
            var strFullPath = window.document.location.href;
            var strPath = window.document.location.pathname;
            var pos = strFullPath.indexOf(strPath);
            var prePath = strFullPath.substring(0, pos); //domain name

            var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1); //site name

            w$1.__$_CORDOVA_PATH = w$1.__$_CORDOVA_PATH || prePath + postPath;

            if ($summer.os == "android") {
              //alert("android");
              url = w$1.__$_CORDOVA_PATH + "/cordova/android/cordova.js";
            } else if ($summer.os == "ios") {
              //alert("ios");
              url = w$1.__$_CORDOVA_PATH + "/cordova/ios/cordova.js";
            }
          } else {
            //2、hybrid app
            if (w$1.__$_CORDOVA_PATH) {
              url = w$1.__$_CORDOVA_PATH + "www/cordova.js";
            } else {
              url = document.location.pathname.split("www")[0] + "www/cordova.js";
            }
          }

          var _script = document.createElement('script');

          _script.id = "cordova_js";
          _script.type = 'text/javascript';
          _script.charset = 'utf-8';
          _script.async = true;
          _script.src = url;

          _script.onload = function (e) {
            w$1.$summer.cordova = w$1.cordova;
            w$1.summer.cordova = w$1.cordova;
            document.addEventListener('deviceready', function () {
              summer.trigger("init"); //summer.on('init',function(){})
              //1、先获取页面参数123

              summer.winParam(function (ret) {

                if (typeof ret == "string") {
                  ret = $summer.strToJson(ret);
                } //alert($summer.jsonToStr(ret));


                summer.pageParam = ret; //put the param in summer

                if (summer.autoShowWin !== false) {
                  summer.showWin({});
                }

                summer.getOpenWinTime({}, function (ret) {
                  var APMJSON = {
                    "windowid": summer.getSysInfo().winId,
                    "startTime": ret,
                    "endTime": new Date().getTime(),
                    "app_version": summer.getVersion().versionName
                  };
                  var APMPARAMS = ["FeLoad", APMJSON];
                  console.log(APMPARAMS);

                  cordova.require("summer-plugin-apm.SummerAPM").insertAction(APMPARAMS, function (args) {}, function (args) {});
                }, function (ret) {});
                if (typeof summerready == "function") summerready();else if (typeof summerReady == "function") summerReady();
                summer.trigger("ready");
                summer.trigger("aftershowwin");
              });
            }, false);
          };

          _script.onerror = function (e) {
            summer.__debug = true;
            console.log("run by http:// protocol in debug Mode");
            summerDOMContentLoaded();
          }; //document.currentScript.parentNode.insertBefore(_script, document.currentScript);


          var fs = document.getElementsByTagName('script')[0];
          fs.parentNode.insertBefore(_script, fs);
        }
      } catch (e) {
        console.log(e);
      }
    })();

    w$1.summer.require = function (mdlName) {
      if (window.$summer["cordova"] != window.cordova) {
        alert("---------warnning : init cordova is too late!");
        window.$summer["cordova"] = window.cordova;
        window.summer["cordova"] = window.cordova;
      }

      if (mdlName == "cordova") {
        return window.summer["cordova"];
      } else {
        return window.summer["cordova"].require(mdlName);
      }
    };

    w$1.summer.canrequire = function () {
      if (navigator.platform.toLowerCase().indexOf("win") > -1) {
        return false;
      }

      return true;
    };

    w$1.$summer.require = w$1.summer.require;

    w$1.summer.on = function (eName, fn) {
      _ems.on(eName, fn);
    };

    w$1.summer.trigger = function (eName) {
      _ems.trigger(eName);
    };

    /*  加上如下注释代码，ios无法再声明summerBridge
        if(typeof summerBridge == "undefined"){
            summerBridge = {
                callSync:function(){
                    alert("请将执行的逻辑放入summerready中");
                }
            }
        }
    */
    //1、兼容Android
    if (w.adrinvoker) alert(w.adrinvoker);
    var adrinvoker$1 = {};
    if (w.adrinvoker && w.adrinvoker.call2) alert(w.adrinvoker.call2); //Asynchronous call run as corodva bridge

    adrinvoker$1.call = function (srvName, strJson) {
      try {
        if (navigator.platform.toLowerCase().indexOf("win") >= 0) {
          alert("执行" + srvName + "完毕\n参数是：" + strJson);
          return;
        }

        strJson = strJson || '{}';

        try {
          return summer.require('summer-plugin-service.XService').call(srvName, $summer.strToJson(strJson));
        } catch (e) {
          if ($summer.__debug) alert("Excp6.1: 异步调用summer-plugin-service.XService异常:" + e);
          return;
        }
      } catch (e) {
        alert("Excp6: 异步调用adrinvoker.call异常:" + e);
      }
    }; //Synchronous call as summer bridge


    adrinvoker$1.call2 = function (srvName, strJson) {
      try {
        if (navigator.platform.toLowerCase().indexOf("win") >= 0) {
          alert("执行" + srvName + "完毕\n参数是：" + strJson);
          return;
        }

        if (typeof summerBridge != "undefined") {
          try {
            return summerBridge.callSync(srvName, strJson);
          } catch (e) {
            alert("Excp7.1: summerBridge.callSync异常:" + e);
          }
        } else {
          alert("summerBridge is not defined by native successfully!");
        }
      } catch (e) {
        alert("Excp7: 同步调用adrinvoker.call2异常:" + e);
      }
    };

    w.adrinvoker = adrinvoker$1; //2、兼容ios
    //ios Synchronous

    if (typeof CurrentEnvironment != "undefined") {
      if ($summer.os == "ios") {
        CurrentEnvironment.DeviceType = CurrentEnvironment.DeviceIOS;
      } else if ($summer.os == "android") {
        CurrentEnvironment.DeviceType = CurrentEnvironment.DeviceAndroid;
      }
    }

    if (typeof UM_callNativeService == "undefined") {
      var UM_callNativeService = function UM_callNativeService(serviceType, strParams) {
        //同步调用，和安卓统一接口
        return adrinvoker$1.call2(serviceType, strParams);
      };
    } else {
      alert("UM_callNativeService is exist! fatal error!");
      alert(UM_callNativeService);
    }

    w.UM_callNativeService = UM_callNativeService; //ios Asynchronous

    if (typeof UM_callNativeServiceNoraml == "undefined") {
      var UM_callNativeServiceNoraml = function UM_callNativeServiceNoraml(serviceType, strParams) {
        //异步调用，和安卓统一接口
        return adrinvoker$1.call(serviceType, strParams);
      };
    } else {
      alert("UM_callNativeServiceNoraml is exist! fatal error!");
      alert(UM_callNativeServiceNoraml);
    }

    w.UM_callNativeServiceNoraml = UM_callNativeServiceNoraml; //3、

    s.callSync = function (serivceName, strJson) {
      var strParam = strJson;

      if (typeof strJson == "object") {
        strParam = JSON.stringify(strJson);
      } else if (typeof strJson != "string") {
        strParam = strJson.toString();
      }

      try {
        return summerBridge.callSync(serivceName, strParam);
      } catch (e) {
        if ($summer.os == "pc") {
          return strJson;
        }

        alert(e);
      }
    }; //20160815


    s.callCordova = function (cordovaPlugName, plugFnName, json, successFn, errFn) {
      if (this.canrequire() && !this.__debug) {
        var plug = this.cordova.require(cordovaPlugName);

        if (plug && plug[plugFnName]) {
          //cordova.require("summer-plugin-service.XService").call("UMDevice.openCamara", {callback:"xxx()"}, successCallback, errorCallback)
          // == cordova.exec(success, error, "XService", "call", ["UMDevice.openCamara", {callback:"xxx()"}]);
          plug[plugFnName](json, successFn, errFn);
        } else {
          alert("the cordova plug[" + cordovaPlugName + "]'s method[" + plugFnName + "] not implementation");
        }
      } else {
        console.log("the cordova plug[" + cordovaPlugName + "]'s method[" + plugFnName + "] executed!");
      }
    };

    if (!s) {
      s = {};
      w.summer = s;
    }

    s.window = {
      openFrame: function openFrame(json, successFn, errFn) {
        json["animation"] = json["animation"] || {};
        json["pageParam"] = json["pageParam"] || {};

        if (json["rect"] && !json["position"]) {
          json["position"] = {};
          json["position"].left = json["rect"].x;
          json["position"].top = json["rect"].y;
          json["position"].width = json["rect"].w;
          json["position"].height = json["rect"].h;
        }

        if (json["name"] && !json["id"]) {
          json["id"] = json["name"];
        }

        if (json["alert"]) {
          $summer.alert(json);
          delete json["alert"];
        }

        return s.callCordova('summer-plugin-frame.XFrame', 'openFrame', json, successFn, errFn);
      },
      closeFrame: function closeFrame(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'closeFrame', json, successFn, errFn);
      },
      openFrameGroup: function openFrameGroup(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'openFrameGroup', json, successFn, errFn);
      },
      closeFrameGroup: function closeFrameGroup(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'closeFrameGroup', json, successFn, errFn);
      },
      setFrameGroupAttr: function setFrameGroupAttr(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'setFrameGroupAttr', json, successFn, errFn);
      },
      setFrameGroupIndex: function setFrameGroupIndex(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'setFrameGroupIndex', json, successFn, errFn);
      },
      openWin: function openWin(json, successFn, errFn) {
        if (!json["animation"]) {
          json["animation"] = {
            type: "push",
            subType: "from_right",
            duration: 300
          };
        }

        return s.callCordova('summer-plugin-frame.XFrame', 'openWin', json, successFn, errFn);
      },
      // ios下，退出登录，关闭其他页面
      initializeWin: function initializeWin(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'initializeWin', json, successFn, errFn);
      },
      // ios下，重新挂载事件监听
      addEventListener: function addEventListener(json, successFn, errFn) {
        if ($summer.os == "ios") {
          return s.callCordova('summer-plugin-frame.XFrame', 'addEventListener', json, successFn, errFn);
        } else if ($summer.os == "android") {
          if (json.event && json.handler) {
            var handler = json.handler.replace(/\(|\)/g, ''); // 暂时注释，eval 编译报错
            // document.addEventListener(json.event, eval("("+ handler +")"), false);
          }
        }
      },
      createWin: function createWin(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'createWin', json, successFn, errFn);
      },
      getOpenWinTime: function getOpenWinTime(json, successFn, errFn) {
        return s.callCordova("summer-plugin-frame.XFrame", "getOpenWinTime", json, successFn, errFn);
      },
      showWin: function showWin(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'showWin', json, successFn, errFn);
      },
      setWinAttr: function setWinAttr(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'setWinAttr', json, successFn, errFn);
      },
      closeWin: function closeWin(json, successFn, errFn) {
        //support closeWin('xxx') and closeWin({id:'xxx'})
        if (typeof json == "string") {
          json = {
            "id": json
          };
        } else if (typeof json == "undefined") {
          json = {};
        }

        return s.callCordova('summer-plugin-frame.XFrame', 'closeWin', json, successFn, errFn);
      },
      closeToWin: function closeToWin(json, successFn, errFn) {
        //support closeWin('xxx') and closeWin({id:'xxx'})
        if (typeof json == "string") {
          json = {
            "id": json
          };
        } else if (typeof json == "undefined") {
          json = {};
        }

        return s.callCordova('summer-plugin-frame.XFrame', 'closeToWin', json, successFn, errFn);
      },
      getSysInfo: function getSysInfo(json, successFn, errFn) {
        //support closeWin('xxx') and closeWin({id:'xxx'})
        if (typeof json == "string") {
          json = alert("parameter json is required json object type, but is string type");
        }

        var param = json || {
          systemType: "android",
          //"ios"
          systemVersion: 7,
          // ios--> 7    android-->21
          statusBarAppearance: true,
          //false
          fullScreen: true,
          pageParam: {
            param0: 123,
            param1: "abc"
          },
          screenWidth: "",
          screenHeight: "",
          winId: "",
          winWidth: "",
          winHeight: "",
          frameId: "",
          frameWidth: "",
          frameHeight: "",
          statusBarHeight: "",
          statusBarStyle: "",
          appParam: ""
        };
        return JSON.parse(s.callSync('SummerDevice.getSysInfo', param));
      },
      setFrameAttr: function setFrameAttr(json, successFn, errFn) {
        if (s.canrequire()) return s.cordova.require('summer-plugin-frame.XFrame').setFrameAttr(json, successFn, errFn);
      },
      winParam: function winParam(json, successFn, errFn) {
        if (s.canrequire()) return s.cordova.require('summer-plugin-frame.XFrame').winParam(json, successFn, errFn);
      },
      frameParam: function frameParam(json, successFn, errFn) {
        if (s.canrequire()) return s.cordova.require('summer-plugin-frame.XFrame').frameParam(json, successFn, errFn);
      },
      setRefreshHeaderInfo: function setRefreshHeaderInfo(json, successFn, errFn) {
        if (s.canrequire()) return s.cordova.require('summer-plugin-frame.XFrame').setRefreshHeaderInfo(json, successFn, errFn);
      },
      refreshHeaderLoadDone: function refreshHeaderLoadDone(json, successFn, errFn) {
        if (s.canrequire()) return s.cordova.require('summer-plugin-frame.XFrame').refreshHeaderLoadDone(json, successFn, errFn);
      },
      refreshHeaderBegin: function refreshHeaderBegin(json, successFn, errFn) {
        if (s.canrequire()) {
          return s.cordova.require("summer-plugin-frame.XFrame").refreshHeaderBegin(json, successFn, errFn);
        }
      },
      setRefreshFooterInfo: function setRefreshFooterInfo(json, successFn, errFn) {
        if (s.canrequire()) return s.cordova.require('summer-plugin-frame.XFrame').setRefreshFooterInfo(json, successFn, errFn);
      },
      refreshFooterLoadDone: function refreshFooterLoadDone(json, successFn, errFn) {
        if (s.canrequire()) return s.cordova.require('summer-plugin-frame.XFrame').refreshFooterLoadDone(json, successFn, errFn);
      },
      refreshFooterBegin: function refreshFooterBegin(json, successFn, errFn) {
        if (s.canrequire()) {
          return s.cordova.require("summer-plugin-frame.XFrame").refreshFooterBegin(json, successFn, errFn);
        }
      },
      hideLaunch: function hideLaunch(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'removeStartPage', json, successFn, errFn);
      },
      setTabbarIndex: function setTabbarIndex(json, successFn, errFn) {
        return s.callCordova('summer-plugin-frame.XFrame', 'setTabbarItemSelect', json, successFn, errFn);
      }
    }; //核心API直接通过 summer.xxx()访问

    s.openFrame = s.window.openFrame;
    s.closeFrame = s.window.closeFrame;
    s.openWin = s.window.openWin;
    s.initializeWin = s.window.initializeWin;
    s.addEventListener = s.window.addEventListener;
    s.setWinAttr = s.window.setWinAttr;
    s.createWin = s.window.createWin;
    s.getOpenWinTime = s.window.getOpenWinTime;
    s.showWin = s.window.showWin;
    s.closeWin = s.window.closeWin;
    s.closeToWin = s.window.closeToWin;
    s.getSysInfo = s.window.getSysInfo;
    s.winParam = s.window.winParam;
    s.frameParam = s.window.frameParam;
    s.setFrameAttr = s.window.setFrameAttr;
    s.setRefreshHeaderInfo = s.window.setRefreshHeaderInfo;
    s.refreshHeaderLoadDone = s.window.refreshHeaderLoadDone;
    s.refreshHeaderBegin = s.window.refreshHeaderBegin;
    s.setRefreshFooterInfo = s.window.setRefreshFooterInfo;
    s.refreshFooterLoadDone = s.window.refreshFooterLoadDone;
    s.refreshFooterBegin = s.window.refreshFooterBegin;
    s.openFrameGroup = s.window.openFrameGroup;
    s.closeFrameGroup = s.window.closeFrameGroup;
    s.setFrameGroupAttr = s.window.setFrameGroupAttr;
    s.setFrameGroupIndex = s.window.setFrameGroupIndex;
    s.hideLaunch = s.window.hideLaunch;
    s.setTabbarIndex = s.window.setTabbarIndex;

    s.showProgress = function (json) {
      if (!s.canrequire()) return;

      var invoker = summer.require('summer-plugin-service.XService');

      json = json || {};
      invoker.call("UMJS.showLoadingBar", json);
    };

    s.hideProgress = function (json) {
      if (!s.canrequire()) return;

      var invoker = summer.require('summer-plugin-service.XService');

      json = json || {};
      invoker.call("UMJS.hideLoadingBar", json);
    };

    s.toast = function (json) {
      if (!s.canrequire()) return;

      var invoker = summer.require('summer-plugin-service.XService');

      json = json || {};
      invoker.call("UMJS.toast", json);
    }; //upload方法


    s.upload = function (json, sFn, eFn, headers) {
      var fileURL = json.fileURL,
          type = json.type,
          params = json.params;
      var options = new FileUploadOptions();
      options.fileKey = "file";
      options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
      options.mimeType = type;
      options.params = params;
      options.httpMethod = "POST";
      options.headers = headers || {};
      var ft = new FileTransfer();
      var SERVER = json.SERVER;
      ft.upload(fileURL, encodeURI(SERVER), sFn, eFn, options);
    }; //多图多文件批量上传 


    s.multiUpload = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMFile.multiUpload', json, false);
    };

    s.eval = function (script) {
      var t = setTimeout("try{eval(" + script + ")}catch(e){alert(e)}", 10);
    }; //仅支持当前Win中的 各个frame和当前win之间的相互执行脚本


    s.execScript = function (json) {
      /*{
       winId:'xxx',
       frameId:'yyy',
       script:'do()'
       }*/
      if (typeof json == "object") {
        //json.execFn = "summer.eval"
        if (json.script) {
          json.script = "try{" + json.script + "}catch(e){alert(e)}";
        } else {
          alert("the parameter script of the execScript function is " + json.script);
        }
      }

      if (s.canrequire()) {
        //return s.require('summer-plugin-frame.XFrame').execScript(json,null,null);
        return this.callCordova('summer-plugin-frame.XFrame', 'execScript', json, null, null);
      }
    }; //持久化本地存储


    var umStorage = function umStorage(type) {
      type = type || "localStorage";

      if (type == "localStorage") {
        if (!window.localStorage) {
          alert('your device do not support the localStorage');
          return;
        }

        return window.localStorage;
      } else if (type == "sessionStorage") {
        if (!window.sessionStorage) {
          alert('your device do not support the sessionStorage');
          return;
        }

        return window.sessionStorage;
      } else if (type == "application") {
        return {
          setItem: function setItem(key, value) {
            var json = {
              key: key,
              value: value
            };
            return s.callSync("SummerStorage.writeApplicationContext", JSON.stringify(json));
          },
          getItem: function getItem(key) {
            var json = {
              key: key
            };
            return s.callSync("SummerStorage.readApplicationContext", JSON.stringify(json));
          }
        };
      } else if (type == "configure") {
        return {
          setItem: function setItem(key, value) {
            var json = {
              key: key,
              value: typeof value == "string" ? value : JSON.stringify(value)
            };
            return s.callSync("SummerStorage.writeConfigure", JSON.stringify(json));
          },
          getItem: function getItem(key) {
            var json = {
              key: key
            };
            return s.callSync("SummerStorage.readConfigure", JSON.stringify(json));
          }
        };
      } else if (type == "window") {
        return {
          setItem: function setItem(key, value) {
            var json = {
              key: key,
              value: typeof value == "string" ? value : JSON.stringify(value)
            };
            return s.callSync("SummerStorage.writeWindowContext", JSON.stringify(json));
          },
          getItem: function getItem(key) {
            var json = {
              key: key
            };
            return s.callSync("SummerStorage.readWindowContext", JSON.stringify(json));
          }
        };
      }
    };

    s.setStorage = function (key, value, storageType) {
      var v = value;

      if (storageType != "configure") {
        //storageType == "configure" 是为原生提供的配置，callAction时原生读取，所以不能obj- str-处理
        if (typeof v == 'object') {
          v = JSON.stringify(v);
          v = 'obj-' + v;
        } else {
          v = 'str-' + v;
        }
      }

      var ls = umStorage(storageType);

      if (ls) {
        ls.setItem(key, v);
      }
    };

    s.getStorage = function (key, storageType) {
      var ls = umStorage(storageType);

      if (ls) {
        var v = ls.getItem(key);

        if (!v) {
          return;
        }

        if (storageType != "configure") {
          if (v.indexOf('obj-') === 0) {
            v = v.slice(4);
            return JSON.parse(v);
          } else if (v.indexOf('str-') === 0) {
            return v.slice(4);
          } else {
            return v;
          }
        } else {
          return v;
        }
      }
    };

    s.setAppStorage = function (key, value) {
      return s.setStorage(key, value, "application");
    };

    s.getAppStorage = function (key) {
      return s.getStorage(key, "application");
    };
    /*
     s.writeConfig = function(key, value){
     return s.setStorage(key, value, "configure");
     };
     s.readConfig = function(key){
     return s.getStorage(key, "configure");
     };
     */


    s.setWindowStorage = function (key, value) {
      return s.setStorage(key, value, "window");
    };

    s.getWindowStorage = function (key) {
      return s.getStorage(key, "window");
    };

    s.rmStorage = function (key) {
      var ls = umStorage();

      if (ls && key) {
        ls.removeItem(key);
      }
    };

    s.clearStorage = function () {
      var ls = umStorage();

      if (ls) {
        ls.clear();
      }
    };

    s.sysInfo = function (json, successFn, errFn) {
      if (s.canrequire()) return s.cordova.require('summer-plugin-frame.XService').sysInfo(json, successFn, errFn);
    }; //app upgrade API


    s.getAppVersion = function (json) {
      return s.callSync('XUpgrade.getAppVersion', json || {});
    };

    s.upgradeApp = function (json, successFn, errFn) {
      return s.callCordova('summer-plugin-core.XUpgrade', 'upgradeApp', json, successFn, errFn);
    };

    s.getVersion = function (json) {
      var ver = s.callSync('XUpgrade.getVersion', json || {});

      if (typeof ver == "string") {
        return JSON.parse(ver);
      } else {
        alert("getVersion' return value is not string!");
        return ver;
      }
    };

    s.upgrade = function (json, successFn, errFn) {
      return s.callCordova('summer-plugin-core.XUpgrade', 'upgrade', json, successFn, errFn);
    }; //退出


    s.exitApp = function (json, successFn, errFn) {
      return s.callCordova('summer-plugin-core.XUpgrade', 'exitApp', json || {}, successFn, errFn);
    };

    s.collectInfos = function (json) {
      var APMPARAMS = ["login", json];

      cordova.require("summer-plugin-apm.SummerAPM").insertAction(APMPARAMS, function (args) {}, function (args) {});
    }; //安卓手动获取权限


    s.getPermission = function (json, successFn, errFn) {
      if ($summer.os == 'android') {
        return s.callCordova('summer-plugin-service.XService', 'getPermission', json, successFn, errFn);
      }
    }; //构建函数,用作实例化


    s.umRef = function () {}; //储值对象，用作判断重复性


    var refManager = {
      refs: {},
      exec: function exec(id, data) {
        this.refs[id].callback(data);
        delete this.refs[id];
      }
    }; //summer追加的方法，用作公用    

    s.openRef = function (json, fn) {
      var ref = new s.umRef();
      var info = s.getSysInfo();
      ref.param = {
        ref_id: "Fn" + $s.UUID(),
        //Fn_CA12BA
        ref_winId: info.winId,
        ref_frameId: info.frameId,
        ref_callBack: prefix + ".refCallBack"
      };
      ref.callback = fn;
      refManager.refs[ref.param.ref_id] = ref;
      json.pageParam = json.pageParam || {};
      json.pageParam.refParam = ref.param;
      s.openWin(json);
    }; // summer的回调方法，用作下个页面的调用


    s.refCallBack = function (id, data) {
      refManager.exec(id, data);
    };

    s.comleteRef = function (json) {
      var str = json;

      if (typeof json == "object") {
        str = JSON.stringify(json);
      } else if (typeof json == "string") {
        str = "'" + json + "'";
      }

      var param = {};
      param.um_refId = s.pageParam.refParam.ref_id;
      param.um_winId = s.pageParam.refParam.ref_winId;
      param.um_frameId = s.pageParam.refParam.ref_frameId;
      param.um_callBack = s.pageParam.refParam.ref_callBack; // summer.refcallBack({})

      s.execScript({
        winId: param.um_winId,
        frameId: param.um_frameId,
        script: param.um_callBack + "('" + param.um_refId + "'," + str + ");" //  xxx({z:1})  xxx(zzzz)

      });
      s.closeWin();
    };

    w.$__cbm = {};

    if (!s) {
      s = {};
      w.summer = s;
    } //----------------------------------------------------------------------


    s.UMService = {
      // 统一API，summer.callService(), supported by dsl and summer
      call: function call(serviceType, jsonArgs, isSync) {
        try {
          jsonArgs = jsonArgs || {};
          var serviceparams = ""; //Setp1: jsonArgs JSON Format

          if (typeof jsonArgs == "string") {
            try {
              var json = $summer.strToJson(jsonArgs);

              if (typeof json != "object") {
                alert("调用服务[" + serviceType + "]时参数不是一个有效的json字符串。参数是" + jsonArgs);
                return;
              }

              jsonArgs = json;
            } catch (e) {
              alert("调用服务[" + serviceType + "]时参数不是一个有效的json字符串。参数是" + jsonArgs);
              alert(e);
              return;
            }
          }

          if (typeof jsonArgs == "object") {
            //Setp2: callback proxy
            s.UMService._callbackProxy(jsonArgs, "callback"); //Setp3: error proxy


            s.UMService._callbackProxy(jsonArgs, "error");

            try {
              serviceparams = $summer.jsonToStr(jsonArgs);

              if (typeof serviceparams == "object") {
                //转string后仍然为json，则报错，规定：调用服务的参数如果是字符串，必须是能转为json的字符串才行
                alert("调用服务[" + serviceType + "]时传递的参数不能标准化为json字符串，请检查参数格式" + jsonArgs);
                return;
              }
            } catch (e) {
              alert("Excp4: 校验jsonArgs是否可jsonToStr时异常:" + e);
            }

            if (isSync) {
              try {
                return adrinvoker.call2(serviceType, serviceparams);
              } catch (e) {
                alert("Excp5.1: 同步调用adrinvoker.call2异常:" + e);
              }
            } else {
              try {
                return adrinvoker.call(serviceType, serviceparams);
              } catch (e) {
                alert("Excp5.2: 异步调用adrinvoker.call异常:" + e);
              }
            }
          } else {
            alert("调用$service.call(" + serviceType + ", jsonArgs, " + isSync + ")时不合法,参数jsonArgs类型为" + typeof jsonArgs);
            return;
          }
        } catch (e) {
          var info = "";
          if (isSync) info = "Excp601:调用$service.call(\"" + serviceType + "\", jsonArgs, " + isSync + ")时发生异常,请检查!";else info = "Excp602:调用$service.call(\"" + serviceType + "\", jsonArgs)时发生异常,请检查!";
          console.log(info);
          alert(info + ", 更多请使用chrome inspect调试查看console日志;\n错误堆栈信息e为:\n" + e);
        }
      },
      _callbackProxy: function _callbackProxy(jsonArgs, callback_KEY) {
        try {
          if (!jsonArgs[callback_KEY]) return true;

          if (typeof jsonArgs[callback_KEY] == "string") {
            //callback:"mycallback()", when callback is string, it must be a global function
            var cbName = "";

            try {
              cbName = jsonArgs[callback_KEY].substring(0, jsonArgs[callback_KEY].indexOf("("));
              var cbFn = window[cbName];

              if (typeof cbFn != "function") {
                alert("Excpt2.91:" + cbName + " is not a function, and must be a global function!\nit's typeof is " + typeof cbFn);
                return false;
              }

              jsonArgs[callback_KEY] = cbFn;
            } catch (e) {
              alert("Excpt2.96: callback define error!\n" + cbName + " is not a valid global function");
              return false;
            }
          }

          if (typeof jsonArgs[callback_KEY] == "function") {
            var _cbProxy = "__UMCB_" + $summer.UUID(8);

            while ($__cbm[_cbProxy]) {
              _cbProxy = "__UMCB_" + $summer.UUID(8);
            }

            $__cbm[_cbProxy] = jsonArgs[callback_KEY];

            window[_cbProxy] = function (sender, args) {
              try {
                //alert("typeof sender == " + typeof sender +"\n typeof args == " + + typeof args);
                //summer.alert(sender);
                //summer.alert(args);
                if (args == undefined) {
                  args = sender; //compatible
                }

                $__cbm[_cbProxy](sender, args);
              } catch (e) {
                alert(e);
              } finally {
                return; //alert("del before");
                //alert(typeof $__cbm[_cbProxy]);
                //alert(typeof window[_cbProxy]);

                if (!jsonArgs["__keepCallback"]) {
                  delete $__cbm[_cbProxy];
                  delete window[_cbProxy];
                }

                alert("del after"); //alert(typeof $__cbm[_cbProxy]);
                //alert(typeof window[_cbProxy]);
              }
            };

            jsonArgs[callback_KEY] = _cbProxy + "()";
            return true;
          }

          return false;
        } catch (e) {
          alert("Excp603: Exception in handling callback proxy:\n" + e);
          return false;
        }
      },
      openHTTPS: function openHTTPS(json) {
        /*	参数：
            "ishttps" : "true"//是否开启https传输
            */
        if ($summer.isJSONObject(json)) {
          if (!json.ishttps) {
            alert("请输入true或者false");
            return;
          }

          return s.callService("UMService.openHTTPS", json, false);
        } else {
          alert("参数不是有效的JSONObject");
        }
      },
      writeConfig: function writeConfig(key, val) {
        //1、准备参数
        var args = {};

        if (arguments.length == 1 && typeof arguments[0] == "object") {
          args = key;
        } else if (arguments.length == 2) {
          args[key] = val;
        } else {
          alert("writeConfig时,参数不合法");
          return;
        } //2、调用服务


        return s.callService("UMService.writeConfigure", args, false);
      },
      readConfig: function readConfig(name) {
        //1、准备参数
        var args = {};
        if (typeof name == "string") args[name] = name;else {
          alert("readConfig时，不支持参数[name]的参数类型为" + typeof name);
          return;
        } //2、调用服务

        return s.callService("UMService.readConfigure", args, false);
      },
      setAppContext: function setAppContext(ret) {
        //1、准备参数
        var args = {};

        if (arguments.length == 1 && typeof arguments[0] == "object") {
          for (var key in ret) {
            if (key == "version") {
              args["versionname"] = ret[key];
              args["appversion"] = ret[key];
            } else if (key == "userid") {
              args["userid"] = ret[key];
              args["user"] = ret[key];
            } else if (key == "password" || key == "pass") {
              args["password"] = ret[key];
              args["pass"] = ret[key];
            } else {
              args[key] = ret[key];
            }
          }
        } else {
          alert("setAppContext时,参数不合法");
          return;
        } //2、调用服务


        return s.callService("UMCtx.setAppValue", args, false);
      },
      callAction: function callAction(controllerName, actionName, params, isDataCollect, callbackActionID, contextmapping, customArgs) {
        if (arguments.length == 1 && typeof arguments[0] == "object") {
          var args = {};
          /*
              args  = {
              viewid:"xxx.xxx.xx",
              action:"methodName",
              params:{a:1,b:2},
              //isDataCollect:true,
              autoDataBinding:true,//请求回来会是否进行数据绑定
              contextmapping:"fieldPath",//将返回结果映射到指定的Context字段上，默认为替换整个Context
              callback:"actionid",
              error:"errorActionId"//失败回调的ActionId
              }
              */

          args = controllerName;
          /*var sysParam = {
              viewid:"xxx.xxx.xx",
              action:"methodName",
              //"params" : {a:1,b:2},//自定义参数
              //isDataCollect:true,
              autoDataBinding:true,//请求回来会是否进行数据绑定
              contextmapping:"fieldPath",//将返回结果映射到指定的Context字段上，默认为替换整个Context
              callback:"actionid",
              error:"errorActionId"//失败回调的ActionId
              };
              for(key in args){
              if(!sysParam.hasOwnProperty(key) && typeof args[key] == "string"){
              args[key] = $summer.strToJson(args[key]);
              }
              }*/

          return s.callService("UMService.callAction", args, false);
        } else {
          var args = {};
          args["viewid"] = controllerName;
          args["action"] = actionName;
          args["params"] = params;
          args["isDataCollect"] = isDataCollect;
          args["callback"] = callbackActionID;
          args["contextmapping"] = contextmapping;

          if (customArgs) {
            //处理自定义参数，用于该服务的参数扩展
            for (var key in customArgs) {
              args[key] = customArgs[key];
            }
          } //$service.call("UMService.callAction","{callback:'myback', contextmapping:'data'，viewid:'"+controllerName+"',isDataCollect:'false',params:{demo:'demo'},action:'needPwd'}");


          return s.callService("UMService.callAction", args);
        }
      },
      get: function get(json) {
        /*	参数：
            url : 请求的ID
            callback : 用于绑定webview的字段名
            */
        if ($summer.isJSONObject(json)) {
          if (!json.url) {
            alert("请输入请求的url");
            return;
          }

          return s.callService("UMService.get", json, false);
        } else {
          alert("参数不是有效的JSONObject");
        }
      },
      post: function post(json) {
        if ($summer.isJSONObject(json)) {
          if (!json.url) {
            alert("请输入请求的url");
            return;
          }

          return s.callService("UMService.post", json, false);
        } else {
          alert("参数不是有效的JSONObject");
        }
      }
    };

    s.callServiceEx = function (json, successFn, errFn) {
      if (!json.params) {
        json.params = {};
      }

      if (successFn) {
        json.params["callback"] = successFn;

        s.UMService._callbackProxy(json.params, "callback");
      }

      if (errFn) {
        json.params["error"] = errFn;

        s.UMService._callbackProxy(json.params, "error");
      }

      return s.callCordova('summer-plugin-service.XService', 'callSync', json, null, null);
    }; ///////////////////////////////////////////////////////////////////////////////////////////
    //summser.UMDevie.writeFile()
    //summer.camera.open() --->summer.openCamera()


    s.UMDevice = {
      _deviceInfo_Screen: null,
      getTimeZoneID: function getTimeZoneID() {
        return s.callService("UMDevice.getTimeZoneID", "", true);
      },
      getTimeZoneDisplayName: function getTimeZoneDisplayName() {
        return s.callService("UMDevice.getTimeZoneDisplayName", {}, true); //无参调用统一使用{}
      },
      openAddressBook: function openAddressBook() {
        return s.callService("UMDevice.openAddressBook", {});
      },
      getInternalMemoryInfo: function getInternalMemoryInfo() {
        return s.callService("UMDevice.getInternalMemoryInfo", {}, true);
      },
      getExternalStorageInfo: function getExternalStorageInfo() {
        return s.callService("UMDevice.getExternalStorageInfo", {}, true);
      },
      getMemoryInfo: function getMemoryInfo() {
        return s.callService("UMDevice.getMemoryInfo", {}, true);
      },
      openWebView: function openWebView(args) {
        if (!$summer.isJSONObject(args)) {
          alert("调用gotoMapView服务时，参数不是一个有效的JSONObject");
        }
        /*
            var args = {url:"http://www.baidu.com"};
            */


        return s.callService("UMDevice.openWebView", args);
      },
      screenShot: function screenShot(args) {
        return s.callService("UMDevice.screenshot", args, true);
      },
      notify: function notify(args) {
        /*var params = {
            "sendTime" : "2015-02-03 13:54:30",
            "sendBody" : "您设置了消息提醒事件",
            "icon": "app.png"
            };*/
        s.callService("UMService.localNotification", args);
      },
      getDeviceInfo: function getDeviceInfo(jsonArgs) {
        var result = "";

        if (jsonArgs) {
          result = s.callService("UMDevice.getDeviceInfo", $summer.jsonToStr(jsonArgs), false);
        } else {
          result = s.callService("UMDevice.getDeviceInfo", "", true);
        }

        return JSON.parse(result);
      },
      getScreenWidth: function getScreenWidth() {
        if (!this._deviceInfo_Screen) {
          var strd_info = this.getDeviceInfo();
          var info = $summer.strToJson(strd_info);
          this._deviceInfo_Screen = info.screen;
        }

        if (this._deviceInfo_Screen) {
          return this._deviceInfo_Screen.width;
        } else {
          alert("未能获取到该设备的屏幕信息");
        }
      },
      getScreenHeight: function getScreenHeight() {
        if (!this._deviceInfo_Screen) {
          var strd_info = this.getDeviceInfo();
          var info = $summer.strToJson(strd_info);
          this._deviceInfo_Screen = info.screen;
        }

        if (this._deviceInfo_Screen) {
          return this._deviceInfo_Screen.height;
        } else {
          alert("未能获取到该设备的屏幕信息");
        }
      },
      getScreenDensity: function getScreenDensity() {
        if (!this._deviceInfo_Screen) {
          var strd_info = this.getDeviceInfo();
          var info = $summer.strToJson(strd_info);
          this._deviceInfo_Screen = info.screen;
        }

        if (this._deviceInfo_Screen) {
          return this._deviceInfo_Screen.density;
        } else {
          alert("未能获取到该设备的屏幕信息");
        }
      },
      currentOrientation: function currentOrientation() {
        return s.callService("UMDevice.currentOrientation", {}, true);
      },
      capturePhoto: function capturePhoto(args) {
        if (!$summer.isJSONObject(args)) {
          alert("调用capturePhoto服务时，参数不是一个有效的JSONObject");
        }

        s.callService("UMDevice.capturePhoto", args);
      },
      getAlbumPath: function getAlbumPath(args) {
        return s.callService("UMDevice.getAlbumPath", typeof args == "undefined" ? {} : args, true);
      },
      getAppAlbumPath: function getAppAlbumPath(jsonArgs) {
        if (jsonArgs) {
          if (!$summer.isJSONObject(jsonArgs)) {
            alert("调用 getAppAlbumPath 服务时，参数不是一个有效的JSONObject");
            return;
          }
        } else {
          jsonArgs = {};
        }

        return s.callService("UMDevice.getAppAlbumPath", jsonArgs, true);
      },
      getContacts: function getContacts() {
        return s.callService("UMDevice.getContactPerson", {}, true);
      },
      saveContact: function saveContact(args) {
        if (!$summer.isJSONObject(args)) {
          alert("调用saveContact服务时，参数不是一个有效的JSONObject");
        }

        return s.callService("UMDevice.saveContact", args, true);
      },
      popupKeyboard: function popupKeyboard() {
        return s.callService("UMDevice.popupKeyboard", {}, true);
      },
      listenGravitySensor: function listenGravitySensor(json) {
        json = json || {};
        json["__keepCallback"] = true;
        return s.callService("UMDevice.listenGravitySensor", json, false);
      },
      closeGravitySensor: function closeGravitySensor(json) {
        json = json || {};
        return s.callService("UMDevice.closeGravitySensor", json, false);
      },
      openApp: function openApp(args) {
        if (!$summer.isJSONObject(args)) {
          alert("调用openApp服务时，参数不是一个有效的JSONObject");
        }

        return s.callService("UMDevice.openApp", args);
      },
      getLocationInfo: function getLocationInfo() {
        return s.callService("UMDevice.getLocationInfo", {}, true);
      },
      addCalendarEvent: function addCalendarEvent(args) {
        if (!$summer.isJSONObject(args)) {
          alert("调用addCalendarEvent服务时，参数不是一个有效的JSONObject");
        }

        return s.callService("UMDevice.addCalendarEvent", args, false);
      },
      systemShare: function systemShare(args) {
        if (!$summer.isJSONObject(args)) {
          alert("调用systemShare服务时，参数不是一个有效的JSONObject");
        }

        return s.callService("UMDevice.systemShare", args, false);
      }
    };
    s.UMFile = {
      remove: function remove(args) {
        return s.callService("UMFile.remove", args, false); //默认异步
      },
      compressImage: function compressImage(args) {
        return s.callService("UMFile.compressImg", args, false); //默认异步
      },
      //涂鸦
      doodle: function doodle(args) {
        return s.callService("UMFile.startDraw", args, false); //默认异步
      },
      saveImageToAlbum: function saveImageToAlbum(args) {
        return s.callService("UMFile.saveImageToAlbum", args, false); //默认异步
      },
      exists: function exists(args) {
        return s.callService("UMFile.exists", args, true);
      },
      //获取安卓手机app内文件路径
      getStorageDirectory: function getStorageDirectory(args) {
        if ($summer.os == "android") {
          return s.callService("UMFile.getStorageDirectory", args, true);
        }
      },
      download: function download(jsonArgs) {
        if ($summer.isEmpty(jsonArgs.url)) {
          alert("参数url不能为空");
        }

        if ($summer.isEmpty(jsonArgs.filename)) {
          alert("参数filename不能为空");
        }

        if ($summer.isEmpty(jsonArgs.locate)) {
          alert("参数locate不能为空");
        }

        if ($summer.isEmpty(jsonArgs.override)) {
          alert("参数override不能为空");
        }

        if ($summer.isEmpty(jsonArgs.callback)) {
          alert("参数callback不能为空 ");
        }

        jsonArgs["__keepCallback"] = true;
        return s.callService("UMFile.download", jsonArgs); //默认异步
      },
      open: function open(args) {
        if (!$summer.isJSONObject(args)) {
          alert("调用$file.open方法时，参数不是一个有效的JSONObject");
        }

        return s.callService("UMDevice.openFile", args, false); //调用的是UMDevice的方法
      },
      getFileInfo: function getFileInfo(args) {
        var json = args;

        if (typeof args == "string") {
          json = {
            "path": args
          };
        }

        return s.callService("UMFile.getFileInfo", json, true);
      },
      openFileSelector: function openFileSelector(args) {
        return s.callService("UMFile.openFileSelector", args);
      },
      fileToBase64: function fileToBase64(args) {
        var json = args;

        if (typeof args == "string") {
          json = {
            "path": args
          };
        }

        return s.callService("UMFile.fileToBase64", json, false);
      },
      base64ToFile: function base64ToFile(args) {
        var json = args;

        if (typeof args == "string") {
          json = {
            "path": args
          };
        }

        return s.callService("UMFile.base64ToFile", json, false);
      },
      compressImg: function compressImg(json) {
        return s.callService("UMFile.compressImg", json);
      }
    };
    s.UMTel = {
      call: function call(tel) {
        if ($summer.os == 'android' || $summer.os == 'ios') {
          s.callService("UMDevice.callPhone", '{"tel":"' + tel + '"}');
        } else {
          alert("Not implementate UMP$Services$Telephone$call in $summer.os == " + $summer.os);
        }
      },
      sendMsg: function sendMsg(tel, body) {
        if (arguments.length == 1 && $summer.isJSONObject(arguments[0])) {
          var args = tel;

          if ($summer.os == 'android' || $summer.os == 'ios') {
            return s.callService("UMDevice.sendMsg", args);
          }
        } else {
          if ($summer.os == 'android' || $summer.os == 'ios') {
            //$service.call("UMDevice.sendMessage", "{recevie:'"+tel+"',message:'"+body+"'}");
            s.callService("UMDevice.sendMsg", "{tel:'" + tel + "',body:'" + body + "'}");
          }
        }
      },
      sendMail: function sendMail(receive, title, content) {
        var args = {};

        if (arguments.length == 1 && $summer.isJSONObject(arguments[0])) {
          args = receive;
        } else {
          args["receive"] = receive;
          args["title"] = title;
          args["content"] = content;
        }

        return s.callService("UMDevice.sendMail", args);
      }
    };
    s.UMCamera = {
      open: function open(args) {
        if ($summer.checkIfExist(args, ["bindfield", "callback", "compressionRatio"])) return s.callService("UMDevice.openCamera", args, false);
      },
      openPhotoAlbum: function openPhotoAlbum(json) {
        if (!json) return;
        /*
        var args = {};
        if (json.bindfield)
            args["bindfield"] = json["bindfield"];
        if (json.callback)
            args["callback"] = json["callback"];
        if (json.compressionRatio)
            args["compressionRatio"] = json["compressionRatio"];
        */

        return s.callService("UMDevice.openPhotoAlbum", json, false); //异步调用服务
      }
    };
    s.UMScanner = {
      open: function open(jsonArgs) {
        var result = "";

        if (jsonArgs) {
          if (jsonArgs["frameclose"] == null || jsonArgs["frameclose"] == undefined) {
            jsonArgs["frameclose"] = "true"; //默认扫描后关闭
          }

          result = s.callService("UMDevice.captureTwodcode", jsonArgs, false);
        } else {
          result = s.callService("UMDevice.captureTwodcode", "", true);
        }
      },
      generateQRCode: function generateQRCode(jsonArgs) {
        //twocode-size  //二维码大小，默认180*180，二维码为正方形
        //twocode-content  //二维码内容，字符串
        if ($summer.isJSONObject(jsonArgs)) {
          if (typeof jsonArgs["size"] != "undefined") {
            jsonArgs["twocode-size"] = jsonArgs["size"];
          }

          if (typeof jsonArgs["content"] != "undefined") {
            jsonArgs["twocode-content"] = jsonArgs["content"];
          }

          if (typeof jsonArgs["twocode-size"] == "undefined") {
            jsonArgs["twocode-size"] = "180";
          }

          if (typeof jsonArgs["twocode-content"] == "undefined") {
            alert("参数twocode-content不能为空，此参数用来标识扫描二维码后的返回值");
            return;
          }
        } else {
          alert("generateQRCode方法的参数不是一个有效的JSONObject!");
          return;
        }

        return s.callService("UMDevice.createTwocodeImage", jsonArgs, true);
      }
    };
    s.UMNet = {
      available: function available() {
        var result = false;

        if ($summer.os == 'android' || $summer.os == 'ios') {
          result = s.callService("UMNetwork.isAvailable", {}, true);
        }

        if (result != null && result.toString().toLowerCase() == "true") {
          return true;
        } else {
          return false;
        }
      },
      getNetworkInfo: function getNetworkInfo() {
        var result = s.callService("UMNetwork.getNetworkInfo", {}, true); //同步

        if (typeof result == "string") {
          return $summer.strToJson(result);
        } else {
          return result;
        }
      }
    };
    s.UMSqlite = {
      openDB: function openDB(args) {
        if ($summer.isJSONObject(args) && !$summer.isEmpty(args["db"])) {
          return s.callService("UMSQLite.openDB", args, false);
        } else {
          alert("参数不是一个有效的JSONObject，请使用openDB({...})形式的API");
        }
      },
      execSql: function execSql(args) {
        if ($summer.isJSONObject(args)) {
          if ($summer.isEmpty(args["db"])) {
            alert("请输入参数db");
            return;
          }

          if ($summer.isEmpty(args["sql"])) {
            alert("请输入参数sql");
            return;
          }

          return s.callService("UMSQLite.execSql", args, true);
        } else {
          alert("参数不是一个有效的JSONObject，请使用execSql({...})形式的API");
        }
      },
      //查询记录并分页返回
      //参数db：必选 数据库名字
      //参数sql：必选   查询sql语句
      //参数startIndex： 可选  起始记录数索引 默认0
      //参数endIndex：  可选  结束记录索引（含） 默认9
      query: function query(args) {
        /*
            $sqlite.query({
            "db" : dbname,
            "sql" : sql,
            "startIndex" : 0,   //从第几条记录开始
            "endIndex" : 9   //到第几条记录结束(含)
            });
            */
        if ($summer.isJSONObject(args)) {
          /*
              if($isEmpty(args["startIndex"])){
              args["startIndex"] = 0;
              }
              if($isEmpty(args["endIndex"])){
              args["endIndex"] = 9;
              }
              */
          return s.callService("UMSQLite.query", args, true);
        } else {
          alert("参数不是一个有效的JSONObject，请使用query({...})形式的API");
        }
      },
      //查询返回指定页面的数据
      //参数db：必选 数据库名字
      //参数sql：必选   查询sql语句
      //参数pagesize：  可选  每页记录数 默认10
      //参数pageIndex： 可选  指定页码 默认0
      queryByPage: function queryByPage(args) {
        /*
            $sqlite.queryByPage({
            "db" : dbName,
            "sql" : sql,
            "pageSize" : pageSize,   //pageIndex=页号，从0开始
            "pageIndex" : pageNo //pageSize=每页的记录数，从1开始
            })
            */
        if ($summer.isJSONObject(args)) {
          if ($summer.isEmpty(args["pageSize"])) {
            args["pageSize"] = 10;
          }

          if ($summer.isEmpty(args["pageIndex"])) {
            args["pageIndex"] = 0;
          }

          return s.callService("UMSQLite.queryByPage", args, true);
        } else {
          alert("参数不是一个有效的JSONObject，请使用queryByPage({...})形式的API");
        }
      },
      exist: function exist(args) {
        if ($summer.isJSONObject(args)) {
          if ($summer.isEmpty(args["db"])) {
            alert("请输入参数db");
            return;
          }

          return s.callService("UMSQLite.exist", args, true);
        } else {
          alert("参数不是一个有效的JSONObject，请使用exist({...})形式的API");
        }
      }
    };
    s.UMCache = {
      writeFile: function writeFile(filePath, content) {
        var args = {};
        if (filePath) args["path"] = filePath;
        if (content) args["content"] = content;
        return s.callService("UMFile.write", args, false);
      },
      readFile: function readFile(filePath) {
        var strContent = "";
        var args = {};
        if (filePath) args["path"] = filePath;
        strContent = s.callService("UMFile.read", args, true); //苹果安卓统一返回处理结果

        if (strContent && strContent != "") {
          try {
            /*  取出缓存的值不再强行转化为json，按照绝大多数平台通常的处理方式，缓存取出来后必要时需自行类型转化
                obj = $stringToJSON(strContent);
                return obj;
                */
            return strContent;
          } catch (e) {
            return strContent;
          }
        } else {
          return null;
        }
      }
    };
    /*service*/

    s.openHTTPS = s.UMService.openHTTPS;
    s.callService = s.UMService.call;
    s.callAction = s.UMService.callAction;
    s.writeConfig = s.UMService.writeConfig;
    s.readConfig = s.UMService.readConfig;
    s.setAppContext = s.UMService.setAppContext;
    /*device*/

    s.getTimeZoneID = s.UMDevice.getTimeZoneID;
    s.getTimeZoneDisplayName = s.UMDevice.getTimeZoneDisplayName;
    s.openAddressBook = s.UMDevice.openAddressBook;
    s.getInternalMemoryInfo = s.UMDevice.getInternalMemoryInfo;
    s.getExternalStorageInfo = s.UMDevice.getExternalStorageInfo;
    s.getMemoryInfo = s.UMDevice.getMemoryInfo;
    s.openWebView = s.UMDevice.openWebView;
    s.screenShot = s.UMDevice.screenShot;
    s.notify = s.UMDevice.notify;
    s.getDeviceInfo = s.UMDevice.getDeviceInfo;
    s.getScreenWidth = s.UMDevice.getScreenWidth;
    s.getScreenHeight = s.UMDevice.getScreenHeight;
    s.getScreenDensity = s.UMDevice.getScreenDensity;
    s.currentOrientation = s.UMDevice.currentOrientation;
    s.capturePhoto = s.UMDevice.capturePhoto;
    s.getAlbumPath = s.UMDevice.getAlbumPath;
    s.getAppAlbumPath = s.UMDevice.getAppAlbumPath;
    s.getContacts = s.UMDevice.getContacts;
    s.saveContact = s.UMDevice.saveContact;
    s.popupKeyboard = s.UMDevice.popupKeyboard;
    s.listenGravitySensor = s.UMDevice.listenGravitySensor;
    s.closeGravitySensor = s.UMDevice.closeGravitySensor;
    s.openApp = s.UMDevice.openApp;
    s.getLocationInfo = s.UMDevice.getLocationInfo;
    s.addCalendarEvent = s.UMDevice.addCalendarEvent;
    s.systemShare = s.UMDevice.systemShare;
    /*file*/

    s.removeFile = s.UMFile.remove;
    s.compressImage = s.UMFile.compressImage;
    s.doodle = s.UMFile.doodle;
    s.saveImageToAlbum = s.UMFile.saveImageToAlbum;
    s.exists = s.UMFile.exists;
    s.getStorageDirectory = s.UMFile.getStorageDirectory;
    s.download = s.UMFile.download;
    s.openFile = s.UMFile.open;
    s.getFileInfo = s.UMFile.getFileInfo;
    s.openFileSelector = s.UMFile.openFileSelector;
    s.fileToBase64 = s.UMFile.fileToBase64;
    s.base64ToFile = s.UMFile.base64ToFile;
    s.compressImg = s.UMFile.compressImg;
    /*tel*/

    s.callPhone = s.UMTel.call;
    s.sendMsg = s.UMTel.sendMsg;
    s.sendMail = s.UMTel.sendMail;
    /*cache*/

    s.writeFile = s.UMCache.writeFile;
    s.readFile = s.UMCache.readFile;
    /*camera*/

    s.openCamera = s.UMCamera.open;
    s.openPhotoAlbum = s.UMCamera.openPhotoAlbum;
    /*scanner*/

    s.openScanner = s.UMScanner.open;
    s.generateQRCode = s.UMScanner.generateQRCode;
    /*net*/

    s.netAvailable = s.UMNet.available;
    s.getNetworkInfo = s.UMNet.getNetworkInfo;

    s.ajax = function (json, successFn, errFn) {
      if (json.type.toLowerCase() == "get") {
        return summer.get(json.url || "", json.param || {}, json.header || {}, successFn, errFn);
      } else if (json.type.toLowerCase() == "post") {
        if ($summer.os == "android" && $ && json.header && json.header["Content-Type"] == "application/json") {
          var jsonAjax = {};
          jsonAjax["type"] = 'post';
          jsonAjax["url"] = json.url;
          if (json.param) jsonAjax["data"] = JSON.stringify(json.param); //后端得到json字符串

          if (json.header && json.header["Content-Type"]) jsonAjax["contentType"] = json.header["Content-Type"];
          jsonAjax["processData"] = true;
          if (json.dataType) jsonAjax["dataType"] = json.dataType; //当服务器返回json,jquery返回的是json还是jsonstring

          if (json.header) {
            jsonAjax["beforeSend"] = function (request) {
              for (var key in json.header) {
                if (key == "Content-Type") continue;
                request.setRequestHeader(key, json.header[key]);
              }
            };
          }

          jsonAjax["success"] = function (data) {
            if (successFn) successFn({
              data: data
            });
          };

          jsonAjax["error"] = function (data) {
            if (errFn) errFn({
              data: data
            });
          };

          return $.ajax(jsonAjax);
        } else {
          return summer.post(json.url || "", json.param || {}, json.header || {}, successFn, errFn);
        }
      }
    };

    s.get = function (url, param, header, successFn, errFn) {
      var startTime = new Date().getTime();
      return cordovaHTTP.get(url || "", param || {}, header || {}, function (data) {
        var APMJSON = {
          "type": "get",
          "startTime": startTime,
          "endTime": new Date().getTime(),
          "url": url
        };
        var APMPARAMS = ["FeLoad", APMJSON];

        cordova.require("summer-plugin-apm.SummerAPM").insertAction(APMPARAMS, function (args) {}, function (args) {});

        successFn(data);
      }, errFn);
    };

    s.post = function (url, param, header, successFn, errFn) {
      var startTime = new Date().getTime();
      return cordovaHTTP.post(url || "", param || {}, header || {}, function (data) {
        var APMJSON = {
          "type": "get",
          "startTime": startTime,
          "endTime": new Date().getTime(),
          "url": url
        };
        var APMPARAMS = ["FeLoad", APMJSON];

        cordova.require("summer-plugin-apm.SummerAPM").insertAction(APMPARAMS, function (args) {}, function (args) {});

        successFn(data);
      }, errFn);
    };

    s.getLocation = function (successFn, errFn) {
      return navigator.geolocation.getCurrentPosition(successFn, errFn);
    };

    s.getNativeLocation = function (json, successFn, errFn) {
      if (!json) {
        return;
      }

      if ($summer.os == "android") {
        json["callback"] = successFn;
        json["error"] = errFn;
        return s.callService("SummerGPS.getLocation", json, false);
      } else {
        json["callback"] = successFn;
        json["error"] = errFn;
        return s.callService("UMDevice.getLocation", json, false);
      }

      return navigator.geolocation.getCurrentPosition(successFn, errFn);
    };

    e.writeConfig = function (json, successFn, errFn) {
      s.callService("UMEMMService.writeConfig", json, false);
    };

    e.autofind = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.autofind', json, false);
    };

    e.registerDevice = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.registerDevice', json, false);
    };

    e.openAdmin = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMMDMService.openAdmin', json, false);
    };

    e.openMDM = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMMDMService.openMDM', json, false);
    };

    e.closeMDM = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMMDMService.closeMDM', json, false);
    };

    e.login = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.login', json, false);
    };

    e.logout = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.logout', json, false);
    };

    e.getUserInfo = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.getUserInfo', json, false);
    };

    e.modifyPassword = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.modifyPassword', json, false);
    };

    e.modifyAvatar = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.modifyAvatar', json, false);
    };

    e.getApps = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.getApps', json, false);
    };

    e.getDocs = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.getDocs', json, false);
    };

    e.startStrategy = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.startStrategy', json, false);
    };

    e.stopStrategy = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.stopStrategy', json, false);
    };

    e.feedback = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.feedback', json, false);
    };

    e.getUserCommonApps = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.getUserCommonApps', json, false);
    };

    e.getSystemApps = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.getSystemApps', json, false);
    };

    e.getRecommendedApps = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.getRecommendedApps', json, false);
    };

    e.updateUserApps = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.updateUserApps', json, false);
    };

    e.upgradeWebApp = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      json["__keepCallback"] = true;
      return s.callService('UMEMMService.upgradeWebApp', json, false);
    };

    e.installWebApp = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      json["__keepCallback"] = true;
      return s.callService('UMEMMService.installWebApp', json, false);
    };

    e.openWebApp = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.openWebApp', json, false);
    };

    e.removeWebApp = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.removeWebApp', json, false);
    };

    e.upgradeSummerApp = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      json["__keepCallback"] = true;
      return s.callService('UMEMMService.upgradeSummerApp', json, false);
    };

    e.upgradeSilentSignal = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      s.callService("UMEMMService.upgradeSilentSignal", json, false);
    };

    e.getLocalApps = function (json, successFn, errFn) {
      json["callback"] = successFn;
      json["error"] = errFn;
      return s.callService('UMEMMService.getLocalApps', json, false);
    };

    /*
     * Summer JavaScript Library
     * Copyright (c) 2019 yonyou.com
     * Author: mtl core team
     * Version: 1.0.0
     */
    var $s$1 = {};
    var s$1 = {
      $: $s$1
    }; // u = window.$summer || {};
    window.$summer = $s$1;
    window.summer = s$1; //debug

    w.$summer.__debug = false;

    function MTLAndroid () {
      var jsapi_list = ['startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getLocalImgData', 'translateVoice', 'getNetworkType', 'openLocation', 'getLocation', 'scanQRCode'];
      var miniProgramApi = ['navigateBack', 'navigateTo', 'redirectTo', 'switchTab', 'reLaunch', 'postMessage', 'getEnv'];

      for (var _i = 0, _arr = [].concat(jsapi_list, miniProgramApi); _i < _arr.length; _i++) {
        var api = _arr[_i];

        mtl[api] = function (object) {// call(api, object)
        }.bind(mtl);
      }

      mtl['getLocation'] = function (object) {
        summer.getPermission(["android.permission.INTERNET", "android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_COARSE_LOCATION"], //所需权限参数，多个权限用逗号分隔 
        function (response) {
          //成功回调
          summer.getNativeLocation({
            "single": "true"
          }, function (args) {
            object.success(args);
          }, function (args) {
            object.fail(args);
          });
        }, function (response) {
          //失败回调
          object.fail(response);
        });
      };

      mtl._configPermission = function (object) {
        return new Promise(function (resolve, reject) {
          resolve('Android 无需授权');
        });
      }.bind(mtl);
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var runtime_1 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var runtime = (function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);

        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);

        return generator;
      }
      exports.wrap = wrap;

      // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";

      // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      var ContinueSentinel = {};

      // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}

      // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      var IteratorPrototype = {};
      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype =
        Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] =
        GeneratorFunction.displayName = "GeneratorFunction";

      // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          prototype[method] = function(arg) {
            return this._invoke(method, arg);
          };
        });
      }

      exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor
          ? ctor === GeneratorFunction ||
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction"
          : false;
      };

      exports.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };

      // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      exports.awrap = function(arg) {
        return { __await: arg };
      };

      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value &&
                typeof value === "object" &&
                hasOwn.call(value, "__await")) {
              return Promise.resolve(value.__await).then(function(value) {
                invoke("next", value, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return Promise.resolve(value).then(function(unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new Promise(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise =
            // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
        }

        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };
      exports.AsyncIterator = AsyncIterator;

      // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      exports.async = function(innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList)
        );

        return exports.isGeneratorFunction(outerFn)
          ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
            });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;

        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }

            // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;

            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);

            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;

            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done
                ? GenStateCompleted
                : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };

            } else if (record.type === "throw") {
              state = GenStateCompleted;
              // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }

      // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError(
              "The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (! info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value;

          // Resume execution at the desired location (see delegateYield).
          context.next = delegate.nextLoc;

          // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }

        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        }

        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
      }

      // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp);

      Gp[toStringTagSymbol] = "Generator";

      // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      Gp[iteratorSymbol] = function() {
        return this;
      };

      Gp.toString = function() {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();

        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }

          // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1, next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;

              return next;
            };

            return next.next = next;
          }
        }

        // Return an iterator with no values.
        return { next: doneResult };
      }
      exports.values = values;

      function doneResult() {
        return { value: undefined$1, done: true };
      }

      Context.prototype = {
        constructor: Context,

        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;

          this.method = "next";
          this.arg = undefined$1;

          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" &&
                  hasOwn.call(this, name) &&
                  !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },

        stop: function() {
          this.done = true;

          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },

        dispatchException: function(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !! caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }

              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }

              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }

              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },

        abrupt: function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev &&
                hasOwn.call(entry, "finallyLoc") &&
                this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry &&
              (type === "break" ||
               type === "continue") &&
              finallyEntry.tryLoc <= arg &&
              arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },

        complete: function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" ||
              record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },

        finish: function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },

        "catch": function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }

          // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw new Error("illegal catch attempt");
        },

        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      };

      // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.
      return exports;

    }(
      // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      module.exports
    ));

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
    });

    // function loadJsFile(src) {
    //   return new Promise(resolve => {
    //     let head = document.head;
    //     let script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = src;
    //     script.onload = resolve;
    //     head.appendChild(script);
    //   });
    // }

    /**
     * MTL JS Loader
     */

    var MTL =
    /*#__PURE__*/
    function () {
      function MTL() {
        this.isReady = false; // 获取当前平台信息

        var userAgent = navigator.userAgent;
        var platform = navigator.platform;

        if (platform == 'MacIntel' || userAgent.includes('miniProgram')) {
          platform = 'wx';
        }

        this.platform = platform; // 获取 mtl.js 文件路径

        var scripts = document.getElementsByTagName("script");
        var src = null;

        for (var i = 0; i < scripts.length; i++) {
          var script = scripts[i];

          if (script.src.includes('mtl.js')) {
            src = script.src;
            break;
          }
        }

        if (!src) {
          return;
        }

        this.jsFileDir = this._removeLastComponentOfPath(src);
        this.loadJsapi();
      }

      var _proto = MTL.prototype;

      _proto._removeLastComponentOfPath = function _removeLastComponentOfPath(path) {
        var components = path.split('/');
        components.pop();
        return components.join('/');
      };

      _proto.configPermission = function configPermission(callback) {
        var _this = this;

        if (this.isReady) {
          callback({
            code: 0,
            response: '已申请过权限',
            error: null
          });
        } else {
          this._configPermission().then(function (res) {
            callback({
              code: 0,
              response: res,
              error: null
            });
            _this.isReady = true;
          }).catch(function (err) {
            callback({
              code: 1,
              response: null,
              error: err
            });
          });
        }
      };

      _proto.loadJsapi = function loadJsapi() {
        if (this.platform == 'wx') ; else if (this.platform == 'iPhone') ; else if (this.platform == 'Android' || this.platform.includes('Linux')) {
          // loadJsFile(this.jsFileDir + '/platform/mtl.android.js')
          MTLAndroid();
        }

        (window.mtl_ready || function () {})();
      };

      return MTL;
    }();

    var mtl$1 = new MTL();

    return mtl$1;

}));
