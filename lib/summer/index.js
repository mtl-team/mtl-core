/*
 * Summer JavaScript Library
 * Copyright (c) 2019 yonyou.com
 * Author: mtl core team
 * Version: 1.0.0
 */
var $s = {};
var s = {
  $: $s
}; // u = window.$summer || {};
// w.$summer = w.$summer || {};
// w.summer = w.summer || {};
// w.api = w.summer;

import './base.extra';
import './base.api';
import './base.dom';
import './codova.init';
import './bridge.loadplugin';
import './core.api';
import './bridge';
import './emm';
import './im';
window.$summer = $s;
window.summer = s; //debug

w.$summer.__debug = false;