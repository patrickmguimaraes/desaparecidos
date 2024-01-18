import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DesaparecidoComponent } from './pages/desaparecido/desaparecido.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: "Desaparecidos"
    },
    {
      path: 'desaparecido/:id',
      component: DesaparecidoComponent,
      title: "Desaparecidos - Desaparecido"
    },
    {
      path: 'page-not-found',
      component: PageNotFoundComponent,
      title: "Desaparecidos - 404"
    },
    {path: '**', redirectTo: 'page-not-found'}
  ];