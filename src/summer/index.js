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
import * as d from './base.dom'
import * as c from './codova.init'
import { callSync, callCordova } from './bridge.loadplugin'
import * as CoreAPI from './core.api'
import * as BridgeAPI from './bridge'
import e from './emm'
import im from './im'

s.callSync = callSync
s.callCordova = callCordova

Object.assign(s, CoreAPI.default,BridgeAPI.default,u.default,d.default,c.default.summer); //u

window.$summer = $s;
window.summer = s;
window.emm = e;
window.im = im;

//debug
window.$summer.__debug = false;

export default summer;