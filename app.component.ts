import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

  
@Component({
  selector: 'pokemon-app',
  templateUrl: `./app/app.component.html`,
}) 
export class AppComponent { // on supprime sa logique interne implents ngOnInit...etc

//private pokemons: Pokemon[] = null;
//private title: String = " pokémons"; //Data Binding Unidirectionnal 1 way
//values = ''; on supprime la pptée pour nettoyer le code et on garde que le title dans appComponentHTML
//private value: String = ''; //ici valeur null c'est à dire à chaque fois on instanciera une nouvelle valeur par exp Jean puis Gabriel
// age = 19;

//ngOnInit(){
   // this.pokemons = POKEMONS; //à ce niveau la constante POKEMONS n'est pas encore créer donc on créé le fichier dans app appelé mock-pokemons.ts qui va simulé une liste 
}

/* onClick (){ //on implémente la méthode dans notre composant
  console.log("Clic!")
}

//onKey(event: KeyboardEvent){     //cette méthode a pour role d'affecter une nouvelle valeur à la propriétée value

onKey(value: string){
this.value = 'Bonjour ' + value; // on remplace ce code complexe (<HTMLInputElement>event.target).value;
} **/

//selectPokemon(pokemon: Pokemon){
  //alert("vous avez cliqué sur " + pokemon.name);
//}
//}
