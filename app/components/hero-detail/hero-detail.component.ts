import { Component, OnInit } from 'angular2/core';
import { Hero } from '../../core/interfaces/hero';
import { RouteParams } from 'angular2/router';
import { HeroService } from '../../core/services/hero.service';;

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/components/hero-detail/hero-detail.component.html',
  inputs: ['hero']
})

export class HeroDetailComponent implements OnInit  {
  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams
  ) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
     .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }

  public hero:Hero
}
