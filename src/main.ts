import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as firebase from "firebase";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

var firebaseConfig = {
  apiKey: "AIzaSyCGZy7ipUdlR1jH5gDdWnpyQYh-C88IaQc",
  authDomain: "pet-adoption-9d80e.firebaseapp.com",
  databaseURL: "https://pet-adoption-9d80e.firebaseio.com",
  projectId: "pet-adoption-9d80e",
  storageBucket: "pet-adoption-9d80e.appspot.com",
  messagingSenderId: "807306212249",
  appId: "1:807306212249:web:7a34cd39545a0b09ae9908"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);