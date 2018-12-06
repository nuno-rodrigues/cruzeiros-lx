import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Cruzeiros Lx';
  newDate: any;
  updateJson: any = '05-12-2018';
  dataArray: any;

  countChange(event) {
    this.newDate = event;
    // console.log(this.newDate);
    // console.log('countChange:-----');
  }

  constructor() {
    // console.log(this.newDate);
    // console.log(cruises);
    // console.log(this.dataArray);
    // this.dataArray = cruises.dataArray;
  }

}
