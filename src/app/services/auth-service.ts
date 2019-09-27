import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  db = firebase.firestore();
  loggedIn = false;
  userName = '';
  

  constructor() { 
    firebase.auth().onAuthStateChanged(this.authStateObserver);
  }

    signAction() {
      if (!this.loggedIn) {
        this.signIn();
        console.log('Signed in');
        this.userName = this.getUserName();

      } else {
        this.signOut();
        console.log('Signed out');
        this.userName = '';
      }
    }

    // Signs-in pet app
    signIn() {
        // Sign into Firebase using popup auth & Google as the identity provider.
        let provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider);
        //console.log(this.getUserName());
        this.loggedIn = true;
    }

    // Signs-out of pet app
    signOut() {
        // Sign out of Firebase.ß
        firebase.auth().signOut();
        this.loggedIn = false;
    }

    // Initiate firebase auth.
    initFirebaseAuth() {
        // Listen to auth state changes.
        firebase.auth().onAuthStateChanged(this.authStateObserver);
    }

    // Triggers when the auth state change for instance when the user signs-in or signs-out.
    authStateObserver(user) {
    if (user) { // User is signed in!
      // Get the signed-in user's profile pic and name.
      //var profilePicUrl = this.getProfilePicUrl();
      this.userName = firebase.auth().currentUser.displayName;
      console.log(this.userName);
    } else {
        this.userName = '';
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

