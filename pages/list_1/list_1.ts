import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historicoSeguridad } from '../historicoSeguridad/historicoSeguridad';

@Component({
  selector: 'page-list',
  templateUrl: 'list_1.html'
})
export class ListPage_1 {
  constructor(public navCtrl: NavController) {
  }
  pushPage_his_seg() {
  this.navCtrl.push(historicoSeguridad);
  }

//  goToHistRicoSensores(params){
//    if (!params) params = {};
//  this.navCtrl.push(HistRicoSensoresPage);
//  }
}




