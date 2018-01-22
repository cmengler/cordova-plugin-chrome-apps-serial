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

exports.onReceive = new Event('onReceive');
exports.onReceiveError = new Event('onReceiveError');

module.exports = exports;

require('cordova-plugin-chrome-apps-common.helpers').runAtStartUp(function(){

});