import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { JsonComponent } from './components/json/json.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokemon/:nombre', component: PokemonComponent},
  {path: 'json', component: JsonComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
