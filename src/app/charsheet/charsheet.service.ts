import { Injectable } from '@angular/core';
import {AbilityType} from "./abilities/shared/AbilityType";

@Injectable({
  providedIn: 'root'
})
export class CharsheetService {

  constructor() { }

  getCharsheetById(id: number) {
    return {
      abilities: [
        "Talents",
        "Skills",
        "Knowledges"
      ]
    }
  }

  getAbilitiesByType(type: AbilityType): string[]{
    switch (type){
      case AbilityType.Talents:
        return [
          'Alertness',
          'Athletics',
          'Awareness',
          'Brawl',
          'Dodge',
          'Empathy',
          'Expression',
          'Intimidation',
          'Leadership',
          'Streetwise',
          'Subterfuge'
        ];
      case AbilityType.Skills:
        return [
          'Animal Ken',
          'Crafts',
          'Drive',
          'Etiquette',
          'Firearms',
          'Larceny',
          'Melee',
          'Insight',
          'Performance',
          'Stealth',
          'Survival'
        ];
      case AbilityType.Knowledges:
        return [
          'Academics',
          'Computer',
          'Finance',
          'Investigation',
          'Law',
          'Medicine',
          'Occult',
          'Politics',
          'Science',
          'Technology'
        ];
      default:
        throw new Error(`Implement logic for new Ability type : ${type}`)
    }
  }
}
