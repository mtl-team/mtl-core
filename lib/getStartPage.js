var baseUrl = 'http://mdoctor.yonyoucloud.com:3000'; // 获取起始页面

export default function (_ref) {
  var _ref$baseUrl = _ref.baseUrl,
      baseUrl = _ref$baseUrl === void 0 ? this.baseUrl : _ref$baseUrl,
      success = _ref.success,
      fail = _ref.fail,
      _complete = _ref.complete;
  wx.request({
    url: baseUrl + "/project.json",
    complete: function complete(res) {
      if (res.statusCode == 200) {
        console.log(res);
        var startPage = res.data.config.startPage;

        if (startPage) {
          res.pageUrl = baseUrl + "/" + startPage;
          if (success) success(res);
          if (_complete) _complete(res);
          return;
        }
      }

      if (fail) fail(res);
      if (_complete) _complete(res);
    }
  });
}