/*
 * Summer JavaScript Library
 * Copyright (c) 2019 yonyou.com
 * Author: mtl core team
 * Version: 1.0.0
 */
var $s = {};
var s = {$: $s};

// u = window.$summer || {};
// w.$summer = w.$summer || {};
// w.summer = w.summer || {};
// w.api = w.summer;

import './base.extra'
import * as u from './base.api'
import './base.dom'
import './codova.init'
import { callSync, callCordova } from './bridge.loadplugin'
import * as CoreAPI from './core.api'
import * as BridgeAPI from './bridge'
import e from './emm'
import './im'

s.callSync = callSync
s.callCordova = callCordova
console.log(CoreAPI);
console.log(BridgeAPI);
console.log(u);

Object.assign(s, CoreAPI.default,BridgeAPI.default,u.default); //u

window.$summer = $s;
window.summer = s;
window.emm = e;

//debug
window.$summer.__debug = false;

export default summer;