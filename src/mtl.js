import platform from './core/getEnv'
import wx_apilist from './platform/wx/mtl.wx'

function prepareNamespace(symbolPath, context) {
  if (!symbolPath) {
    return context;
  }
  let parts = symbolPath.split('.');
  let cur = context;
  for (let i = 0, part; part = parts[i]; ++i) {
    cur = cur[part] = cur[part] || {};
  }
  return cur;
}

const merge = (target, source) => {
  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
  }
  Object.assign(target || {}, source)
  return target
}

class MTL {
  constructor() {
    this.apilist = []
    this.platform = platform
  }

  /**
   * 扩展 mtl 的 api 
   * @param {String} api 扩展方法名
   * @param {String} platform 扩展平台: all|ios|android|h5;
   * @param {String} symbolPath 扩展方法绑定字段，例如 api = 'm1', symbolPath = 'xx' 则注册完后调用方式为 mtl.xx.m1。
   * @param {Function} fn 扩展方法绑定字段
   */
  register({ api, platform = 'all', symbolPath = null, fn }) {
    if (platform != 'all' && platform != this.platform) {
      return
    }
    if (this.apilist[api]) {
      throw new Error(`api "${api}" already exists!`)
    }
    this.apilist[api] = fn
    if (symbolPath) {
      prepareNamespace(symbolPath, mtl)
      let obj = {}
      let cur = obj;
      let parts = symbolPath.split('.');
      for (let part of parts) {
        cur = cur[part] = {}
      }
      cur[api] = fn
      merge(mtl, obj)
    }
    else {
      mtl[api] = fn
    }
  }
}

let mtl = new MTL();
(function () {
  switch (platform) {
    case 'wx':
      window.wx_apilist = wx_apilist
      for (let obj of wx_apilist) {
        mtl.register(obj)
      }
      break
    case 'ios':
      break
    case 'android':
      break
    case 'h5':
      break
  }
})();

export default mtl