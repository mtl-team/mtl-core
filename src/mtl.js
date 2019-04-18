// 加载 .js 文件
function loadJsFile(src) {
  return new Promise(resolve => {
    let head = document.head;
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = resolve;
    head.appendChild(script);
  });
}

class MTL {
  constructor() {

    this.isReady = false

    // 获取当前平台信息
    let userAgent = navigator.userAgent
    let platform = navigator.platform
    if (platform == 'MacIntel' || userAgent.includes('miniProgram')) {
      platform = 'wx'
    }
    this.platform = platform

    // 获取 mtl.js 文件路径
    let scripts = document.getElementsByTagName("script")
    let src = null;
    for (let i = 0; i < scripts.length; i++) {
      let script = scripts[i];
      if (script.src.includes('mtl.js')) {
        src = script.src;
        break;
      }
    }
    if (!src) {
      return;
    }
    this.jsFileDir = this._removeLastComponentOfPath(src)

    this.loadJsapi()
  }

  _removeLastComponentOfPath(path) {
    let components = path.split('/');
    components.pop();
    return (components.join('/'));
  }

  configPermission(callback) {
    if (this.isReady) {
      callback({
        code: 0,
        response: '已申请过权限',
        error: null
      })
    }
    else {
      this._configPermission().then(res => {
        callback({
          code: 0,
          response: res,
          error: null
        })
        this.isReady = true
      }).catch(err => {
        callback({
          code: 1,
          response: null,
          error: err
        })
      })
    }
  }

  loadJsapi() {
    if (this.platform == 'wx') {
      loadJsFile(this.jsFileDir + '/mtl.wx.js')
    }
    else if (this.platform == 'iPhone') {
      loadJsFile(this.jsFileDir + '/mtl.ios.js')
    }
    else if (this.platform == 'Android' || this.platform.includes('Linux')) {
      loadJsFile(this.jsFileDir + '/mtl.android.js')
    }
    (window.mtl_ready || function() {})()
  }
}
this.mtl = new MTL()