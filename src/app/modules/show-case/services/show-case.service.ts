import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    //TODO this.http.get('api')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
