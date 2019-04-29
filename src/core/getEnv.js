/**
 * 获取环境参数
 */

// 获取当前平台 
let platform = (function () {
  let { userAgent, platform } = navigator
  if (userAgent.includes('miniProgram')) {
    platform = 'wx'
  }
  else if (platform.includes('Linux')) {
    platform = 'android'
  }
  else if (platform == 'iPhone' || platform == 'iPad') {
    platform = 'ios'
  }

  let supportedPlatforms = [
    'wx',
    'android',
    'ios'
  ]
  platform = platform && platform.toLowerCase()
  if (!supportedPlatforms.includes(platform)) {
    // TODO: warning('暂未支持的该平台')
    platform = 'h5'
  }
  return platform
})()

// export const isAlipay = false;
// export const isWebApp = false;

export default platform
