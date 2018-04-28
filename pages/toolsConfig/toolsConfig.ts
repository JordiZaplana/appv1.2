import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
//import { Database } from '@firebase/database';
import * as firebase from "firebase";



@Component({
  selector: 'page-list',
  templateUrl: 'toolsConfig.html'
})

export class toolsConfig_1 {

  //placa_sensors: FirebaseListObservable<any[]>;

  //items: Observable<any[]>;
  //itemw: AngularFireObject<any>;

  //itemss: Observable<any>;
  item: Observable<any>;
  item1: Observable<any>;
  itemMin: AngularFireObject<any>;
  itemMax: AngularFireObject<any>;



//<button icon-only ion-button  on-click="pushPage_confirmar(min_dist.value, max_dist.value )" padding left>

  constructor(public navCtrl: NavController,public db: AngularFireDatabase, private alertCtrl: AlertController) {
    
    //this.placa_sensors = db.list('albums');


    
    this.itemMin = db.object('placa_vigilancia/control/config_distancia_min');
    this.itemMax = db.object('placa_vigilancia/control/config_distancia_max');
    this.item = this.itemMax.valueChanges();
    this.item1 = this.itemMin.valueChanges();

  
  } 

 
// init(){
//  firebase.database().ref('/placa_vigilancia/control/config_distancia_min' ).once('value').then(function(snapshot) {
//    var minInit = (snapshot.val() ); 
//  return minInit;  
  //firebase.database().ref('/placa_vigilancia/control/config_distancia_max' ).once('value').then(function(snapshot) {
  //  var maxInit = (snapshot.val() ); });
//  });

 //};

  
  

  pushPage_confirmar(min_dist: number, max_dist: number) {
    let alert_ok = this.alertCtrl.create({
      title: 'Todo ok!',
      buttons: ['Ok']
    });
    let alert_error = this.alertCtrl.create({
      title: 'Error: tiene que ser mayor la distancia max que la min!!',
      buttons: ['Ok']
    });

    if (max_dist > min_dist){
      this.itemMin.set( min_dist );
      this.itemMax.set( max_dist );
      alert_ok.present();
    }
    else {
      alert_error.present();
    }
    
  };


}




