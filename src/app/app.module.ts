import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { firebaseConfig, config } from './app.constantes';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListPage_1 } from '../pages/list_1/list_1';
import { historicoSensores_1 } from '../pages/historicoSensores/historicoSensores';
import { historicoSeguridad_1} from '../pages/historicoSeguridad/historicoSeguridad';
import { toolsConfig_1 } from '../pages/toolsConfig/toolsConfig';
import { infoApp_1 } from '../pages/infoApp/infoApp';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import * as firebase from "firebase";




firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListPage_1,
    historicoSensores_1,
    historicoSeguridad_1,
    toolsConfig_1,
    infoApp_1

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
    toolsConfig_1,
    infoApp_1
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