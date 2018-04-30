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
   ngOnInit(){
    
    this.itemActivo.set("1");
  };
   getPhotoURL(image){
    firebase.storage().ref().child('images/IEC.jpg').getDownloadURL().then((url)=>{
    this.employeePhoto = url;
 
   })
 };
 pushPage_his_sen() {
  this.navCtrl.push(historicoSensores_1);
  }
  pushPage_value(Cvalue :string) {


  var db = firebase.database();
  var ref = db.ref("placa_sensors/" + Cvalue );
  ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  if(Cvalue=="temperatura"){
  document.getElementById("demo").innerHTML = snapshot.val() + " ºC";
  document.getElementById("demo1").innerHTML = " ºC";
  }
  else if(Cvalue=="lux"){
    document.getElementById("demo").innerHTML = snapshot.val() + " lux";
    document.getElementById("demo1").innerHTML =  " lux";
    }
    else if(Cvalue=="co2"){
      document.getElementById("demo").innerHTML = snapshot.val() + " co2";
      document.getElementById("demo1").innerHTML =  " lux";
      }
      else if(Cvalue=="humidity"){
        document.getElementById("demo").innerHTML = snapshot.val() + " humitat";
        document.getElementById("demo1").innerHTML =  " lux";
        }
        else if(Cvalue=="presion"){
          document.getElementById("demo").innerHTML = snapshot.val() + " bar";
          document.getElementById("demo1").innerHTML =  " lux";
          }
          else {
            document.getElementById("demo").innerHTML = " ";
            document.getElementById("demo1").innerHTML =  " ";
            } 
  return snapshot.val(); 
});
      
  };

}
  