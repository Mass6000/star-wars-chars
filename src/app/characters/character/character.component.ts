import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../shared/character.model';

@Component({
  selector: 'swc-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character;
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getSelectedCharacter().subscribe((character: Character) => {
      this.character = character;
    });
  }

}
