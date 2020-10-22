import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Planet} from '../../interfaces/planet.interface';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetComponent implements OnInit {

  @Input() planet: Planet;
  @Output() onSelected = new EventEmitter<Planet>(null);

  constructor() { }

  ngOnInit(): void {
  }

  public clicked(event) {
    this.onSelected.emit(this.planet);
  }

  public get name(): string {
    return (this.planet && this.planet.name) ? this.planet.name : '';
  }

}
