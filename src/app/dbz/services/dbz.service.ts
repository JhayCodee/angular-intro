import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 100000,
      img: 'https://sm.ign.com/ign_latam/screenshot/default/dragon-ball-super-trunks-manga_6ndp.jpg'
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000000,
      img: 'https://pm1.aminoapps.com/6502/062359c59141de580f8fd2938bebdab13549be66_hq.jpg'
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000000,
      img: 'https://www.mundodeportivo.com/alfabeta/hero/2022/06/dragon-ball-super-vegeta-ultra-ego-.png?width=768&aspect_ratio=16:9&format=nowebp'
    }
  ];

  addCharacter(character: Character): void {

    const newCharacter = {
      ...character,
      id: uuid()
    }

    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
