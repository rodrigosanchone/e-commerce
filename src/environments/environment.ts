// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
     config:{
      apiKey: "AIzaSyAxpmUorXi7GSOv2X6m95_yp67ANfzjLyk",

      authDomain: "ecommerce-76079.firebaseapp.com",

      projectId: "ecommerce-76079",

      storageBucket: "ecommerce-76079.appspot.com",

      messagingSenderId: "306226277328",

      appId: "1:306226277328:web:d41a19de496ce04732a7d5"
     }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
