import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls:['pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input({required: true}) pokemon!: Pokemon;
  types!: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router) {
  }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList()
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type)
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit() {
    console.log('Submit form')
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    } else if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }
}

