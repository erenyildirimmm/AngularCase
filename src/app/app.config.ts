import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {

  apiKey: "API_KEY",

  authDomain: "angular-case-f0cbc.firebaseapp.com",

  projectId: "angular-case-f0cbc",

  storageBucket: "angular-case-f0cbc.appspot.com",

  messagingSenderId: "727320968050",

  appId: "1:727320968050:web:78abc8b7df42a508fffbeb"

};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ]), provideAnimationsAsync()
  ]
};
