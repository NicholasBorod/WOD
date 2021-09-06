import {Component, OnInit} from '@angular/core';
import {CharsheetService} from "../charsheet.service";
import {AbilityType} from "./shared/AbilityType";

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  talents: string[] = [];
  skills: string[] = [];
  knowledges: string[] = [];

  constructor(private charsheetService: CharsheetService) { }

  ngOnInit(): void {
    // const abilities = this.charsheetService.getCharsheetById(1).abilities;

    this.talents = this.charsheetService.getAbilitiesByType(AbilityType.Talents);
    this.skills = this.charsheetService.getAbilitiesByType(AbilityType.Skills);
    this.knowledges = this.charsheetService.getAbilitiesByType(AbilityType.Knowledges);
  }

}
