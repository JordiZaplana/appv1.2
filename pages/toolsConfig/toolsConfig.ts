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
olaa:string='';
  //placa_sensors: FirebaseListObservable<any[]>;

  //items: Observable<any[]>;
  //itemw: AngularFireObject<any>;

  //itemss: Observable<any>;
  item: Observable<any>;
  item1: Observable<any>;
  item2: Observable<any>;
  item3: Observable<any>;
public  max_min: boolean =true;
  itemMin: AngularFireObject<any>;
  itemMax: AngularFireObject<any>;
  itemMillis: AngularFireObject<any>;
  itemMode: AngularFireObject<any>;
public isToggledM: boolean;
  

//

  constructor(public navCtrl: NavController,public db: AngularFireDatabase, private alertCtrl: AlertController) {
    
  
    this.itemMin = db.object('placa_vigilancia/control/config_distancia_min');
    this.itemMax = db.object('placa_vigilancia/control/config_distancia_max');
    this.itemMillis = db.object('placa_sensors/config/millis');
    this.itemMode = db.object('placa_vigilancia/control/manual');

    this.item = this.itemMax.valueChanges();
    this.item1 = this.itemMin.valueChanges();
    this.item2 = this.itemMillis.valueChanges();
    this.item3 = this.itemMode.valueChanges();
    
  
  

  } 

    

  setPage_confirmar( set_millis: number) {
    let alert_ok = this.alertCtrl.create({
      title: 'Todo ok!',
      buttons: ['Ok']
    });
    let alert_error = this.alertCtrl.create({

      buttons: ['Ok']
    });
    
      
      this.itemMillis.set(Number(set_millis));
      console.log(typeof set_millis   )
      alert_ok.present();
           
    
    
  };

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
      console.log(typeof max_dist   )
      alert_ok.present();
    }
    else {
      alert_error.present();
    }
    
  };
 get_max_minValue(): boolean {
   var max_min;
   if(max_min== true){
   max_min=false;
  }else {
  max_min =true;
  }

    var db = firebase.database();
    var ref = db.ref("placa_vigilancia/control/config_distancia_min");
    ref.once("value", function(snapshot) {
    console.log(typeof snapshot.val());
    
    document.getElementById("min1").innerHTML = snapshot.val() + " cm";
  
   // return snapshot.val(); 
  });
  var ref1 = db.ref("placa_vigilancia/control/config_distancia_max");
  ref1.once("value", function(snapshot) {
  console.log(snapshot.val());
  
  
  document.getElementById("max1").innerHTML = snapshot.val() + " cm";
  //return snapshot.val(); 
});

return max_min ;
    };

    get_millisValue() {


      var db = firebase.database();
      var ref = db.ref("placa_sensors/config/millis");
      ref.once("value", function(snapshot) {
      console.log(typeof snapshot.val());
      
      document.getElementById("millis1").innerHTML = snapshot.val() + " ms" ;
    
      return snapshot.val(); 
    });
    
      };
       set_mode() {
        
      
        this.isToggledM=!this.isToggledM;
        if(this.isToggledM==false){
          this.itemMode.set(1);
          console.log(this.isToggledM);
        }else {
          this.itemMode.set(0);
          console.log(this.isToggledM);
        }

      };

    ngOnInit(){
      this.itemMode.set(1);
      console.log(this.isToggledM);
    };
    
    }




