import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';

import { PokemonsService } from './pokemons.service';
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemons/detail-pokemon.component.html',
    //providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {
  
    //pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;
  
    constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {}
  
    ngOnInit(): void {
       // this.pokemons = POKEMONS;
  
        let id = +this.route.snapshot.paramMap.get('id');
       this.pokemon = this.pokemonsService.getPokemon(id);
        //for (let i = 0; i < this.pokemons.length; i++) {
            //if (this.pokemons[i].id == id) {
               // this.pokemon = this.pokemons[i];
            //}
        //}
    }
  
    goBack(): void {
        this.router.navigate(['/pokemons']); 
                    // autre methode moins conseillé car il renvoit tout au début, window.history.back();
    }
  
    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }
}