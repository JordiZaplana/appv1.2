import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { historicoSeguridad_1 } from '../historicoSeguridad/historicoSeguridad';

import { AngularFireDatabase ,AngularFireList,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from "firebase";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireStorage } from 'angularfire2/storage';


@Component({
  selector: 'page-list',
  templateUrl: 'list_1.html'
})
export class ListPage_1 {
  item3: Observable<any>;
  itemManual: AngularFireObject<any>;
  booll; 
  profileUrl: Observable<string | null>;
  constructor(public navCtrl: NavController, af: AngularFireDatabase) {
    
    
    this.itemManual = af.object('placa_vigilancia/control/manual');
    this.item3 = this.itemManual.valueChanges();
  }
  pushPage_his_seg() {
  this.navCtrl.push(historicoSeguridad_1);
  };

 

public getFoto(){

  this.itemManual.set(1);
  
};


  
}







