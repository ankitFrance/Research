import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.time('Angular Bootstrap Time in main'); // Start timer

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.timeEnd('Angular Bootstrap Time in main'); // Stop timer when Angular is fully initialized
    console.log('Angular App Fully Loaded! in main ');
  })
  .catch((err) => console.error(err));
