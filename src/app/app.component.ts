import { Component } from '@angular/core';
import { GetCruisesService } from './shared/services/get-cruises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Cruzeiros Lx';
  newDate: any;
  updateJson: any = '07-11-2018';
  dataArray: any;

  countChange(event) {
    this.newDate = event;
    // console.log(this.newDate);
    // console.log('countChange:-----');
  }

  constructor(cruises: GetCruisesService) {
    // console.log(this.newDate);
    // console.log(cruises);
    // console.log(this.dataArray);
    this.dataArray = cruises.dataArray;
  }

}
