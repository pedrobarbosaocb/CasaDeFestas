import { HorariosComponent } from './horarios/horarios.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'artistas', component:ArtistasComponent},
  {path:'horarios', component:HorariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
