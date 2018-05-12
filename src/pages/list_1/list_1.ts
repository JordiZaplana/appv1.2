import { Component } from '@angular/core';
import { NavController,Platform, AlertController, LoadingController } from 'ionic-angular';
import { historicoSeguridad_1 } from '../historicoSeguridad/historicoSeguridad';

import { AngularFireDatabase ,AngularFireList,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import firebase from "firebase";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
//import { AngularFireStorageModule } from 'angularfire2/storage';
//import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from "firebase";


//__________________________________________________








@Component({
  selector: 'page-list',
  templateUrl: 'list_1.html',


})
export class ListPage_1 {
  storageDirectory: string = '';
  someTextUrl:Observable<any>;
  someTextUr4:Observable<any>;
  ttt;
  item3;
  itemManual: AngularFireObject<any>;
  booll; 
  profileUrl: Observable<string | null>;
  items: Observable<any>;
  itemMa;
olaa:String;
ttttt:String;
gff;
public name;
  public dateRef;
  constructor(public navCtrl: NavController, af: AngularFireDatabase, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  
  
    this.itemMa = af.object('placa_vigilancia/control/manual').valueChanges().subscribe(data=>{
      //this code runs asynchronous
      this.itemMa=data
    });
    //console.log(this.items.toString());
    
 /* firebase.storage().ref('alert/' + this.items + '.jpg').getDownloadURL()
  .then(response => this.someTextUrl = response)
  .catch(error => console.log('error', error))
  //this.getTFoto();
  console.log(this.someTextUrl);
*/

/*
  firebase.storage().ref('manual/manual.jpg').getDownloadURL()
  .then(response => this.someTextUrl = response)
  .catch(error => console.log('error', error))
*/


    this.itemManual = af.object('placa_vigilancia/control/manual');
    //this.item3 = this.itemManual.valueChanges();
  }
  pushPage_his_seg() {
    this.navCtrl.push(historicoSeguridad_1);
  };
  
    // Points to the root reference
    

  
  


  getTFotot() : String{
      
//    http://javasampleapproach.com/frontend/angular/angular-4-firebase-display-list-images-firebase-storage#3_Get_and_display_List_of_Images  
      //
     
    var www =  firebase.storage().ref('alert');
    
    this.dateRef = www.child("/" + this.items + '.jpg').getDownloadURL;
    
    console.log(this.dateRef[1]);
    this.olaa=this.dateRef.toString();


    return this.olaa[1]


    /*


  console.log(this.items);
    for(let i ; i == this.items; i++)
this.dd= firebase.storage().ref('alert/' + String(this.items) + '.jpg').getDownloadURL()
  .then(response => this.someTextUrl = response)
  .catch(error => console.log('error', error))
  //this.getTFoto();
  console.log(this.someTextUrl);
*/

  };
    
  
  public getTFoto(){
    //this.itemManual.set(1);
    
    
        var commentsRef = firebase.database().ref('placa_vigilancia/control/nombreHora/').orderByValue();
        commentsRef.on('child_added', function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log("segundo!!!! ");
          console.log(typeof(childData));
          console.log(childKey);
          
          
            

            //var ttt=firebase.storage().ref('alert/' + childData + '.jpg').getDownloadURL();
            var www =  firebase.storage().ref('alert');
    
            this.dateRef = www.child("/" + childData + '.jpg').getDownloadURL;
            this.navCtrl.push(ListPage_1,this.dateRef.toString());
            //return this.dateRef.toString();
           
          //firebase.storage().ref('manual/' + "manual" + '.jpg').getDownloadURL();
          
          //var course = "<a href =\"" + ttt + "\">";        
          //console.log(ttt );
          console.log(this.dateRef.toString());
          console.log(childData);
         var ttttt=  document.getElementById("eip") ;      
         console.log(ttttt);
          //document.getElementById("demo5")[0] = ttt;       ="<a href =\"" + this.dateRef.toString() + "\">"
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
public getFoto(){
  //HACER UN FOR!!
  
  this.sleep(500);
  this.sleep(500);
  this.loadingD();

firebase.storage().ref('manual/manual.jpg').getDownloadURL().then(function(url)                             {
  // Once we have the download URL, we set it to our img element
  document.querySelector('img').src = url;

}).catch(function(error) {
  // If anything goes wrong while getting the download URL, log the error
  console.error(error);
});
  //.then(response => this.someTextUrl = response)
  //.catch(error => console.log('error', error))

  //var aTag = document.createElement('demo5');
  //aTag.innerHTML = this.someTextUrl;
//var name = "<script >'<a href='" + this.someTextUrl + "'>Google</a>'</script>";
console.log(this.someTextUrl);
//var name = "<img src =\"" + this.gff + "\">";
this.name = "<script >'<img src =\"" + this.someTextUrl + "\">'</script>";
//  link
  document.getElementById("demo4").innerHTML=this.name;

  //  foto
  //document.getElementById("demo5").innerHTML = "<img src =\"" + this.someTextUrl + "\">";

  //var  referenHtml = document.getElementById("demo5");
  //referenHtml.innerHTML = "<img src=\"https://firebasestorage.googleapis.com/v0/b/tfg-app-v1.appspot.com/o/manual%2Fmanual.jpg?alt=media&token=3b66c29a-bbc9-4236-ac8d-49e6cb1bbb2e\" width=\"400px\" height=\"150px\">";
    //                                  https://firebasestorage.googleapis.com/v0/b/tfg-app-v1.appspot.com/o/manual%2Fmanual.jpg?alt=media&token=274bf110-3f11-4510-9973-8c1883a5b80b
  //referenHtml.innerHTML = ;
  
return ;  

  
};
AlertOops() {
  let alert = this.alertCtrl.create({
    title: 'Oops algo ha ido mal!',
    subTitle: 'Vuelve a intentarlo',
    buttons: ['Aceptar']
  });
  alert.present();
};

confirmGetFoto() {
  //var delM = firebase.storage().ref('manual/manual.jpg');

  this.itemManual.set(0);
  this.sleep(500);
  this.sleep(500);
// Delete the file

this.sleep(500);
  let alert = this.alertCtrl.create({
    title: 'Se esta realizando la foto!',
    
    buttons: [
      
      {
        text: 'Aceptar',
        handler: () => {

          if(this.itemMa=="0"){
            this.getFoto();

          }

          else {
        
            this.AlertOops();
        }
          
        }
      }
    ]
  });
  alert.present();
};
loadingD() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
};

  
}







