import platform from './core/getEnv'
import wx_apilist from './platform/wx/mtl.wx'

class MTL {
  constructor() {
    this.apilist = []
    this.platform = platform
  }

  register({ api, platform = 'all', symbolPath = null, fn }) {
    if (platform != 'all' && platform != this.platform) {
      return
    }
    if (this.apilist[api]) {
      throw new Error(`api "${api}" already exists!`)
    }
    this.apilist[api] = fn
    if (symbolPath) {
      // TODO:
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