import { Component } from '@angular/core';


export class Hero {
  id: number;
  name: String;
}

const HEROES: Hero[] = [
  { id: 1, name: 'Anderson' },
  { id: 2, name: 'Helena' },
  { id: 3, name: 'Elaine' },
  { id: 4, name: 'Ana' },
  { id: 5, name: 'Bárbara' },
  { id: 6, name: 'Allysson' },
  { id: 7, name: 'Eduardo' },
  { id: 8, name: 'Arthur' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}