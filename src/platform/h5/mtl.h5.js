let apilist = [
  {
    api: 'getNetworkType',
    fn: function (obj) {
      obj.success({ 'networkType': 'wifi' })
    }
  },
  {
    api: 'getLocation',
    fn: function (obj) {
      obj.success({
        'latitude': '45',
        'longitude': '45'
      })
    }
  }
]

export default apilist