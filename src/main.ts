import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { Auth } from './app/auth';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    Auth
  ]
}).catch(err => console.error(err));