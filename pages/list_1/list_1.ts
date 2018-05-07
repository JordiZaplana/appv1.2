import { Component } from '@angular/core';
import { NavController,Platform, AlertController } from 'ionic-angular';
import { historicoSeguridad_1 } from '../historicoSeguridad/historicoSeguridad';

import { AngularFireDatabase ,AngularFireList,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import firebase from "firebase";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
//import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from "firebase";


//__________________________________________________
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import {Transfer, TransferObject} from '@ionic-native/transfer';
import {File} from '@ionic-native/file';

declare var cordova: any;




@Component({
  selector: 'page-list',
  templateUrl: 'list_1.html',
  providers: [Transfer, TransferObject, File]

})
export class ListPage_1 {
  storageDirectory: string = '';
  someTextUrl;

  item3: Observable<any>;
  itemManual: AngularFireObject<any>;
  booll; 
  profileUrl: Observable<string | null>;
  constructor(public navCtrl: NavController, af: AngularFireDatabase, public platform: Platform, private transfer: Transfer, private file: File, public alertCtrl: AlertController) {

  firebase.storage().ref('manual/manual.jpg').getDownloadURL()
  .then(response => this.someTextUrl = response)
  .catch(error => console.log('error', error))

    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = cordova.file.dataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });
    this.itemManual = af.object('placa_vigilancia/control/manual');
    this.item3 = this.itemManual.valueChanges();
  }
  pushPage_his_seg() {
  this.navCtrl.push(historicoSeguridad_1);
  };
  getSomeText() {
    firebase.storage().ref('manual/manual.jpg').getDownloadURL()
      .then(response => this.someTextUrl = response)
      .catch(error => console.log('error', error))
  };

 

public getFoto(){
//  const storage = firebase.storage()
  //let locationRef = storage.ref('cats/cat1.jpg')
/*
  let image = storage.ref('manual/manual.jpg')
  image.getMetadata().then(function(metadata) {
    document.getElementById('batteryID').src = "https://firebasestorage.googleapis.com/v0/b/tfg-app-v1.appspot.com/o/manual%2Fmanual.jpg?alt=media&token=4e594a81-b141-4f6c-adfc-6ef488f705e8";
  });    
  
  //https://firebasestorage.googleapis.com/v0/b/tfg-app-v1.appspot.com/o/images%2FIEC.jpg?alt=media&token=4e594a81-b141-4f6c-adfc-6ef488f705e8
  storage.ref("manual/manual.jpg" ).getDownloadURL().then(function(url) {
    console.log(url);
    return url;
  }).catch(function(error) {
    // Handle any errors here
  });
*/

  //HACER UN FOR!!

this.itemManual.set(1);
firebase.storage().ref('manual/manual.jpg').getDownloadURL()
  .then(response => this.someTextUrl = response)
  .catch(error => console.log('error', error))

  //var aTag = document.createElement('demo5');
  //aTag.innerHTML = this.someTextUrl;
var name = "<script>'<a href='" + this.someTextUrl + "'>Google</a>'</script>";

//  link
  document.getElementById("demo4").innerHTML=name;

  //  foto
  document.getElementById("demo5").innerHTML = "<img src =\"" + this.someTextUrl + "\">";

  //var  referenHtml = document.getElementById("demo5");
  //referenHtml.innerHTML = "<img src=\"https://firebasestorage.googleapis.com/v0/b/tfg-app-v1.appspot.com/o/manual%2Fmanual.jpg?alt=media&token=3b66c29a-bbc9-4236-ac8d-49e6cb1bbb2e\" width=\"400px\" height=\"150px\">";
    //                                  https://firebasestorage.googleapis.com/v0/b/tfg-app-v1.appspot.com/o/manual%2Fmanual.jpg?alt=media&token=274bf110-3f11-4510-9973-8c1883a5b80b
  //referenHtml.innerHTML = ;
 
  

  
};


downloadImage(image) {

  this.platform.ready().then(() => {

    const fileTransfer: TransferObject = this.transfer.create();

    //const imageLocation = `${cordova.file.applicationDirectory}www/assets/img/${image}`;
    const imageLocation = `${cordova.file.applicationDirectory}www/assets/img/${image}`;
    fileTransfer.download(imageLocation, this.storageDirectory + image).then((entry) => {

      const alertSuccess = this.alertCtrl.create({
        title: `Download Succeeded!`,
        subTitle: `${image} was successfully downloaded to: ${entry.toURL()}`,
        buttons: ['Ok']
      });

      alertSuccess.present();

    }, (error) => {

      const alertFailure = this.alertCtrl.create({
        title: `Download Failed!`,
        subTitle: `${image} was not successfully downloaded. Error code: ${error.code}`,
        buttons: ['Ok']
      });

      alertFailure.present();

    });

  });

};
retrieveImage(image) {

  this.file.checkFile(this.storageDirectory, image)
    .then(() => {

      const alertSuccess = this.alertCtrl.create({
        title: `File retrieval Succeeded!`,
        subTitle: `${image} was successfully retrieved from: ${this.storageDirectory}`,
        buttons: ['Ok']
      });

      return alertSuccess.present();

    })
    .catch((err) => {

      const alertFailure = this.alertCtrl.create({
        title: `File retrieval Failed!`,
        subTitle: `${image} was not successfully retrieved. Error Code: ${err.code}`,
        buttons: ['Ok']
      });

      return alertFailure.present();

    });
};
  
}







