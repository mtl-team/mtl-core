import './summer/index'

import MTLAndroid from './platform/mtl.android'
import MTLIOS from './platform/mtl.ios'
import MTLWX from './platform/mtl.wx'

// // 加载 .js 文件
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
      // loadJsFile(this.jsFileDir + '/platform/mtl.wx.js')
      MTLWX()
    }
    else if (this.platform == 'iPhone') {
      // loadJsFile(this.jsFileDir + '/platform/mtl.ios.js')
      MTLIOS()
    }
    else if (this.platform == 'Android' || this.platform.includes('Linux')) {
      // loadJsFile(this.jsFileDir + '/platform/mtl.android.js')
      MTLAndroid()
    }
    (window.mtl_ready || function() {})()
  }
}

let mtl = new MTL()

export default mtl