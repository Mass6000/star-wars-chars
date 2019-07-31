import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterComponent } from './characters/character/character.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  {path: 'characters', component: CharacterListComponent},
  {path: 'character/:id', component: CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
