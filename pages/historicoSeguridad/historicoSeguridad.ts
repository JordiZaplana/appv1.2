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
import { Scope } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'page-list',
  templateUrl: 'historicoSeguridad.html'
})
export class historicoSeguridad_1 {
  storageDirectory: string = '';
  someTextUrl;
  someTextUr4:Observable<any>;
  ttt;
  item3;
  itemManual: AngularFireObject<any>;
  booll; 
  profileUrl: Observable<string | null>;
  items;
  items4;
  items2;
  list12;
olaa:String;
ttttt:String;
xArray:any[]=[];
yArray:any[]=[];
rray:any[]=[];

  public dateRef:Array<any>;
  constructor(public navCtrl: NavController, af: AngularFireDatabase) {
  
  
    this.items = af.list('placa_vigilancia/control/nombreHora').valueChanges().subscribe(data=>{
      //this code runs asynchronous
      this.items2=data
    });
    

    //for (let index = 0; index < this.list1.length; index++) {

    console.log( typeof(this.items2));
      this.items4 = firebase.database().ref('placa_vigilancia/control/nombreHora').orderByKey();
      this.items4.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      this.rray.push(childSnapshot.key);
      
      this.yArray.push(childSnapshot.val());
      
    });
    var a = [];
    var b = [];

    for(var i in this.rray){
        if(this.rray.hasOwnProperty(i)){
          a.push(i);
          b.push(this.rray[i]);
        }
       //document.getElementById("demo5").innerHTML  ="<a href =\"" + b[i] + "\">"
      
      
    }
      console.log(a);
      for (let i = 0; i < b.length; i++) {
        console.log(b[i].toString());
        
        firebase.storage().ref().child('alert/' + b[i].toString() +'.jpg').getDownloadURL()
        .then(response => this.someTextUrl = response)        
        .catch(error => console.log('error', error))    
        //document.getElementsByClassName("demo5")[i].innerHTML  ="<a href =\"" + b + "\">"
      

      }
              

      //document.getElementById("graf1").innerHTML =;
  

      });




    //}
            
              // time to remove 'bar'!
              // this is the correct way to change an array
             
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

   snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};


  pushPage_his_seg() {
    this.navCtrl.push(historicoSeguridad_1);
  };
  
    // Points to the root reference
    

  
  


  getTFot() {
    



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







