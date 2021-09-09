/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");

  NativeStorage.setItem(
    "key4",
    "myvalue",
    function () {
      console.log("OK");
    },
    function (error) {
      console.log(error);
    }
  );

  window.cordova.plugins.SecureKeyStore.set(
    function (res) {
      console.log("success: " + res);
    },
    function (error) {
      console.log(error);
    },
    "key3",
    "myvalue"
  );

  // window.cordova.plugins.SecureKeyStore.get(
  //   function (res) {
  //     savedToken = res;
  //     console.log("success: " + savedToken);
  //   },
  //   function (error) {
  //     console.log("Error: " + error);
  //   },
  //   "key1"
  // );

  // works with SInfo
  var sharedPreferences =
    window.plugins.SharedPreferences.getInstance("instance1");

  var key = "key2";
  var value = "he.....";
  var successCallback = function () {
    console.log("OK");
  };
  var errorCallback = function (err) {
    console.error(err);
  };

  sharedPreferences.put(key, value, successCallback, errorCallback);

  // sharedPreferences.get(key, successCallback, errorCallback);

  // use for iOS

  // var ss = new cordova.plugins.SecureStorage(
  //   function () {
  //     console.log("Success");
  //   },
  //   function (error) {
  //     console.log("Error " + error);
  //   },
  //   ""
  // );

  // ss.set(
  //   function (key) {
  //     console.log("Set " + key);
  //   },
  //   function (error) {
  //     console.log("Error " + error);
  //   },
  //   "key1",
  //   "myvalue"
  // );

  // ss.get(
  //   function (value) {
  //     console.log("Success, got " + value);
  //   },
  //   function (error) {
  //     console.log("Error " + error);
  //   },
  //   "mykey"
  // );
}
