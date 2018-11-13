import { Injectable } from '@angular/core';
import * as data from '../../../assets/data/data.json';

// links with info:
// http://www.portodelisboa.pt/portal/page/portal/PORTAL_PORTO_LISBOA/CRUZEIROS/PREVISAO_NAVIOS_CRUZEIRO
// http://crew-center.com

@Injectable({
  providedIn: 'root'
})
export class GetCruisesService {

  dataArray: any = data;

  constructor() {
    // console.log(this.dataArray.data);
  }
}
