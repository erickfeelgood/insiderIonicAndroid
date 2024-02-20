import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { FCM } from '@ionic-native/fcm';

declare var cordova;
declare var window;
declare var FirebasePlugin: any;

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = "TestingPage";


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     // this.fcmSet();
      statusBar.styleDefault();
      splashScreen.hide();
      this.initSDK();
      this.firebasexx();
    });
  }

  onMessageReceived(data){
    
    if(data.source=="Insider"){
      window.Insider.handleNotification(data);
      }

    }

    firebasexx(){
      FirebasePlugin.getToken(function(token) {
        console.log("get token ",token);
      
      },function(err){
        console.log("error get token ",err );
      });
  
      FirebasePlugin.subscribe("promo",function(token) {
        console.log("subscribe ",token);
      },function(err){
        console.log("subscribe error",err );
      })
  
      FirebasePlugin.onMessageReceived(this.onMessageReceived.bind(this));
     
    }
  

  async  initSDK() {
    //Update the PARTNER_NAME and APP_GROUP_ID value below with yours.
    await window.Insider.init('bankmegauat', 'com.bankmega.msmiledev',
        (callback) => {
            switch ((callback.result || {}).type) {
                case window.Insider.callbackType.NOTIFICATION_OPEN:
                    console.log('[INSIDER][NOTIFICATION_OPEN]: ', callback.result || {});
                    break;
                case window.Insider.callbackType.INAPP_BUTTON_CLICK:
                    console.log('[INSIDER][INAPP_BUTTON_CLICK]: ', callback.result || {});
                    break;
                case window.Insider.callbackType.TEMP_STORE_PURCHASE:
                    console.log('[INSIDER][TEMP_STORE_PURCHASE]: ', callback.result || {});
                    break;
                case window.Insider.callbackType.TEMP_STORE_ADDED_TO_CART:
                    console.log('[INSIDER][TEMP_STORE_ADDED_TO_CART]: ', callback.result || {});
                    break;
                case window.Insider.callbackType.TEMP_STORE_CUSTOM_ACTION:
                    console.log('[INSIDER][TEMP_STORE_CUSTOM_ACTION]: ', callback.result || {});
                    break;
                case window.Insider.callbackType.INAPP_SEEN:
                    console.log('[INSIDER][INAPP_SEEN]: ', callback.result || {});
                    break;
            }
        });
};


}
