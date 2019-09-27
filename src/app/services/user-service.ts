import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  db = firebase.firestore();

  constructor() { 
  }

  setFavorite(dogId, isFavorite) {
    console.log(dogId);
    let id = firebase.auth().currentUser.uid;


    let updateMask = {}
    updateMask['favorites.'+dogId] = isFavorite;
    console.log(updateMask);
    return this.db.collection("users").doc(id).update(updateMask);

    };

    addUser(id) {
        let docRef = this.db.collection("users").doc(id);  
        return docRef.get().then(doc => {
            if(!doc.exists){
               docRef.set({
                   userName: firebase.auth().currentUser.displayName,
                   favorites: {}
               }) 
            }
        });     
    }

    isFavorite(id, dogId) {
        let docRef = this.db.collection("users").doc(id);  
        return docRef.get().then(doc => {
            console.log(doc.data().favorites[dogId])
            if(doc.data().favorites[dogId]) {
                return true;
            } else {
                return false;
            }
        });     
    }

    
    getUser(){
        return firebase.auth().currentUser.uid;
    }

  
}