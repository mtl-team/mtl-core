import mtl from "../mtl";

/**
 * 通过注册的方式将已有的 API 注册上来，
 * 并支持开发者自定义扩展 API
 */
export default function ({ api, platform = 'all', fn }) {

  if (api in mtl.apilist) {
    throw new Error('api ' + api + ' is Existed!')
  }
  mtl

}