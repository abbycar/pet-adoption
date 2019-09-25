import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root',
})
export class DogService {
  db = firebase.firestore();

  constructor() { 
  }

  getDogs() {
    return this.db.collection("dogs").get().then(querySnapshot => {
      return querySnapshot.docs.map(doc => doc.data() );
      });
    };
}