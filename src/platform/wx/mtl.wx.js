
import config from './mtl.wx.config.json'
import sha1 from 'sha1'
import wx_apilist from './mtl.wx.apilist'

// 请求微信 ticket 默认接口
// const defaultTicketServer = 'https://mdoctor.yonyoucloud.com/wechat/api/getticket'
const defaultTicketServer = 'http://10.3.13.9:88/wechat/api/getticket'

let wx_permissionStatus = 0
let wx = window.wx

// http 请求
function httpGet(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          return resolve(request.responseText);
        }
        else {
          return reject(request.status);
        }
      }
      else {
        // HTTP请求还在继续...
      }
    }
    request.open('GET', url);
    request.send();
  });
}

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

function getTicket({ access_token_source: source, access_token_url: url, appid, secret }) {
  return new Promise((resolve, reject) => {
    if (source == 'debug') {
      url = defaultTicketServer + "?access_token_source=debug"
    }
    else if (source == 'secret') {
      url = `${defaultTicketServer}?access_token_source=secret&appid=${appid}&secret=${secret}`
    }
    httpGet(url).then(resolve).catch(reject)
  });
}

// 请求微信 jssdk 权限
async function configPermission() {
  const res = await getTicket(config);
  let { status, msg, data } = JSON.parse(res);
  if (status == 0) {
    return false;
  }
  let { appid, ticket } = data;
  let url = document.URL;
  let nonceStr = 'Wm3WZYTPz0wzccnW';
  let timestamp = new Date().getTime();
  let encodingStr = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;
  let signature = sha1(encodingStr);
  return new Promise((resolve, reject) => {
    wx.config({
      debug: false,
      appId: appid,
      timestamp: timestamp,
      nonceStr: nonceStr,
      signature: signature,
      jsApiList: wx_apilist.base // 必填，需要使用的JS接口列表
    });
    wx.ready(resolve);
    wx.error(reject);
  });
}

let apilist = wx_apilist.base.map(api => {
  return {
    api: api,
    fn: (obj) => {
      let fn = wx[api]
      let status = wx_permissionStatus || 0  // 0.初始状态;1.成功;-1:失败;
      if (status == 1) {
        fn(obj)
      }
      else {
        configPermission().then(() => {
          wx_permissionStatus = 1
          fn(obj)
        }).catch(err => {
          wx_permissionStatus = -1
          if (obj.error) {
            obj.error(err)
          }
        })
      }
    }
  }
})
apilist = Object.assign(apilist, wx_apilist.miniProgram.map(api => {
  return {
    api: api,
    fn: wx.miniProgram[api]
  }
}))

export default apilist