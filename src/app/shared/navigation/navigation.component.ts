import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [DatePipe]
})
export class NavigationComponent implements OnInit {

  dateNow: number = Date.now();
  dateCurrent: number = Date.now();
  datePrev: any;
  dateNext: any;
  currentDate: any;

  @Input() isDisabledPrev: boolean;
  @Input() isDisabledNext: boolean;
  @Output() newDate = new EventEmitter<any>();

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.isDisabledNext = true;
    // this.isDisabledPrev = true;
  }

  checkStatus(value: any) {
    // console.log(value);
    // add and remove one day
    const day = (1000 * 60 * 60 * 24);
    if (value === 'next') {
      this.dateNext = this.dateNow + day;
      this.dateNow = this.dateNext;
    } else if (value === 'prev') {
      this.datePrev = this.dateNow - day;
      this.dateNow = this.datePrev;
    }
    // enable and disable buttons next and previous
    if (this.dateNow === this.dateNext) {
      this.isDisabledPrev = true;
    } else if (this.dateCurrent === this.datePrev) {
      this.isDisabledPrev = false;
    }
    // send data to list component
    this.currentDate = this.datePipe.transform(this.dateNow, 'dd-MM-yyyy');
    this.newDate.emit(this.currentDate);
    // console.log('dateNow:', this.dateNow);
    // console.log('datePrev:', this.datePrev);
    // console.log('dateNext:', this.dateNext);
    // console.log('end checkStatus -----');
  }

}
