import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CreateAccPage } from '../pages/create-acc/create-acc';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
  apiKey: "AIzaSyDOg7Q9mGMeP9wJfCJ35E9E-CbDNQt3DzY",
  authDomain: "project-end-c5c4e.firebaseapp.com",
  databaseURL: "https://project-end-c5c4e.firebaseio.com",
  projectId: "project-end-c5c4e",
  storageBucket: "project-end-c5c4e.appspot.com",
  messagingSenderId: "793895669230"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CreateAccPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CreateAccPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
