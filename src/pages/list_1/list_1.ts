import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historicoSeguridad_1 } from '../historicoSeguridad/historicoSeguridad';


@Component({
  selector: 'page-list',
  templateUrl: 'list_1.html'
})
export class ListPage_1 {
  

  constructor(public navCtrl: NavController) {
  }
  pushPage_his_seg() {
  this.navCtrl.push(historicoSeguridad_1);
  }

toggleM(dataMA: boolean){
  if(dataMA==true){
    return true;
  }
  else return false;

}

}







