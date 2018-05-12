import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { toolsConfig_1 } from '../toolsConfig/toolsConfig';
import { infoApp_1 } from '../infoApp/infoApp';
import * as firebase from "firebase";
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemActiveReal;
  item3: Observable<any>;
  itemActivo: AngularFireObject<any>;
  itemOnline: AngularFireObject<any>;
  public  flag: boolean =false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public db: AngularFireDatabase) {
    this.itemActivo = db.object('placa_sensors/active');
    this.item3 = this.itemActivo.valueChanges();
    this.itemOnline = db.object('placa_sensors/online');
    this.itemActiveReal = db.object('placa_sensors/config/activereal');
    this.itemActiveReal.set("null");
  }
  pushPage_tools() {
    this.navCtrl.push(toolsConfig_1);
  };

  pushPage_info() {
    this.navCtrl.push(infoApp_1);
  };

  

  flame_online_placas() {
    var ee = this.itemOnline.snapshotChanges();     

    var db = firebase.database();
    var ref4 = db.ref("placa_sensors/online");
    let alert_online = this.alertCtrl.create({
      title: 'La placa de sensores esta online!',
      buttons: ['Ok']
    });
    let alert_offline = this.alertCtrl.create({
      title: 'Oops! La placa de sensores esta offline!',
      buttons: ['Ok']
    });

    var eee= ref4.once("value", function(snapshot) {
      //console.log(snapshot.val());
      var changedPost = snapshot.val();
      console.log("The updated post title is " + changedPost.title);
    

      var flag;
    if(snapshot.val()== "0"  ){
       flag=true;
       alert_online.present();     
      
      
    //}else if(snapshot.val()=="0"){
  
      //alert_offline.present();
    }else{

      alert_offline.present();

    }

    
  return snapshot.val();
  });
  //console.log(eee);
  //this.flame_online_placa_camara();

  
  
  };
  
  

/*
  flame_online_placa_camara() {
    this.itemActivo.set(1);
    var db = firebase.database();
    var ref4 = db.ref("placa_vigilancia/online");
    let alert_online = this.alertCtrl.create({
      title: 'La placa de seguridad esta online!',
      buttons: ['Ok']
    });
    let alert_offline = this.alertCtrl.create({
      title: 'Oops! La placa de seguridad esta offline!',
      buttons: ['Ok']
    });
    ref4.once("value", function(snapshot) {
      console.log(snapshot.val());
    

    if(snapshot.val()=="0"  ){
  
    return  alert_online.present();
    //}else if(snapshot.val()=="0"){
  
    //return   alert_offline.present();
    }else{
  
    return  alert_offline.present();
    }

     
  });
  };
  */
/*******************************************************************************************/
    //ngOnInit(){
    //this.flame_online_placas();         DESCOMENTAR !!!!!!
    //};


/*******************************************************************************************/
}
