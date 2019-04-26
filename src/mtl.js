import './summer'
import './platform/wx/mtl.sha1.bundle'

import register from './core/register'
import { miniProgramApi } from './core/base.apilist'
import platform from './core/getEnv';

// platform
import WX_API_LIST from './platform/wx/mtl.wx'
import IOS_API_LIST from './platform/ios/mtl.ios'
import ANDROID_API_LIST from './platform/android/mtl.android'

/**
 * MTL JS Loader
 */
class MTL {
  constructor() {
    this.isReady = false
  }
  /**
   * 
   * @param {*} callback 
   */
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

  /**
   * 
   */
  register(){
    register()
  }
}

let mtl = new MTL()

mtl.configPermission()

// 顶层设计：mtl 上挂载的 API
miniProgramApi.map((arr, api, i) => {
  let apilist = null;

  switch(platform){
    case "ios":
      apilist = IOS_API_LIST;
      break;
    case 'wx':
      apilist = WX_API_LIST;
      break;
    case 'android':
      apilist = ANDROID_API_LIST;
      break;
    default:
      break;
  }

  mtl[api] = apilist[api];
})

export default mtl