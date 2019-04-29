import android_apilist from './mtl.android.apilist'
import { nativeTransformArgs } from '../../core/nativeSupport'

let apilist = android_apilist.map(obj => {
  let originFn = obj.fn;
  let fn = function (args) {
    originFn(nativeTransformArgs(args))
  }
  obj.fn = fn;
  return obj;
})

export default apilist