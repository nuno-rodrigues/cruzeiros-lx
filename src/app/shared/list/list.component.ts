import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GetCruisesService } from '../services/get-cruises.service';
import { DatePipe } from '@angular/common';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DatePipe]
})

export class ListComponent implements OnInit, OnDestroy {

  private _dateSet: any;
  get dateSet(): any {
      return this._dateSet;
  }

  @Input('dateSet')
  set dateSet(value: any) {
      this._dateSet = value;
      if (value) {
        this.cruisesArray = []; // reset the cruisesArray
        this.totalPassengers = 0; // reset the total passengers
        this.addCruises();
      }
      // console.log('list: ', this._dateSet);
  }

  @Input() dataInfo: any;
  @Input() numberCruisesToday: any = 0;

  cruisesArray: any = [];
  dateNow: number = Date.now();
  currentDate: any;
  totalPassengers: number;
  uns: Subscription;

  constructor(private datePipe: DatePipe, private cruises: GetCruisesService) {}

  ngOnInit() {
    this.totalPassengers = 0;
    this.addCruises();
    this.checkCruises();
  }

  ngOnDestroy() {
    this.uns.unsubscribe();
  }

  addCruises() {
    this.uns = this.cruises.getCruises()
      .subscribe(cruises => {
        this.dataInfo = cruises;
        this.addCruisesToArray();
      });
  }

  addCruisesToArray() {
    this.dataInfo.forEach(element => {
      this.currentDate = this.datePipe.transform(this.dateNow, 'dd-MM-yyyy'); // whatever format you need
      if (this.dateSet) {
        // console.log('change date');
        this.currentDate = this.dateSet;
      }
      // this.currentDate = '30-09-2018';
      // console.log(this.currentDate);
      // console.log(element.Chegada.split(' ')[0]);
      // console.log(element.Partida.split(' ')[0]);
      // console.log(element.CapMaxPax);
      // console.log(element.Navio);
      // console.log(this.currentDate <= element.Partida.split(' ')[0]);
      // console.log(this.currentDate >= element.Chegada.split(' ')[0]);
      // console.log('---');
      // console.log(parseInt(element.CapMaxPax, 5));

      // if the current date is equal or inferior of the departure date
      if (this.currentDate <= element.Partida.split(' ')[0]) {
        // if current date is equal or superior to arrival date
        if (this.currentDate >= element.Chegada.split(' ')[0]) {
          // remove all cruises without capacity
          if (element.CapMaxPax !== ',00' && element.CapMaxPax !== '') {
            // console.log(element);
            this.cruisesArray.push(element);
            // console.log(parseInt(element.CapMaxPax, 10));
            // console.log(this.totalPassengers);
            this.totalPassengers = this.totalPassengers + parseInt(element.CapMaxPax, 10);
          }
        }
      }

      // sort the array by capacity from bigger to smaller
      this.cruisesArray = this.cruisesArray.sort(function(obj1, obj2) {
        // console.log(obj1.CapMaxPax);
        // console.log(obj2.CapMaxPax);
        // console.log(parseInt(obj1.CapMaxPax, 10) - parseInt(obj2.CapMaxPax, 10));
        // console.log('----');
        return parseInt(obj2.CapMaxPax, 10) - parseInt(obj1.CapMaxPax, 10);
      });

      // console.log(this.cruisesArray);
    });
  }

  checkCruises() {
    // console.log(this.checkCruises.length);
    return this.cruisesArray.length > 0;
  }

}
