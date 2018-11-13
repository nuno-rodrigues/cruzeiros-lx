import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: any;

  ngOnInit() {
  }

  removeCharacter(value: any): any {
    value = value.split(',');
    // console.log(value);
    return value[0];
  }

  imageSrc(value: any): any {
    if (parseInt(value, 10) > 1500) {
      // console.log('greather then 0');
      return './assets/images/bigCruise.jpg';
    } else if (parseInt(value, 10) > 500) {
      return './assets/images/middleCruise.jpg';
    } else {
      return './assets/images/smallCruise.jpg';
    }
    // console.log(value);
  }

}
