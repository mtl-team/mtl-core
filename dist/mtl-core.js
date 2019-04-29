!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(this,function(o,e){if(!o.jWeixin){var n,c={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var n in c)e[c[n]]=n;return e}(),i=o.document,t=i.title,r=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),d=!(!s.match("mac")&&!s.match("win")),u=-1!=r.indexOf("wxdebugger"),l=-1!=r.indexOf("micromessenger"),p=-1!=r.indexOf("android"),f=-1!=r.indexOf("iphone")||-1!=r.indexOf("ipad"),m=(n=r.match(/micromessenger\/(\d+\.\d+\.\d+)/)||r.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",g={initStartTime:L(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:m,url:encodeURIComponent(location.href)},v={},S={_completes:[]},y={state:0,data:{}};O(function(){g.initEndTime=L()});var I=!1,_=[],w={config:function(e){B("config",v=e);var t=!1!==v.check;O(function(){if(t)M(c.config,{verifyJsApiList:C(v.jsApiList)},function(){S._complete=function(e){g.preVerifyEndTime=L(),y.state=1,y.data=e},S.success=function(e){h.isPreVerifyOk=0},S.fail=function(e){S._fail?S._fail(e):y.state=-1};var t=S._completes;return t.push(function(){!function(e){if(!(d||u||v.debug||m<"6.0.2"||h.systemType<0)){var i=new Image;h.appId=v.appId,h.initTime=g.initEndTime-g.initStartTime,h.preVerifyTime=g.preVerifyEndTime-g.preVerifyStartTime,w.getNetworkType({isInnerInvoke:!0,success:function(e){h.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;i.src=n}})}}()}),S.complete=function(e){for(var n=0,i=t.length;n<i;++n)t[n]();S._completes=[]},S}()),g.preVerifyStartTime=L();else{y.state=1;for(var e=S._completes,n=0,i=e.length;n<i;++n)e[n]();S._completes=[]}}),w.invoke||(w.invoke=function(e,n,i){o.WeixinJSBridge&&WeixinJSBridge.invoke(e,x(n),i)},w.on=function(e,n){o.WeixinJSBridge&&WeixinJSBridge.on(e,n)})},ready:function(e){0!=y.state?e():(S._completes.push(e),!l&&v.debug&&e())},error:function(e){m<"6.0.2"||(-1==y.state?e(y.data):S._fail=e)},checkJsApi:function(e){M("checkJsApi",{jsApiList:C(e.jsApiList)},(e._complete=function(e){if(p){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=a[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){P(c.onMenuShareTimeline,{complete:function(){M("shareTimeline",{title:e.title||t,desc:e.title||t,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(n){P(c.onMenuShareAppMessage,{complete:function(e){"favorite"===e.scene?M("sendAppMessage",{title:n.title||t,desc:n.desc||"",link:n.link||location.href,img_url:n.imgUrl||"",type:n.type||"link",data_url:n.dataUrl||""}):M("sendAppMessage",{title:n.title||t,desc:n.desc||"",link:n.link||location.href,img_url:n.imgUrl||"",type:n.type||"link",data_url:n.dataUrl||""},n)}},n)},onMenuShareQQ:function(e){P(c.onMenuShareQQ,{complete:function(){M("shareQQ",{title:e.title||t,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){P(c.onMenuShareWeibo,{complete:function(){M("shareWeiboApp",{title:e.title||t,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){P(c.onMenuShareQZone,{complete:function(){M("shareQZone",{title:e.title||t,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){M("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){M("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){M("startRecord",{},e)},stopRecord:function(e){M("stopRecord",{},e)},onVoiceRecordEnd:function(e){P("onVoiceRecordEnd",e)},playVoice:function(e){M("playVoice",{localId:e.localId},e)},pauseVoice:function(e){M("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){M("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){P("onVoicePlayEnd",e)},uploadVoice:function(e){M("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){M("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){M("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){M("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){M(c.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){M("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){M("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,M("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<_.length){var n=_.shift();wx.getLocalImgData(n)}},e))):_.push(e)},getNetworkType:function(e){M("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){M("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){M(c.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){M("hideOptionMenu",{},e)},showOptionMenu:function(e){M("showOptionMenu",{},e)},closeWindow:function(e){M("closeWindow",{},e=e||{})},hideMenuItems:function(e){M("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){M("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){M("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){M("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){M("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){M(c.openAddress,{},(e._complete=function(e){var n;(n=e).postalCode=n.addressPostalCode,delete n.addressPostalCode,n.provinceName=n.proviceFirstStageName,delete n.proviceFirstStageName,n.cityName=n.addressCitySecondStageName,delete n.addressCitySecondStageName,n.countryName=n.addressCountiesThirdStageName,delete n.addressCountiesThirdStageName,n.detailInfo=n.addressDetailInfo,delete n.addressDetailInfo,e=n},e))},openProductSpecificView:function(e){M(c.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],t=0,o=n.length;t<o;++t){var r=n[t],a={card_id:r.cardId,card_ext:r.cardExt};i.push(a)}M(c.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){M("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],t=0,o=n.length;t<o;++t){var r=n[t],a={card_id:r.cardId,code:r.code};i.push(a)}M(c.openCard,{card_list:i},e)},consumeAndShareCard:function(e){M(c.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){M(c.chooseWXPay,V(e),e)},openEnterpriseRedPacket:function(e){M(c.openEnterpriseRedPacket,V(e),e)},startSearchBeacons:function(e){M(c.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){M(c.stopSearchBeacons,{},e)},onSearchBeacons:function(e){P(c.onSearchBeacons,e)},openEnterpriseChat:function(e){M("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){M("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){M("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(n){if(p){var e=n.extraData;if(e)try{n.extraData=JSON.parse(e)}catch(e){n.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},O(function(){M("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){O(function(){M("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){O(function(){M("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){O(function(){M("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){O(function(){M("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){O(function(){M("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(e){O(function(){e({miniprogram:"miniprogram"===o.__wxjs_environment})})}}},T=1,k={};return i.addEventListener("error",function(e){if(!p){var n=e.target,i=n.tagName,t=n.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)if(-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=T++,n["wx-id"]=o),k[o])return;k[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})})}}},!0),i.addEventListener("load",function(e){if(!p){var n=e.target,i=n.tagName;n.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(k[t]=!1)}}},!0),e&&(o.wx=o.jWeixin=w),w}function M(n,e,i){o.WeixinJSBridge?WeixinJSBridge.invoke(n,x(e),function(e){A(n,e,i)}):B(n,i)}function P(n,i,t){o.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),A(n,e,i)}):B(n,t||i)}function x(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function V(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function A(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=a[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",v.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function C(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=c[t];o&&(e[n]=o)}return e}}function B(e,n){if(!(!v.debug||n&&n.isInnerInvoke)){var i=a[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function L(){return(new Date).getTime()}function O(e){l&&(o.WeixinJSBridge?e():i.addEventListener&&i.addEventListener("WeixinJSBridgeReady",e,!1))}});
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.mtl = factory());
}(this, function () { 'use strict';

  /**
   * 获取环境参数
   */
  // 获取当前平台 
  var platform = function () {
    var _navigator = navigator,
        userAgent = _navigator.userAgent,
        platform = _navigator.platform;

    if (userAgent.includes('miniProgram')) {
      platform = 'wx';
    } else if (platform.includes('Linux')) {
      platform = 'android';
    } else if (platform == 'iPhone' || platform == 'iPad') {
      platform = 'ios';
    }

    var supportedPlatforms = ['wx', 'android', 'ios'];
    platform = platform && platform.toLowerCase();

    if (!supportedPlatforms.includes(platform)) {
      // TODO: warning('暂未支持的该平台')
      platform = 'h5';
    }

    return platform;
  }(); // export const isAlipay = false;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] =
      GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList)
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var asyncToGenerator = _asyncToGenerator;

  var access_token_source = "debug";
  var access_token_url = "用户自定义 access_token 请求接口";
  var appid = "<appid>";
  var secret = "<secret>";
  var config = {
  	access_token_source: access_token_source,
  	access_token_url: access_token_url,
  	appid: appid,
  	secret: secret
  };

  var crypt = createCommonjsModule(function (module) {
  (function () {
    var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        crypt = {
      // Bit-wise rotation left
      rotl: function (n, b) {
        return n << b | n >>> 32 - b;
      },
      // Bit-wise rotation right
      rotr: function (n, b) {
        return n << 32 - b | n >>> b;
      },
      // Swap big-endian to little-endian and vice versa
      endian: function (n) {
        // If number given, swap endian
        if (n.constructor == Number) {
          return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
        } // Else, assume array and swap all items


        for (var i = 0; i < n.length; i++) n[i] = crypt.endian(n[i]);

        return n;
      },
      // Generate an array of any length of random bytes
      randomBytes: function (n) {
        for (var bytes = []; n > 0; n--) bytes.push(Math.floor(Math.random() * 256));

        return bytes;
      },
      // Convert a byte array to big-endian 32-bit words
      bytesToWords: function (bytes) {
        for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) words[b >>> 5] |= bytes[i] << 24 - b % 32;

        return words;
      },
      // Convert big-endian 32-bit words to a byte array
      wordsToBytes: function (words) {
        for (var bytes = [], b = 0; b < words.length * 32; b += 8) bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);

        return bytes;
      },
      // Convert a byte array to a hex string
      bytesToHex: function (bytes) {
        for (var hex = [], i = 0; i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 0xF).toString(16));
        }

        return hex.join('');
      },
      // Convert a hex string to a byte array
      hexToBytes: function (hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16));

        return bytes;
      },
      // Convert a byte array to a base-64 string
      bytesToBase64: function (bytes) {
        for (var base64 = [], i = 0; i < bytes.length; i += 3) {
          var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];

          for (var j = 0; j < 4; j++) if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else base64.push('=');
        }

        return base64.join('');
      },
      // Convert a base-64 string to a byte array
      base64ToBytes: function (base64) {
        // Remove non-base-64 characters
        base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

        for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
          if (imod4 == 0) continue;
          bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
        }

        return bytes;
      }
    };
    module.exports = crypt;
  })();
  });

  var charenc = {
    // UTF-8 encoding
    utf8: {
      // Convert a string to a byte array
      stringToBytes: function (str) {
        return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
      },
      // Convert a byte array to a string
      bytesToString: function (bytes) {
        return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
      }
    },
    // Binary encoding
    bin: {
      // Convert a string to a byte array
      stringToBytes: function (str) {
        for (var bytes = [], i = 0; i < str.length; i++) bytes.push(str.charCodeAt(i) & 0xFF);

        return bytes;
      },
      // Convert a byte array to a string
      bytesToString: function (bytes) {
        for (var str = [], i = 0; i < bytes.length; i++) str.push(String.fromCharCode(bytes[i]));

        return str.join('');
      }
    }
  };
  var charenc_1 = charenc;

  var sha1 = createCommonjsModule(function (module) {
  (function () {
    var crypt$1 = crypt,
        utf8 = charenc_1.utf8,
        bin = charenc_1.bin,
        // The core
    sha1 = function (message) {
      // Convert to byte array
      if (message.constructor == String) message = utf8.stringToBytes(message);else if (typeof Buffer !== 'undefined' && typeof Buffer.isBuffer == 'function' && Buffer.isBuffer(message)) message = Array.prototype.slice.call(message, 0);else if (!Array.isArray(message)) message = message.toString(); // otherwise assume byte array

      var m = crypt$1.bytesToWords(message),
          l = message.length * 8,
          w = [],
          H0 = 1732584193,
          H1 = -271733879,
          H2 = -1732584194,
          H3 = 271733878,
          H4 = -1009589776; // Padding

      m[l >> 5] |= 0x80 << 24 - l % 32;
      m[(l + 64 >>> 9 << 4) + 15] = l;

      for (var i = 0; i < m.length; i += 16) {
        var a = H0,
            b = H1,
            c = H2,
            d = H3,
            e = H4;

        for (var j = 0; j < 80; j++) {
          if (j < 16) w[j] = m[i + j];else {
            var n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
            w[j] = n << 1 | n >>> 31;
          }
          var t = (H0 << 5 | H0 >>> 27) + H4 + (w[j] >>> 0) + (j < 20 ? (H1 & H2 | ~H1 & H3) + 1518500249 : j < 40 ? (H1 ^ H2 ^ H3) + 1859775393 : j < 60 ? (H1 & H2 | H1 & H3 | H2 & H3) - 1894007588 : (H1 ^ H2 ^ H3) - 899497514);
          H4 = H3;
          H3 = H2;
          H2 = H1 << 30 | H1 >>> 2;
          H1 = H0;
          H0 = t;
        }

        H0 += a;
        H1 += b;
        H2 += c;
        H3 += d;
        H4 += e;
      }

      return [H0, H1, H2, H3, H4];
    },
        // Public API
    api = function (message, options) {
      var digestbytes = crypt$1.wordsToBytes(sha1(message));
      return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt$1.bytesToHex(digestbytes);
    };

    api._blocksize = 16;
    api._digestsize = 20;
    module.exports = api;
  })();
  });

  var wx_apilist = {
    miniProgram: ['navigateBack', 'navigateTo', 'redirectTo', 'switchTab', 'reLaunch', 'postMessage', 'getEnv'],
    base: ['startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getLocalImgData', 'translateVoice', 'getNetworkType', 'openLocation', 'getLocation', 'scanQRCode']
  };

  // const defaultTicketServer = 'https://mdoctor.yonyoucloud.com/wechat/api/getticket'

  var defaultTicketServer = 'http://10.3.13.9:88/wechat/api/getticket';
  var wx_permissionStatus = 0;
  var wx = window.wx; // http 请求

  function httpGet(url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            return resolve(request.responseText);
          } else {
            return reject(request.status);
          }
        }
      };

      request.open('GET', url);
      request.send();
    });
  }

  function getTicket(_ref) {
    var source = _ref.access_token_source,
        url = _ref.access_token_url,
        appid = _ref.appid,
        secret = _ref.secret;
    return new Promise(function (resolve, reject) {
      if (source == 'debug') {
        url = defaultTicketServer + "?access_token_source=debug";
      } else if (source == 'secret') {
        url = defaultTicketServer + "?access_token_source=secret&appid=" + appid + "&secret=" + secret;
      }

      httpGet(url).then(resolve).catch(reject);
    });
  } // 请求微信 jssdk 权限


  function configPermission() {
    return _configPermission.apply(this, arguments);
  }

  function _configPermission() {
    _configPermission = asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee() {
      var res, _JSON$parse, status, msg, data, appid, ticket, url, nonceStr, timestamp, encodingStr, signature;

      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getTicket(config);

            case 2:
              res = _context.sent;
              _JSON$parse = JSON.parse(res), status = _JSON$parse.status, msg = _JSON$parse.msg, data = _JSON$parse.data;

              if (!(status == 0)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", false);

            case 6:
              appid = data.appid, ticket = data.ticket;
              url = document.URL;
              nonceStr = 'Wm3WZYTPz0wzccnW';
              timestamp = new Date().getTime();
              encodingStr = "jsapi_ticket=" + ticket + "&noncestr=" + nonceStr + "&timestamp=" + timestamp + "&url=" + url;
              signature = sha1(encodingStr);
              return _context.abrupt("return", new Promise(function (resolve, reject) {
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
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _configPermission.apply(this, arguments);
  }

  var apilist = wx_apilist.base.map(function (api) {
    return {
      api: api,
      fn: function fn(obj) {
        var fn = wx[api];
        var status = wx_permissionStatus || 0; // 0.初始状态;1.成功;-1:失败;

        if (status == 1) {
          fn(obj);
        } else {
          configPermission().then(function () {
            wx_permissionStatus = 1;
            fn(obj);
          }).catch(function (err) {
            wx_permissionStatus = -1;

            if (obj.error) {
              obj.error(err);
            }
          });
        }
      }
    };
  });
  apilist = Object.assign(apilist, wx_apilist.miniProgram.map(function (api) {
    return {
      api: api,
      fn: wx.miniProgram[api]
    };
  }));
  var wx_apilist$1 = apilist;

  var apilist$1 = [{
    api: 'getNetworkType',
    fn: function fn(obj) {
      obj.success({
        'networkType': 'wifi'
      });
    }
  }, {
    api: 'getLocation',
    fn: function fn(obj) {
      obj.success({
        'latitude': '45',
        'longitude': '45'
      });
    }
  }];

  var apilist$2 = [{
    api: 'getNetworkType',
    fn: function fn(obj) {
      obj.success({
        'networkType': 'wifi'
      });
    }
  }, {
    api: 'getLocation',
    fn: function fn(obj) {
      obj.success({
        'latitude': '45',
        'longitude': '45'
      });
    }
  }];

  var apilist$3 = [{
    api: 'getNetworkType',
    fn: function fn(obj) {
      obj.success({
        'networkType': 'wifi'
      });
    }
  }, {
    api: 'getLocation',
    fn: function fn(obj) {
      obj.success({
        'latitude': '45',
        'longitude': '45'
      });
    }
  }];

  function prepareNamespace(symbolPath, context) {
    if (!symbolPath) {
      return context;
    }

    var parts = symbolPath.split('.');
    var cur = context;

    for (var i = 0, part; part = parts[i]; ++i) {
      cur = cur[part] = cur[part] || {};
    }

    return cur;
  }

  var merge = function merge(target, source) {
    for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]));
    }

    Object.assign(target || {}, source);
    return target;
  };

  var MTL =
  /*#__PURE__*/
  function () {
    function MTL() {
      this.apilist = [];
      this.platform = platform;
    }
    /**
     * 扩展 mtl 的 api 
     * @param {String} api 扩展方法名
     * @param {String} platform 扩展平台: all|ios|android|h5;
     * @param {String} symbolPath 扩展方法绑定字段，例如 api = 'm1', symbolPath = 'xx' 则注册完后调用方式为 mtl.xx.m1。
     * @param {Function} fn 扩展方法绑定字段
     */


    var _proto = MTL.prototype;

    _proto.register = function register(_ref) {
      var api = _ref.api,
          _ref$platform = _ref.platform,
          platform = _ref$platform === void 0 ? 'all' : _ref$platform,
          _ref$symbolPath = _ref.symbolPath,
          symbolPath = _ref$symbolPath === void 0 ? null : _ref$symbolPath,
          fn = _ref.fn;

      if (platform != 'all' && platform != this.platform) {
        return;
      }

      if (this.apilist[api]) {
        throw new Error("api \"" + api + "\" already exists!");
      }

      this.apilist[api] = fn;

      if (symbolPath) {
        prepareNamespace(symbolPath, mtl);
        var obj = {};
        var cur = obj;
        var parts = symbolPath.split('.');

        for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray) {
            if (_i2 >= _iterator.length) break;
            _ref2 = _iterator[_i2++];
          } else {
            _i2 = _iterator.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var part = _ref2;
          cur = cur[part] = {};
        }

        cur[api] = fn;
        merge(mtl, obj);
      } else {
        mtl[api] = fn;
      }
    };

    return MTL;
  }();

  var mtl = new MTL();

  (function () {
    var apilist = [];

    switch (platform) {
      case 'wx':
        apilist = wx_apilist$1;
        break;

      case 'ios':
        apilist = apilist$1;
        break;

      case 'android':
        apilist = apilist$2;
        break;

      case 'h5':
        apilist = apilist$3;
        break;
    }

    for (var _iterator2 = apilist, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray2) {
        if (_i3 >= _iterator2.length) break;
        _ref3 = _iterator2[_i3++];
      } else {
        _i3 = _iterator2.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var api = _ref3;
      mtl.register(api);
    }
  })();

  return mtl;

}));
