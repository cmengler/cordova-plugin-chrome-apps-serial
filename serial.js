// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Event = require('cordova-plugin-chrome-apps-common.events');
var platform = cordova.require('cordova/platform');
var exec = cordova.require('cordova/exec'),
    OS = platform.id === 'android' ? 'ANDROID' : undefined;

exports.getDevices = function(callback) {

}

exports.connect = function(path, options, callback) {

}

exports.update = function(connectionId, options, callback) {

}

exports.disconnect = function(connectionId, callback) {

}

exports.setPaused = function(connectionId, paused, callback) {

}

exports.getInfo = function(connectionId, callback) {

}

exports.getConnections = function(callback) {

}

exports.send = function(connectionId, data, callback) {

}

exports.flush = function(connectionId, callback) {

}

exports.getControlSignals = function(connectionId, callback) {

}

exports.setControlSignals = function(connectionId, signals, callback) {

}

exports.setBreak = function(connectionId, callback) {

}

exports.clearBreak = function(connectionId, callback) {

}

exports.reqPermission = function(opts, successCallback, errorCallback) {
    if (typeof opts === 'function') {  //user did not pass opts
      errorCallback = successCallback;
      successCallback = opts;
      opts = {};
    }
    cordova.exec(
        successCallback,
        errorCallback,
        'Serial',
        'requestPermission',
        [{'opts': opts}]
    );
};

exports.open = function(opts, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'Serial',
        'openSerial',
        [{'opts': opts}]
    );
}
exports.write = function(data, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'Serial',
        'writeSerial',
        [{'data': data}]
    );
}

exports.writeHex = function(hexString, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'Serial',
        'writeSerialHex',
        [{'data': hexString}]
    );
};

exports.read = function(successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'Serial',
        'readSerial',
        []
    );
};

exports.close = function(successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'Serial',
        'closeSerial',
        []
    );
};

exports.registerReadCallback = function(successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'Serial',
        'registerReadCallback',
        []
    );
}

exports.onReceive = new Event('onReceive');
exports.onReceiveError = new Event('onReceiveError');

module.exports = exports;

require('cordova-plugin-chrome-apps-common.helpers').runAtStartUp(function(){

});