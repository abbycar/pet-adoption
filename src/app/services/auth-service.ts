import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  db = firebase.firestore();

  constructor() { 
  }

    // Signs-in Friendly Chat.
    signIn() {
        // Sign into Firebase using popup auth & Google as the identity provider.
        var provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider);
        console.log(this.getUserName());
    }

    // Signs-out of Friendly Chat.
    signOut() {
        // Sign out of Firebase.ß
        firebase.auth().signOut();
    }

    // Triggers when the auth state change for instance when the user signs-in or signs-out.
    authStateObserver(user) {
      if (user) { // User is signed in!
        console.log("A user!");
      }
    }

    // Returns the signed-in user's profile pic URL.
    getProfilePicUrl() {
      return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
    }

    // Returns the signed-in user's display name.
    getUserName() {
      return firebase.auth().currentUser.displayName;
    }

}

