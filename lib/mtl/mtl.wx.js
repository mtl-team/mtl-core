import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
!function (mtl) {
  // const defaultTicketServer = "https://mdoctor.yonyoucloud.com/wechat/api/getticket"
  var defaultTicketServer = "http://10.3.13.9:88/wechat/api/getticket";
  var jsapi_list = ['startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getLocalImgData', 'translateVoice', 'getNetworkType', 'openLocation', 'getLocation', 'scanQRCode']; // http 请求

  function get(url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            return resolve(request.responseText);
          } else {
            return reject(request.status);
          }
        } else {// HTTP请求还在继续...
        }
      };

      request.open('GET', url);
      request.send();
    });
  } // 读取 json 文件


  function readJsonFile(file) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.overrideMimeType("application/json");
      request.open("GET", file, true);

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            return resolve(request.responseText);
          } else {
            return reject(request.status);
          }
        }
      };

      request.send(null);
    });
  } // 请求 ticket


  function getJsApiTicket(data) {
    return new Promise(function (resolve, reject) {
      var url = null;

      if (data.access_token_source == 'debug') {
        url = defaultTicketServer + "?access_token_source=debug";
      } else if (data.access_token_source == 'url') {
        url = data.url;
      } else if (data.access_token_source == 'secret') {
        var appid = data.appid;
        var secret = data.secret;
        url = defaultTicketServer + "?access_token_source=secret&appid=" + appid + "&secret=" + secret;
      }

      get(url).then(resolve).catch(reject);
    });
  }

  function _wx_configPermission() {
    return _wx_configPermission2.apply(this, arguments);
  }

  function _wx_configPermission2() {
    _wx_configPermission2 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var dir, data;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dir = mtl.jsFileDir;
              _context.next = 3;
              return loadJsFile(dir + '/mtl.sha1.bundle.js');

            case 3:
              _context.next = 5;
              return readJsonFile(dir + '/mtl.jsapi.config.json');

            case 5:
              data = _context.sent;
              return _context.abrupt("return", getJsApiTicket(JSON.parse(data)).then(function (res) {
                return new Promise(function (resolve, reject) {
                  var json = JSON.parse(res);
                  var status = json.status,
                      msg = json.msg,
                      data = json.data;

                  if (status == 0) {
                    reject(msg);
                    return;
                  }

                  var appid = data.appid,
                      ticket = data.ticket;
                  var url = document.URL;
                  var nonceStr = 'Wm3WZYTPz0wzccnW';
                  var timestamp = new Date().getTime();
                  var encodingStr = "jsapi_ticket=" + ticket + "&noncestr=" + nonceStr + "&timestamp=" + timestamp + "&url=" + url;
                  var signature = window.sha1(encodingStr);
                  var config = {
                    debug: false,
                    // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: appid,
                    // 必填，公众号的唯一标识
                    timestamp: timestamp,
                    // 必填，生成签名的时间戳
                    nonceStr: nonceStr,
                    // 必填，生成签名的随机串
                    signature: signature,
                    // 必填，签名
                    jsApiList: jsapi_list // 必填，需要使用的JS接口列表

                  };
                  wx.config(config);
                  wx.ready(resolve);
                  wx.error(reject);
                });
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _wx_configPermission2.apply(this, arguments);
  }

  function loadJsapi(mtl) {
    var miniProgramApi = ['navigateBack', 'navigateTo', 'redirectTo', 'switchTab', 'reLaunch', 'postMessage', 'getEnv'];

    for (var _i = 0, _jsapi_list = jsapi_list; _i < _jsapi_list.length; _i++) {
      var api = _jsapi_list[_i];
      mtl[api] = wx[api];
    }

    for (var _i2 = 0, _miniProgramApi = miniProgramApi; _i2 < _miniProgramApi.length; _i2++) {
      var _api = _miniProgramApi[_i2];
      mtl[_api] = wx.miniProgram[_api];
    }

    mtl._configPermission = _wx_configPermission;
  }

  if (mtl == null) {
    return;
  }

  loadJsapi(mtl);
}(this.mtl);