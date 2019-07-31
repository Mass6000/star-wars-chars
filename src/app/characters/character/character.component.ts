import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'swc-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character;

  // constructor(private characterService: CharacterService) { }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.character = data.character;
  }

  goBack() {
    this.router.navigate(['/characters']);
  }

}
