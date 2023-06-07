// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,

  appointmentUrl : 'http://localhost:8096/appointment/appointment',
  // appointmentUrl : 'https://appointmentservice.dev.skillassure.com/appointment/appointments',
  clinicURL: 'https://clinicservice.dev.skillassure.com/clinic',
  DepartmentUrl: 'https://departmentservice.dev.skillassure.com/department',
  VetUrl: 'https://vetservice.dev.skillassure.com/vet',
  petUrl: 'https://petservice.dev.skillassure.com/pet/pet',

  // firebase connection details
  firebase: {
    apiKey: 'AIzaSyCI3zOChykFvesUAKiV5hBWfDDU795iVYM',
    authDomain: 'authentication-service-9c9b6.firebaseapp.com',
    projectId: 'authentication-service-9c9b6',
    storageBucket: 'authentication-service-9c9b6.appspot.com',
    messagingSenderId: '57151664865',
    appId: '1:57151664865:web:9e38670668125cd8d07da0',
    measurementId: 'G-QSKG3ES558',
  },

  baseUrl:
    'https://appointmentservice.dev.skillassure.com/appointment/appointments',


  getDeptById:
    'https://departmentservice.dev.skillassure.com/department/petzeydepartment/department/departmentbyid/',
};


