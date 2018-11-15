import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
// import * as data from '../../../assets/data/data.json';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCruisesService {

  // dataArray: any = data;

  constructor(private http: HttpClient) {
    // console.log(this.dataArray.data);
  }

  getCruises(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.api}`);
  }
}
