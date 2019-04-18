'use strict';

var EventMgr = function EventMgr() {
  this._events = {};
};

EventMgr.prototype.on = function (evtName, handler) {
  if (this._events[evtName] == undefined) {
    this._events[evtName] = [];
  }

  this._events[evtName].push(handler);
};

EventMgr.prototype.off = function (evtName, handler) {
  var handlers = this._events[evtName];

  if (typeof handler == "undefined") {// delete handlers;
  } else {
    var index = -1;

    for (var i = 0, len = handlers.length; i < len; i++) {
      if (handler == handlers[i]) {
        index = i;
        break;
      }
    }

    if (index > 0) handlers.remove(index);
  }
};

EventMgr.prototype.trigger = function (evtName, sender, args) {
  try {
    var handlers = this._events[evtName];
    if (!handlers) return;
    var handler;
    args = args || {};

    for (var i = 0, len = handlers.length; i < len; i++) {
      handler = handlers[i];
      handler(sender, args);
    }
  } catch (e) {
    alert(e);
  }
};

var _ems = new EventMgr();

export default _ems;