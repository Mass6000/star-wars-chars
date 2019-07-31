import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Character } from './shared/character.model';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolverGuard implements Resolve<Character> {
  constructor(private characterService: CharacterService) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Character> | Promise<Character> | Character {
    return this.characterService.getCharacter(route.params.id);
  }
}
