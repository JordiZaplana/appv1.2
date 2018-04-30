import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { toolsConfig_1 } from '../toolsConfig/toolsConfig';
import { infoApp_1 } from '../infoApp/infoApp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
 
  }
  pushPage_tools() {
    this.navCtrl.push(toolsConfig_1);
  }

  pushPage_info() {
    this.navCtrl.push(infoApp_1);
  }
}
