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
  item3_hist: Observable<any>;
  itemActivo_hist: AngularFireObject<any>;

 imageSource  ;
  employeePhoto;
  public CValue:String;
  public isToggled: boolean;
  public isToggled2: boolean;
  public isToggled3: boolean;
  public isToggled4: boolean;
  public isToggled5: boolean;

  constructor(public navCtrl: NavController, af: AngularFireDatabase) {

    this.itemActivo_hist = af.object('placa_sensors/active_hist');
    this.item3_hist = this.itemActivo_hist.valueChanges();  

    this.isToggled = false;
    this.isToggled2 = false;
    this.isToggled3 = false;
    this.isToggled4 = false;
    this.isToggled5 = false;

    this.itemsRef =  af.list('/placa_sensors');
    this.employees = this.itemsRef.valueChanges();
 
    this.itemActivo = af.object('placa_sensors/active');
    this.item3 = this.itemActivo.valueChanges();

    console.log(this.employees);

   }
   ngOnInit(){
    this.itemActivo.set(1);
    this.itemActivo_hist.set(1); 
  }
   
   getPhotoURL(image){
    firebase.storage().ref().child('images/IEC.jpg').getDownloadURL().then((url)=>{
     this.employeePhoto = url;
 
   })
 };
 pushPage_his_sen() {
  this.navCtrl.push(historicoSensores_1);
  }
  public notify1() {
    this.isToggled=!this.isToggled;
    if(this.isToggled==true){
    var db = firebase.database();
    let ref1 = db.ref("placa_sensors/" + "temperatura" );
    var vall=ref1.on("value", function(snapshot) {
      snapshot.val();
      document.getElementById("demo1").innerHTML ="Temperatura: " + snapshot.val() + " ºC";
      return snapshot.val();
        });
      }else{
        document.getElementById("demo1").innerHTML ="Temperatura: ";
      }
      
    console.log("Toggled: "+ this.isToggled); 
  };

  public notify2() {
    this.isToggled2=!this.isToggled2;
    if(this.isToggled2==true){
    var db = firebase.database();
    let ref1 = db.ref("placa_sensors/" + "humidity" );
    var vall=ref1.on("value", function(snapshot) {
      snapshot.val();
      document.getElementById("demo2").innerHTML = "Humedad: " + snapshot.val() + " %";
      return snapshot.val();
        });
      }else{
        document.getElementById("demo2").innerHTML = "Humedad: ";
      }
      
    console.log("Toggled: "+ this.isToggled); 
  };  
  public notify3() {
    this.isToggled3=!this.isToggled3;
    if(this.isToggled3==true){
    var db = firebase.database();
    let ref1 = db.ref("placa_sensors/" + "presion" );
    var vall=ref1.on("value", function(snapshot) {
      snapshot.val();
      document.getElementById("demo3").innerHTML = "Presión: " + snapshot.val() + " bar";
      return snapshot.val();
        });
      }else{
        document.getElementById("demo3").innerHTML = "Presión: ";
      }
      
    console.log("Toggled: "+ this.isToggled); 
  };  
  public notify4() {
    this.isToggled4=!this.isToggled4;
    if(this.isToggled4==true){
    var db = firebase.database();
    let ref1 = db.ref("placa_sensors/" + "co2" );
    var vall=ref1.on("value", function(snapshot) {
      snapshot.val();
      document.getElementById("demo4").innerHTML ="Co2: " + snapshot.val() + " ppm";
      return snapshot.val();
        });
      }else{
        document.getElementById("demo4").innerHTML ="Co2: " ;
      }
      
    console.log("Toggled: "+ this.isToggled); 
  };
  public notify5() {
    this.isToggled5=!this.isToggled5;
    if(this.isToggled5==true){
    var db = firebase.database();
    let ref1 = db.ref("placa_sensors/" + "lux" );
    var vall=ref1.on("value", function(snapshot) {
      snapshot.val();
      document.getElementById("demo5").innerHTML = "Luminosidad: " +  snapshot.val() + " lux";
      return snapshot.val();
        });
      }else {
        document.getElementById("demo5").innerHTML = "Luminosidad: " ;
      }

    console.log("Toggled: "+ this.isToggled); 
  };

}
