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
import { delay } from 'rxjs/operator/delay';
import { AsyncValidator } from '@angular/forms';

declare var cordova: any;




@Component({
  selector: 'page-list',
  templateUrl: 'list_1.html',
  providers: [Transfer, TransferObject, File]

})
export class ListPage_1 {
  storageDirectory: string = '';
  someTextUrl:Observable<any>;;
  someTextUr4:Observable<any>;;
tt;
  item3: Observable<any>;
  itemManual: AngularFireObject<any>;
  booll; 
  profileUrl: Observable<string | null>;
  constructor(public navCtrl: NavController, af: AngularFireDatabase, public platform: Platform, private transfer: Transfer, private file: File, public alertCtrl: AlertController) {
  
  
  
    //this.getTFoto();




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
  

  
  public getTFoto(){
    this.itemManual.set(1);
    
    
        var commentsRef = firebase.database().ref('placa_vigilancia/control/nombreHora/').orderByValue();
        commentsRef.on('child_added', function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log("segundo!!!! ");
          console.log(childData);
          console.log(childKey);
          
          
            

            var ttt=firebase.storage().ref('alert/' + childData + '.jpg').getDownloadURL()

           
          firebase.storage().ref('manual/' + "manual" + '.jpg').getDownloadURL();
          
          document.getElementById("demo5").innerHTML = "<a href =\"" + ttt + "\">";        
          
        });
        


        
  };
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  };
public getFoto():AsyncValidator{
  //HACER UN FOR!!
  var delM = firebase.storage().ref('manual/manual.jpg');

  this.itemManual.set(1);
  this.sleep(500);
  this.sleep(500);
// Delete the file
delM.delete().then(function() {
  // File deleted successfully
}).catch(function(error) {
  
});

this.sleep(500);


firebase.storage().ref('manual/manual.jpg').getDownloadURL()
  .then(response => this.someTextUrl = response)
  .catch(error => console.log('error', error))

  //var aTag = document.createElement('demo5');
  //aTag.innerHTML = this.someTextUrl;
var name = "<script >'<a href='" + this.someTextUrl + "'>Google</a>'</script>";

//  link
  document.getElementById("demo4").innerHTML=name;

  //  foto
  document.getElementById("demo5").innerHTML = "<img src =\"" + this.someTextUrl + "\">";

  //var  referenHtml = document.getElementById("demo5");
  //referenHtml.innerHTML = "<img src=\"https://firebasestorage.googleapis.com/v0/b/tfg-app-v1.appspot.com/o/manual%2Fmanual.jpg?alt=media&token=3b66c29a-bbc9-4236-ac8d-49e6cb1bbb2e\" width=\"400px\" height=\"150px\">";
    //                                  https://firebasestorage.googleapis.com/v0/b/tfg-app-v1.appspot.com/o/manual%2Fmanual.jpg?alt=media&token=274bf110-3f11-4510-9973-8c1883a5b80b
  //referenHtml.innerHTML = ;
 
return ;  

  
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







