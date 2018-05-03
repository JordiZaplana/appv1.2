import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList ,AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from "firebase";
import {Chart} from 'chart.js';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-list',
  templateUrl: 'historicoSensores.html'
})
export class historicoSensores_1 {


@ViewChild('lineCanvas') lineCanvas;


todoList$: FirebaseListObservable<any[]>;
private lineChart: any;
items;
xArray:any[]=[];
yArray:any[]=[];

todoList1$: FirebaseListObservable<any[]>;
private lineChart1: any;
items1;
xArray1:any[]=[];
yArray1:any[]=[];  

/*
public myPerson = {};
<p>
The person's name is {{ myPerson.presion }} {{ myPerson.lux }}
</p>
  */
  public olwl : string[]=['me','yo','tu'];
  public olwd : number[]=[1000,1400,2000];
  public olwt : string ='line';  
  

  constructor(public navCtrl: NavController,private af: AngularFireDatabase ) {
 //selimina cada dilluns
    this.items = firebase.database().ref('placa_sensors/histSemanal/lux').orderByKey();
this.items.on('value', (snapshot) => {
this.xArray.splice(0,this.xArray.length);
this.yArray.splice(0,this.yArray.length);
snapshot.forEach((childSnapshot) => {
this.xArray.push(childSnapshot.key);
this.yArray.push(childSnapshot.val());
});
this.basicChart(this.xArray,this.yArray);
});
  };
//selimina cada 10 min.
/*
this.items1 = firebase.database().ref('placa_sensors/histReal/lux').orderByKey();
this.items1.on('value', (snapshot) => {
this.xArray1.splice(0,this.xArray1.length);
this.yArray1.splice(0,this.yArray1.length);
snapshot.forEach((childSnapshot) => {
this.xArray1.push(childSnapshot.key);
this.yArray1.push(childSnapshot.val());
});
this.basicChart(this.xArray1,this.yArray1);
});


  
  };
*/
  
basicChart(key,value){

  this.lineChart = new Chart (this.lineCanvas.nativeElement,{
type:'line',
data:{
  labels:key,
  datasets:[{

    label:"A tiempo real",
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


/*
ionViewDidLoad() {
  const personRef: firebase.database.Reference = firebase.database().ref(`/placa_sensors/`);
  personRef.on('value', personSnapshot => {
    this.myPerson = personSnapshot.val();
  });
};


  
  ionViewDidLoad1() {
    this.itemRef.on('value', itemSnapshot => {
      this.itemsr = [];
      itemSnapshot.forEach( itemSnap => {
        this.itemsr.push(itemSnap.val());
        return false;
      });
    });
  };
     


*/
  



  

}




