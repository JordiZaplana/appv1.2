import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { firebaseConfig } from './app.constantes';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListPage_1 } from '../pages/list_1/list_1';
import { historicoSensores_1 } from '../pages/historicoSensores/historicoSensores';
import { historicoSeguridad_1} from '../pages/historicoSeguridad/historicoSeguridad';
import { toolsConfig_1 } from '../pages/toolsConfig/toolsConfig';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyBIEHKaOP-UGYOnNPIX65DwTOER9lZD8mg",
  databaseURL: "https://tfg-app-v1.firebaseio.com",
  authDomain: "tfg-app-v1.firebaseapp.com",
  projectId: "tfg-app-v1"
  //storageBucket: "tfg-app-v1.appspot.com"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListPage_1,
    historicoSensores_1,
    historicoSeguridad_1,
    toolsConfig_1

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListPage_1,
    historicoSensores_1,
    historicoSeguridad_1,
    toolsConfig_1
  ],
  providers: [
    StatusBar,
    AngularFireDatabase,
    AngularFireDatabaseModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
