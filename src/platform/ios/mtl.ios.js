import ios_apilist from './mtl.ios.apilist'
import { nativeTransformArgs } from '../../core/nativeSupport'

let apilist = ios_apilist.map(obj => {
  let originFn = obj.fn;
  let fn = function (args) {
    originFn(nativeTransformArgs(args))
  }
  obj.fn = fn;
  return obj;
})

export default apilist