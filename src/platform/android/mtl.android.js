export default {
  /**
   * 
   * @param {*} object 
   */
  getLocation: function (object) {
    summer.getPermission(
      ["android.permission.INTERNET", 
      "android.permission.ACCESS_FINE_LOCATION", 
      "android.permission.ACCESS_COARSE_LOCATION"], 
      //所需权限参数，多个权限用逗号分隔 
      function (response) {
        //成功回调
        summer.getNativeLocation(
          { "single": "true" },
          function (args) {
            object.success(args)
          }, function (args) {
            object.fail(args)
          });
      },
      function (response) {
        //失败回调
        object.fail(response)
      });
  },
  /**
   * 
   * @param {*} object 
   */
  _configPermission: function (object) {
    return new Promise((resolve, reject) => {
      resolve('Android 无需授权')
    })
  }

}
