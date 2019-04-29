let apilist = [
  {
    api: 'getNetworkType',
    fn: function (obj) {
      mtlBridge.callAsync('getNetworkType', obj)
    }
  },
  {
    api: 'getLocation',
    fn: function (obj) {

    }
  }
]

export default apilist