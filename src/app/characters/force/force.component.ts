import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'swc-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.css']
})
export class ForceComponent implements OnInit {
  @Input() forceStrength: number;
  @Output() onForceChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onForceClick(strength: number) {
    this.onForceChanged.emit(strength);
  }

}
