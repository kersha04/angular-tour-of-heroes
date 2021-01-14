import { Injectable } from '@angular/core';
import { Hero } from '../models';
import { HEROES } from '../mock/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    const aHero: Hero = HEROES.find(hero => hero.id === id);
    this.messageService.add(`HeroService: fetched hero ${aHero.id}: ${aHero.name}`);
    return of(aHero);
  }
}
