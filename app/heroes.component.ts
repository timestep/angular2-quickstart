import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(
    private _heroService: HeroService,
    private _router: Router
  ) { }

  public selectedHero:Hero;

  public heroes: Hero[];

  getHeroes() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', this.selectedHero]);
  }

  onSelect(hero: Hero) {
     this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }
}
