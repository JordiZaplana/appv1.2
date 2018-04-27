import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-list',
  templateUrl: 'toolsConfig.html'
})
export class toolsConfig_1 {
  constructor(public navCtrl: NavController) {
  }
  public min_distancia:string; 
  pushPage_cancelar() {
    this.navCtrl.push(HomePage);
  };

  pushPage_confirmar() {
    // set->firebase
    //this.navCtrl.push(HomePage);
    return this.min_distancia;
  };

}




