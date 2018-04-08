import { Component, OnInit } from '@angular/core';
import {Hero} from '../class/hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'heroes component';

  selectedHero: Hero;

  heroes: Hero[];

  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
