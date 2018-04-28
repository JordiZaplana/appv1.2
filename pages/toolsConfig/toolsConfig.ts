import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import { Database } from '@firebase/database';


@Component({
  selector: 'page-list',
  templateUrl: 'toolsConfig.html'
})

export class toolsConfig_1 {
  

  item: Observable<any>;
  item1: Observable<any>;
  itemMin: AngularFireObject<any>;
  itemMax: AngularFireObject<any>;


  
  constructor(public navCtrl: NavController,public db: AngularFireDatabase, private alertCtrl: AlertController) {
    
    this.itemMin = db.object('placa_vigilancia/control/config_distancia_min');
    this.itemMax = db.object('placa_vigilancia/control/config_distancia_max');
    this.item = this.itemMax.valueChanges();
    this.item1 = this.itemMin.valueChanges();
    
    
  } 

  
  

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




