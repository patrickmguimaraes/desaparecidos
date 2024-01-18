import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { routes } from './app.routes';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DesaparecidosService } from './services/desaparecidos.service';
import { LoadingService } from './services/loading.service';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
 
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    },
    provideClientHydration(),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    DesaparecidosService,
    LoadingService,
    provideHttpClient(withJsonpSupport()),
  ]
};
