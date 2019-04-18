!function (mtl) {
  var jsapi_list = ['startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getLocalImgData', 'translateVoice', 'getNetworkType', 'openLocation', 'getLocation', 'scanQRCode'];

  function loadJsapi(mtl) {
    var miniProgramApi = ['navigateBack', 'navigateTo', 'redirectTo', 'switchTab', 'reLaunch', 'postMessage', 'getEnv'];

    for (var _i = 0, _arr = [].concat(jsapi_list, miniProgramApi); _i < _arr.length; _i++) {
      var api = _arr[_i];

      mtl[api] = function (object) {// call(api, object)
      }.bind(mtl);
    }

    mtl['getLocation'] = function (object) {
      summer.getPermission(["android.permission.INTERNET", "android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_COARSE_LOCATION"], //所需权限参数，多个权限用逗号分隔 
      function (response) {
        //成功回调
        summer.getNativeLocation({
          "single": "true"
        }, function (args) {
          object.success(args);
        }, function (args) {
          object.fail(args);
        });
      }, function (response) {
        //失败回调
        object.fail(response);
      });
    };

    mtl._configPermission = function (object) {
      return new Promise(function (resolve, reject) {
        resolve('Android 无需授权');
      });
    }.bind(mtl);
  }

  if (mtl == null) {
    return;
  }

  loadJsapi(mtl);
}(this.mtl);