import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  db = firebase.firestore();
  loggedIn = false;
  userName = '';
  profilePicture = '';
  

  constructor(private readonly userService: UserService) { 
    this.initFirebaseAuth();
    
  }

    signAction() {
      if (!this.loggedIn) {
        this.signIn();

      } else {
        this.signOut();
      }
    }

    // Signs-in pet app
    signIn() {
        // Sign into Firebase using popup auth & Google as the identity provider.
        
        let provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then((userCred) => {
            let id = userCred.user.uid;
            this.userService.addUser(id);
        }) 

    }

    // Signs-out of pet app
    signOut() {
        // Sign out of Firebase.ß
        firebase.auth().signOut();

    }

    // Initiate firebase auth.
    initFirebaseAuth() {
        // Listen to auth state changes.
        firebase.auth().onAuthStateChanged(user => {
            this.authStateObserver(user)
        });
    }

    // Triggers when the auth state change for instance when the user signs-in or signs-out.
    authStateObserver(user) {
    if (user) { // User is signed in!
      // Get the signed-in user's profile pic and name.
      //var profilePicUrl = this.getProfilePicUrl();
      this.userName = this.getUserName();
      this.profilePicture = this.getProfilePicUrl();
      console.log(this.userName);
      //document.getElementById('user-pic').removeAttribute('hidden');

      this.loggedIn = true;
    } else {
        this.userName = '';
        //document.getElementById('user-pic').setAttribute('hidden', 'true');
        this.loggedIn = false;
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

