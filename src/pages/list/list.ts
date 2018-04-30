import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historicoSensores_1 } from '../historicoSensores/historicoSensores';
import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from "firebase";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
 
  itemsRef: AngularFireList<any>;
  employees: Observable<any[]>;
  
 imageSource  ;
  employeePhoto;
  public CValue:String;

  constructor(public navCtrl: NavController, af: AngularFireDatabase) {

   this.itemsRef =  af.list('/placa_sensors');
    this.employees = this.itemsRef.valueChanges();

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
  pushPage_value(Cvalue :string) {


  var db = firebase.database();
  var ref = db.ref("placa_sensors/" + Cvalue );
  ref.once("value", function(snapshot) {
  console.log(snapshot.val());
  if(Cvalue=="temperatura"){
  document.getElementById("demo").innerHTML = snapshot.val() + " ºC";
  }
  else if(Cvalue=="lux"){
    document.getElementById("demo").innerHTML = snapshot.val() + " lux";
    }
    else if(Cvalue=="co2"){
      document.getElementById("demo").innerHTML = snapshot.val() + " co2";
      }
      else if(Cvalue=="humidity"){
        document.getElementById("demo").innerHTML = snapshot.val() + " humitat";
        }
        else if(Cvalue=="presion"){
          document.getElementById("demo").innerHTML = snapshot.val() + " bar";
          }
          else {
            document.getElementById("demo").innerHTML = snapshot.val();
            } 
  return snapshot.val(); 
});
      
  };

}
  