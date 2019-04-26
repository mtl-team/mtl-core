
// 获取当前平台信息
let userAgent = navigator.userAgent
let platform = navigator.platform

if (platform == 'MacIntel' || userAgent.includes('miniProgram')) {
  platform = 'wx'
}

// export const isAlipay = false;
// export const isWebApp = false;

export default platform
