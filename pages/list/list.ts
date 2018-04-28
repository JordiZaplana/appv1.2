import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historicoSensores_1 } from '../historicoSensores/historicoSensores';
import * as firebase from "firebase";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  

  constructor(public navCtrl: NavController) {
    
  }
  pushPage_his_sen() {
    this.navCtrl.push(historicoSensores_1);
  }
  
 public init(){
  var minInit;
  firebase.database().ref('/placa_vigilancia/control/config_distancia_min' ).once('value').then(function(snapshot) {
  minInit = (snapshot.val()); 
  console.log("D :" + minInit);
   return minInit;

  });
  console.log( minInit);
  

};



}
 