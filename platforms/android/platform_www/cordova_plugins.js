cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-fcm-with-dependecy-updated.FCMPlugin",
      "file": "plugins/cordova-plugin-fcm-with-dependecy-updated/www/FCMPlugin.js",
      "pluginId": "cordova-plugin-fcm-with-dependecy-updated",
      "clobbers": [
        "FCM"
      ]
    },
    {
      "id": "cordova-plugin-insider.InsiderPlugin",
      "file": "plugins/cordova-plugin-insider/www/InsiderPlugin.js",
      "pluginId": "cordova-plugin-insider",
      "clobbers": [
        "Insider"
      ]
    },
    {
      "id": "cordova-plugin-insider.CallbackType",
      "file": "plugins/cordova-plugin-insider/www/CallbackType.js",
      "pluginId": "cordova-plugin-insider"
    },
    {
      "id": "cordova-plugin-insider.ContentOptimizerDataType",
      "file": "plugins/cordova-plugin-insider/www/ContentOptimizerDataType.js",
      "pluginId": "cordova-plugin-insider"
    },
    {
      "id": "cordova-plugin-insider.Gender",
      "file": "plugins/cordova-plugin-insider/www/Gender.js",
      "pluginId": "cordova-plugin-insider"
    },
    {
      "id": "cordova-plugin-insider.Identifier",
      "file": "plugins/cordova-plugin-insider/www/Identifier.js",
      "pluginId": "cordova-plugin-insider"
    },
    {
      "id": "cordova-plugin-insider.Product",
      "file": "plugins/cordova-plugin-insider/www/Product.js",
      "pluginId": "cordova-plugin-insider"
    },
    {
      "id": "cordova-plugin-insider.Event",
      "file": "plugins/cordova-plugin-insider/www/Event.js",
      "pluginId": "cordova-plugin-insider"
    },
    {
      "id": "cordova-plugin-insider.User",
      "file": "plugins/cordova-plugin-insider/www/User.js",
      "pluginId": "cordova-plugin-insider"
    },
    {
      "id": "cordova-plugin-insider.Constants",
      "file": "plugins/cordova-plugin-insider/www/Constants.js",
      "pluginId": "cordova-plugin-insider"
    },
    {
      "id": "cordova-plugin-insider.Utils",
      "file": "plugins/cordova-plugin-insider/www/Utils.js",
      "pluginId": "cordova-plugin-insider"
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-play-services-version-adapter": "1.0.2",
    "cordova-plugin-fcm-with-dependecy-updated": "7.8.0",
    "cordova-plugin-insider": "1.9.0"
  };
});