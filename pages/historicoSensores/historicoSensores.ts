import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from "firebase";
@Component({
  selector: 'page-list',
  templateUrl: 'historicoSensores.html'
})
export class historicoSensores_1 {

  item3: Observable<any>;
  itemActivo: AngularFireObject<any>;

  constructor(public navCtrl: NavController, af: AngularFireDatabase) {
    
    this.itemActivo = af.object('placa_sensors/active');
    this.item3 = this.itemActivo.valueChanges();
  }

  ngOnInit(){
    
    this.itemActivo.set("0");
  };

}




