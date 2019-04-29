import uuid from './uuid'

/**
 * 由于原生只能通过方法名(String) 回调，所以将 api 中 success/fail/complete 回调
 * 封装到 callback 中，并用一个 uuid 与 callback 关联。
 */
// 
function nativeTransformArgs(args) {
  args.callback = uuid(8)
  window[args.callback] = function (rs, data) {
    if (rs.code == 0) {
      args.success(data)
    }
    else {
      args.fail(rs)
    }
    window[args.callback] = null;
  }
  return args
}

export { nativeTransformArgs }