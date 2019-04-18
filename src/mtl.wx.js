!(function (mtl) {
  // const defaultTicketServer = "https://mdoctor.yonyoucloud.com/wechat/api/getticket"
  const defaultTicketServer = "http://10.3.13.9:88/wechat/api/getticket"
  const jsapi_list = [
    'startRecord',
    'stopRecord',
    'onVoiceRecordEnd',
    'playVoice',
    'pauseVoice',
    'stopVoice',
    'onVoicePlayEnd',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'getLocalImgData',
    'translateVoice',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'scanQRCode',
  ]

  // http 请求
  function get(url) {
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

  // 读取 json 文件
  function readJsonFile(file) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.overrideMimeType("application/json");
      request.open("GET", file, true);
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            return resolve(request.responseText);
          }
          else {
            return reject(request.status);
          }
        }
      }
      request.send(null);
    })
  }

  // 请求 ticket
  function getJsApiTicket(data) {
    return new Promise((resolve, reject) => {
      let url = null
      if (data.access_token_source == 'debug') {
        url = defaultTicketServer + "?access_token_source=debug"
      }
      else if (data.access_token_source == 'url') {
        url = data.url
      }
      else if (data.access_token_source == 'secret') {
        let appid = data.appid
        let secret = data.secret
        url = `${defaultTicketServer}?access_token_source=secret&appid=${appid}&secret=${secret}`
      }
      get(url).then(resolve).catch(reject);
    });
  }

  async function _wx_configPermission() {
    let dir = mtl.jsFileDir;
    await loadJsFile(dir + '/mtl.sha1.bundle.js')
    let data = await readJsonFile(dir + '/mtl.jsapi.config.json')
    return getJsApiTicket(JSON.parse(data)).then(res => {
      return new Promise((resolve, reject) => {
        let json = JSON.parse(res)
        let { status, msg, data } = json
        if (status == 0) {
          reject(msg)
          return
        }
        let { appid, ticket } = data
        let url = document.URL
        let nonceStr = 'Wm3WZYTPz0wzccnW'
        let timestamp = new Date().getTime()
        let encodingStr = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`
        let signature = window.sha1(encodingStr);

        let config = {
          debug: false,         // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: appid,         // 必填，公众号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: nonceStr,   // 必填，生成签名的随机串
          signature: signature, // 必填，签名
          jsApiList: jsapi_list // 必填，需要使用的JS接口列表
        }
        wx.config(config);
        wx.ready(resolve);
        wx.error(reject);
      })
    })
  }

  function loadJsapi(mtl) {
    let miniProgramApi = [
      'navigateBack',
      'navigateTo',
      'redirectTo',
      'switchTab',
      'reLaunch',
      'postMessage',
      'getEnv'
    ]
    for (let api of jsapi_list) {
      mtl[api] = wx[api]
    }
    for (let api of miniProgramApi) {
      mtl[api] = wx.miniProgram[api]
    }
    mtl._configPermission = _wx_configPermission;
  }

  if (mtl == null) {
    return;
  }
  loadJsapi(mtl)

})(this.mtl);