import { Component, Input, OnChanges } from '@angular/core';
import { Actor } from '../Actor';

@Component({
  selector: 'app-actor-list',
  standalone: false,
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css',
})
export class ActorListComponent implements OnChanges {
  @Input() actors: Actor[] = [];
  promedioPopularidad = 0;

  ngOnChanges(): void {
    this.calcularPromedio();
  }

  private calcularPromedio(): void {
    if (this.actors && this.actors.length > 0) {
      let suma = 0;
      this.actors.forEach((a) => (suma += a.popularity));
      this.promedioPopularidad = Number((suma / this.actors.length).toFixed(2));
    }
  }
}
