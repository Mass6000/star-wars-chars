import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterComponent } from './characters/character/character.component';
import { CanActivateCharacterGuard } from './characters/can-activate-character.guard';
import { CharacterResolverGuard } from './characters/character-resolver.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  {path: 'characters', component: CharacterListComponent},
  {
    path: 'character/:id',
    canActivate: [CanActivateCharacterGuard],
    resolve: {character: CharacterResolverGuard},
    component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
