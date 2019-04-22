let e = {};

e.writeConfig = function (json, successFn, errFn) {
    s.callService("UMEMMService.writeConfig", json, false);

};
e.autofind = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.autofind', json, false);
};
e.registerDevice = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.registerDevice', json, false);
};
e.openAdmin = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMMDMService.openAdmin', json, false);
};
 e.openMDM = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMMDMService.openMDM', json, false);
};
 e.closeMDM = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMMDMService.closeMDM', json, false);
};
e.login = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.login', json, false);
};
e.logout = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.logout', json, false);
};
e.getUserInfo = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.getUserInfo', json, false);
};
e.modifyPassword = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.modifyPassword', json, false);
};
e.modifyAvatar = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.modifyAvatar', json, false);
};
e.getApps = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.getApps', json, false);
};
e.getDocs = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.getDocs', json, false);
};
e.startStrategy = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.startStrategy', json, false);
};
e.stopStrategy = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.stopStrategy', json, false);
};
e.feedback = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.feedback', json, false);
};
e.getUserCommonApps = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.getUserCommonApps', json, false);
};
e.getSystemApps = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.getSystemApps', json, false);
};
e.getRecommendedApps = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.getRecommendedApps', json, false);
};
e.updateUserApps = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;

    return s.callService('UMEMMService.updateUserApps', json, false);
};
e.upgradeWebApp = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    json["__keepCallback"] = true;
    return s.callService('UMEMMService.upgradeWebApp', json, false);
};
e.installWebApp = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    json["__keepCallback"] = true;
    return s.callService('UMEMMService.installWebApp', json, false);
};
e.openWebApp = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.openWebApp', json, false);
};
e.removeWebApp = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.removeWebApp', json, false);
};
e.upgradeSummerApp = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    json["__keepCallback"] = true;
    return s.callService('UMEMMService.upgradeSummerApp', json, false);
};
e.upgradeSilentSignal = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    s.callService("UMEMMService.upgradeSilentSignal", json, false);
};
e.getLocalApps = function (json, successFn, errFn) {
    json["callback"] = successFn;
    json["error"] = errFn;
    return s.callService('UMEMMService.getLocalApps', json, false);
};

export default e; 