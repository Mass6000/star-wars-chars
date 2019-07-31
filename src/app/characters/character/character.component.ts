import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../shared/character.model';
// import { take, skip } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'swc-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character;

  // constructor(private characterService: CharacterService) { }
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {

  }

  ngOnInit() {
    // this.characterService
    //   .getSelectedCharacter()
    //   .pipe(
    //     skip(2)
    //   )
    const id = this.route.snapshot.paramMap.get('id');
    this.characterService.getCharacter(id)
      .subscribe((character: Character) => {
        this.character = character;
      });
    // this.characterService.getSelectedCharacter().subscribe((character: Character) => {
    //   this.character = character;
    // });
  }

  goBack() {
    this.router.navigate(['/characters']);
  }

}
