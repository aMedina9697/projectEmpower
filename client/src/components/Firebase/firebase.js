import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: "AIzaSyBstEtnaVlLag5M_DV4NTsnT5JuhwWKPHY",
  authDomain: "projectempower-70ed6.firebaseapp.com",
  databaseURL: "https://projectempower-70ed6.firebaseio.com",
  projectId: "projectempower-70ed6",
  storageBucket: "projectempower-70ed6.appspot.com",
  messagingSenderId: "501214398889"
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}
export default Firebase;