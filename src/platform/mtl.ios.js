!(function (mtl) {

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
    mtl.getLocation = function (object) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          object.success({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        function (error) {
          object.error(error)
        })
    }
    mtl.navigateTo = function (object) {
      cordova.exec(null, null, "MDDViewPlugin", "login", null)
    }
    // for (let api of [...jsapi_list, ...miniProgramApi]) {
    //   mtl[api] = function (object) {
    //     // call(api, object)
    //   }.bind(mtl);
    // }
    mtl._configPermission = function (object) {
      return new Promise((resolve, reject) => {
        resolve('iOS 无需授权')
      })
    }.bind(mtl);
  }

  if (mtl == null) {
    return;
  }
  loadJsapi(mtl)

})(this.mtl);