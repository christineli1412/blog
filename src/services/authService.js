import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import userIcon from "./userIcon.png";

export function SignIn() {
  return (
    <div className="userButton">
      <img src={userIcon} alt="user icon" />
      <button
        id="signInButton"
        onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
      >
        Sign In
      </button>
    </div>
  );
}

export function SignOut() {
  return (
    <div className="userButton">
      <img src={auth.currentUser.photoURL} alt="profile" />
      <button id="signOutButton" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
