import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import firebase from "firebase";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
//import { AngularFireStorageModule } from 'angularfire2/storage';
//import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from "firebase";

@Component({
  selector: 'page-list',
  templateUrl: 'historicoSeguridad.html'
})
export class historicoSeguridad_1 {
  storageDirectory: string = '';
  someTextUrl:Observable<any[]>;
  someTextUr4:Observable<any>;
  ttt;
  item3;
  itemManual: AngularFireObject<any>;
  booll; 
  profileUrl: Observable<string | null>;
  items;
olaa:String;
ttttt:String;

  public dateRef:Array<any>;
  constructor(public navCtrl: NavController, af: AngularFireDatabase) {
  
  
    this.items = af.list('placa_vigilancia/control/nombreHora').valueChanges().subscribe(data=>{
      //this code runs asynchronous
      this.items=data
    });
              // this.getTFotot();

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
    this.item3 = this.itemManual.valueChanges();
  }
  pushPage_his_seg() {
    this.navCtrl.push(historicoSeguridad_1);
  };
  
    // Points to the root reference
    

  
  


  getTFotot() {
    firebase.storage().ref('alert' + "/" + this.items + '.jpg').getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      this.dateRef = url;
console.log(this.dateRef);
console.log(url);
      // Or inserted into an <img> element:
      
        console.log(url);
      for (let index = 0; index < this.dateRef.length; index++) {
        const dateRefent = this.dateRef[index];        
      
       document.getElementById('myimg').innerHTML="<a href =\"" + dateRefent + "\">";
      }
      
    }).catch(function(error) {
      // Handle any errors
    });
//    http://javasampleapproach.com/frontend/angular/angular-4-firebase-display-list-images-firebase-storage#3_Get_and_display_List_of_Images  
      //
     
    var www =  firebase.storage().ref('alert');
    //for (let index =this.items; index <this.items.length; index++ {
      
    //}
     //www.child("/" + this.items + '.jpg').getDownloadURL().subscribe(url=>{
      //this code runs asynchronous
      //this.dateRef=url;
    //});
    
    
    

    


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
    this.itemManual.set(1);
    
    
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


  
}







