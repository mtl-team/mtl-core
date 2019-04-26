export default {
  /**
   * 
   * @param {*} object 
   */
  getLocation: function (object) {
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
  },
  /**
   * 
   * @param {*} object 
   */
  navigateTo: function (object) {
      cordova.exec(null, null, "MDDViewPlugin", "login", null)
  },
   
  /**
   * 
   * @param {*} object 
   */
  _configPermission: function (object) {
      return new Promise((resolve, reject) => {
        resolve('iOS 无需授权')
      })
  }
}