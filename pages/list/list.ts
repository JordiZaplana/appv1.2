import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historicoSensores } from '../historicoSensores/historicoSensores';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  constructor(public navCtrl: NavController) {
  }
  pushPage_his_sen() {
    this.navCtrl.push(historicoSensores);
  }
//  goToHistRicoSensores(params){
//    if (!params) params = {};
//  this.navCtrl.push(HistRicoSensoresPage);
//  }
}




