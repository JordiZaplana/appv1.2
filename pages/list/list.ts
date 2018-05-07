import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from "firebase";
import {Chart} from 'chart.js';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineCanvas1') lineCanvas1;
  
  public labelMaster;

  todoList$: FirebaseListObservable<any[]>;
  private lineChart: any;
  items;
  itemsRef1;
  xArray:any[]=[];
  yArray:any[]=[];
  
  public cambio:boolean ;
  

  itemActiveSemanal;
  itemActiveReal;
  itemLux;
  itemTemp;
  itemPres;
  itemHum;
  refRemove;

  item3: Observable<any>;
  itemActivo: AngularFireObject<any>;
  
  itemsRef: AngularFireList<any>;
  employees: Observable<any[]>;
  item3_hist: Observable<any>;
  itemActivo_hist: AngularFireObject<any>;


  
 imageSource  ;
  employeePhoto;
  public CValue:String;
  public isToggled: boolean;
  public isToggled2: boolean;
  public isToggled3: boolean;
  public isToggled4: boolean;
  public isToggled5: boolean;

  constructor(public navCtrl: NavController, af: AngularFireDatabase) {

    //this.itemActivo_hist = af.object('placa_sensors/active_hist');
    //this.item3_hist = this.itemActivo_hist.valueChanges();  

    //this.itemActiveSemanal = af.object('placa_sensors/config/activesemanal');
    //this.itemActiveReal = af.object('placa_sensors/config/activereal');
/*
    this.itemLux= af.object('placa_sensors/config/actlux');
    this.itemTemp= af.object('placa_sensors/config/acttemp');
    this.itemPres= af.object('placa_sensors/config/actpres');
    this.itemHum= af.object('placa_sensors/config/acthum');
  */
 
    this.isToggled = false;
    this.isToggled2 = false;
    this.isToggled3 = false;
    this.isToggled4 = false;
/*
    this.itemsRef =  af.list('/placa_sensors');
    this.employees = this.itemsRef.valueChanges();
 
    this.itemActivo = af.object('placa_sensors/active');
    this.item3 = this.itemActivo.valueChanges();
*/
 //   this.itemActiveSemanal.set(1);
 //this.itemActiveReal.set(0);
 
// this.itemActiveLux = af.object('placa_sensors/config/activesemanal');




    /*
    this.refRemove = af.list("placa_sensors/histSemanal/lux");
    this.refRemove.remove();    
    this.refRemove.set([null,null]);
    */

 
   
   


   }
   
   
   
 
 
  basicChart(key,value,labelMaster){

    this.lineChart = new Chart (this.lineCanvas.nativeElement,{
  type:'line',
  data:{
    labels:key,
    labels1:["init","fin"],
    datasets:[{
  
      label:labelMaster,
      fill:true,
      lineTension:0.1,
      backroundColor: "rgba(72,138,255,0.4)",
      borderColor: "rgba(72,138,255,1)",
  
   borderCapStyle: 'butt',
   borderDash:[],
   borderDashOffset:0.0,
   borderJoinStyle:'miter',
   pointBorderColor:"rgba(72,138,255,1)",
   pointBacgroundColor: "#fff",
   pointBorderWidth:2,
   pointHoverRadius:2,
   pointHoverBackgroundColor:"rgba(72,138,255,1)",
   pointHoverborderColor:"rgba(220,220,220,1)",
   pointHoverBackgroundWidth: 2,
   pointRadius:0,
   pointHitRadius:2,
   data:value,
   data1:[20,10,30,50,2],
   spanGaps:false,
  
  
  }]
  },
  options:{
  scales:{
    xAxes:[{
      scaleLabel:{
        display:true,
        labelString:' '
      }
    }],
  }
  
  }
  
    });
  
  
  };
  
 

  
  public notify1() {

    this.isToggled=!this.isToggled;
    if(this.isToggled==true){
    var db = firebase.database();
    let ref1 = db.ref("placa_sensors/" + "temperatura" );
    var vall=ref1.on("value", function(snapshot) {
      snapshot.val();
      document.getElementById("demo1").innerHTML ="Temperatura: " + snapshot.val() + " ºC";
      return snapshot.val();
        });
      

  
  }else{
    document.getElementById("demo1").innerHTML ="Temperatura: ";
  }
    console.log("Toggled: "+ this.isToggled); 
  };

  public notify2() {
    this.isToggled2=!this.isToggled2;
    if(this.isToggled2==true){
    var db = firebase.database();
    let ref1 = db.ref("placa_sensors/" + "humidity" );
    var vall=ref1.on("value", function(snapshot) {
      snapshot.val();
      document.getElementById("demo2").innerHTML = "Humedad: " + snapshot.val() + " %";
      return snapshot.val();
        });
      }else{
        document.getElementById("demo2").innerHTML = "Humedad: ";
      }
      
    console.log("Toggled: "+ this.isToggled); 
  };  
  public notify3() {
    this.isToggled3=!this.isToggled3;
    if(this.isToggled3==true){
    var db = firebase.database();
    let ref1 = db.ref("placa_sensors/" + "presion" );
    var vall=ref1.on("value", function(snapshot) {
      snapshot.val();
      document.getElementById("demo3").innerHTML = "Presión: " + snapshot.val() + " bar";
      return snapshot.val();
        });
      }else{
        document.getElementById("demo3").innerHTML = "Presión: ";
      }
      
    console.log("Toggled: "+ this.isToggled); 
  };  

  public notify5() {
     
    this.isToggled5=!this.isToggled5;
    if(this.isToggled5==true){
    var db = firebase.database();
       
    let ref1 = db.ref("placa_sensors/" + "lux" );
    var vall=ref1.on("value", function(snapshot) {

      document.getElementById("demo5").innerHTML = "Luminosidad: " +  snapshot.val() + " lux";

        });
            this.items = firebase.database().ref('placa_sensors/histSemanal/lux').orderByKey();
      this.items.on('value', (snapshot) => {
      this.xArray.splice(0,this.xArray.length);
      this.yArray.splice(0,this.yArray.length);
      snapshot.forEach((childSnapshot) => {
      this.xArray.push(childSnapshot.key);
      this.yArray.push(childSnapshot.val());
      });
      this.labelMaster="lux";
      this.basicChart(this.xArray,this.yArray,this.labelMaster);
      //document.getElementById("graf1").innerHTML =;
      });
     }else{
      document.getElementById("demo5").innerHTML ="Luminosidad: ";
      // this.basicChart(null,null," ");
       
     }
       console.log("Toggled: "+ this.isToggled5); 
  };

}
