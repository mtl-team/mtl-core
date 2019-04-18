// 加载 .js 文件
function loadJsFile(src) {
  return new Promise(function (resolve) {
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = resolve;
    head.appendChild(script);
  });
}

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
    if (this.platform == 'wx') {
      loadJsFile(this.jsFileDir + '/mtl.wx.js');
    } else if (this.platform == 'iPhone') {
      loadJsFile(this.jsFileDir + '/mtl.ios.js');
    } else if (this.platform == 'Android' || this.platform.includes('Linux')) {
      loadJsFile(this.jsFileDir + '/mtl.android.js');
    }

    (window.mtl_ready || function () {})();
  };

  return MTL;
}();

this.mtl = new MTL();