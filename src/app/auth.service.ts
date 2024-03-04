import { Injectable, inject, signal } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from "@angular/fire/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "./user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Injecting the AngularFire Auth service
  firebaseAuth = inject(Auth);

  // Creating an observable for the current user
  user$ = user(this.firebaseAuth);

  // Creating a signal to track changes in the current user
  currentUserSig = signal<UserInterface | null | undefined>(undefined);

  // User registration method
  register(
    email: string,
    username: string,
    password: string,
  ): Observable<void> {
    // Creating a promise for user registration and updating user profile
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(response => updateProfile(response.user, { displayName: username }),);
    // Converting the promise to an observable and returning it
    return from(promise);
  }

  // User login method
  login(email: string, password: string): Observable<void> {
    // Creating a promise for user login
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => { });
    // Converting the promise to an observable and returning it
    return from(promise);
  }

  isLoggedIn(): Observable<boolean> {
    return new Observable((observer) => {
      const unsubscribe = this.firebaseAuth.onAuthStateChanged((user) => {
        observer.next(!!user);
      });

      // Abonelik sonlandığında temizlik yap
      return () => unsubscribe();
    });
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
}