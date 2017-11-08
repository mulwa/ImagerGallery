// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyDLtIX8w593n4C1CWE_D9uZvGurToSYb4g",
    authDomain: "photo-gallery-3ed69.firebaseapp.com",
    databaseURL: "https://photo-gallery-3ed69.firebaseio.com",
    projectId: "photo-gallery-3ed69",
    storageBucket: "photo-gallery-3ed69.appspot.com",
    messagingSenderId: "508012027106"
  }
};
