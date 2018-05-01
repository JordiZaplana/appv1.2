import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historicoSensores_1 } from '../historicoSensores/historicoSensores';
import { AngularFireDatabase ,AngularFireList,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from "firebase";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
  item3: Observable<any>;
  itemActivo: AngularFireObject<any>;
  
  itemsRef: AngularFireList<any>;
  employees: Observable<any[]>;
  
 imageSource  ;
  employeePhoto;
  public CValue:String;

  constructor(public navCtrl: NavController, af: AngularFireDatabase) {

   this.itemsRef =  af.list('/placa_sensors');
    this.employees = this.itemsRef.valueChanges();
 
    this.itemActivo = af.object('placa_sensors/active');
    this.item3 = this.itemActivo.valueChanges();

    console.log(this.employees);

   }
   
   getPhotoURL(image){
    firebase.storage().ref().child('images/IEC.jpg').getDownloadURL().then((url)=>{
     this.employeePhoto = url;
 
   })
 };
 pushPage_his_sen() {
  this.navCtrl.push(historicoSensores_1);
  }


  pushPage_value() {
  var db = firebase.database();
  
  console.log(vall);

  let ref1 = db.ref("placa_sensors/" + "temperatura" );
  let ref2 = db.ref("placa_sensors/" + "humidity" );
  let ref3 = db.ref("placa_sensors/" + "presion" );
  let ref4 = db.ref("placa_sensors/" + "co2" );
  let ref5 = db.ref("placa_sensors/" + "lux" );
  
    
  var vall=ref1.on("value", function(snapshot) {
  var valor_real =snapshot.val();
  document.getElementById("demo1").innerHTML = "Temperatura: " + snapshot.val() + " ºC";
    });
    var vall=ref2.on("value", function(snapshot) {
      var valor_real =snapshot.val();
      document.getElementById("demo2").innerHTML = "Humedad: " + snapshot.val() + " %";
        });    
        var vall=ref3.on("value", function(snapshot) {
          var valor_real =snapshot.val();
          document.getElementById("demo3").innerHTML = "Presión: " + snapshot.val() + " bar";
            });
            var vall=ref4.on("value", function(snapshot) {
              var valor_real =snapshot.val();
              document.getElementById("demo4").innerHTML ="Co2: " + snapshot.val() + " ppm";
                });
                var vall=ref5.on("value", function(snapshot) {
                  var valor_real =snapshot.val();
                  document.getElementById("demo5").innerHTML = "Luminosidad: " +  snapshot.val() + " lux";
                    });                
  };
ngOnInit(){
  this.pushPage_value();

};

}
