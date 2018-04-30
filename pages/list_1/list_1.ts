import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historicoSeguridad_1 } from '../historicoSeguridad/historicoSeguridad';
import { AngularFireDatabase ,AngularFireList,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from "firebase";

@Component({
  selector: 'page-list',
  templateUrl: 'list_1.html'
})
export class ListPage_1 {
  item3: Observable<any>;
  itemActivo: AngularFireObject<any>;

  constructor(public navCtrl: NavController, af: AngularFireDatabase) {
    
    this.itemActivo = af.object('placa_sensors/active');
    this.item3 = this.itemActivo.valueChanges();
  }
  pushPage_his_seg() {
  this.navCtrl.push(historicoSeguridad_1);
  }
  ngOnInit(){
    
    this.itemActivo.set("0");
  };
toggleM(dataMA: boolean){
  if(dataMA==true){
    return true;
  }
  else return false;

}

}







