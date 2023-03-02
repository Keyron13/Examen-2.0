import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeliculaComponent } from './pelicula/crear-pelicula/crear-pelicula.component';
import { VerPeliculaComponent } from './pelicula/ver-pelicula/ver-pelicula.component';

const routes: Routes = [
  {path: 'crearPelicula',component:CrearPeliculaComponent},
  {path: 'verPelicula',component:VerPeliculaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
