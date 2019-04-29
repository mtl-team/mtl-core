import uuid from './uuid'

/**
 * 由于原生只能通过方法名(String) 回调，所以将 api 中 success/fail/complete 回调
 * 封装到 callback 中，并用一个 uuid 与 callback 关联。
 */
// 
function nativeTransformArgs(args) {
  let fnName = uuid(8)
  args.callback = fnName + '()'
  window[fnName] = function (rs, data) {
    let res = {
      code: rs && rs.code,
      msg: rs && rs.msg,
      data: data
    }
    if (rs.code == 1) {
      args.success(res)
    }
    else {
      args.fail(res)
    }
    args.complete(res)
    window[fnName] = null;
  }
  return args
}

export { nativeTransformArgs }