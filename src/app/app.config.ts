import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // les routes sont fournies au niveau racine
    provideRouter(routes),
    provideAnimationsAsync(),
    // le HTTPClient est fourni globalement à l'application
    provideHttpClient(), provideAnimationsAsync()]
};
