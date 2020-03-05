// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC__q6CcmfUMFUPrz8M_u815Sp4AINaT68",
    authDomain: "adventlyrics-623a2.firebaseapp.com",
    databaseURL: "https://adventlyrics-623a2.firebaseio.com",
    projectId: "adventlyrics-623a2",
    storageBucket: "adventlyrics-623a2.appspot.com",
    messagingSenderId: "1067742438407",
    appId: "1:1067742438407:web:51e11596624339c63136a2"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
