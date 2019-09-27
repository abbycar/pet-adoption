import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root',
})
export class DogService {
  db = firebase.firestore();

  constructor() { 
  }

  getDogs(): Promise<any> {
    return this.db.collection("dogs").get().then(querySnapshot => {
      return querySnapshot.docs.map(doc => {
          console.log({
            id: doc.id, ...doc.data()
          });
          return {
            id: doc.id, ...doc.data()
          };
        });
      });
    };

  getDogById(id) {
    let docRef = this.db.collection("dogs").doc(id);  
    return docRef.get().then(doc => {
      console.log(doc.id);
      console.log(doc.data);
      return doc.data();
    });
  };


}