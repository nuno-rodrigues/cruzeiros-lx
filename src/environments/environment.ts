// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// links with info:
// http://www.portodelisboa.pt/portal/page/portal/PORTAL_PORTO_LISBOA/CRUZEIROS/PREVISAO_NAVIOS_CRUZEIRO
// http://crew-center.com

export const environment = {
  production: false,
  api: 'http://localhost:88/angular/backoffice/data.json'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
