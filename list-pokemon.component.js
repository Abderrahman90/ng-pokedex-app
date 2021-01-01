"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemons_service_1 = require("./pokemons.service");
var ListPokemonComponent = /** @class */ (function () {
    //private title: String = " pokémons"; 
    //Data Binding Unidirectionnal 1 way
    //values = ''; on supprime la pptée pour nettoyer le code et on garde que le title dans appComponentHTML
    //private value: String = ''; //ici valeur null c'est à dire à chaque fois on instanciera une nouvelle valeur par exp Jean puis Gabriel
    // age = 19;
    function ListPokemonComponent(router, pokemonsService) {
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.pokemons = null;
    }
    ListPokemonComponent.prototype.ngOnInit = function () {
        this.pokemons = this.pokemonsService.getPokemons(); //à ce niveau la constante POKEMONS n'est pas encore créer donc on créé le fichier dans app appelé mock-pokemons.ts qui va simulé une liste 
    };
    /* onClick (){ //on implémente la méthode dans notre composant
      console.log("Clic!")
    }
    
    //onKey(event: KeyboardEvent){     //cette méthode a pour role d'affecter une nouvelle valeur à la propriétée value
    
    onKey(value: string){
    this.value = 'Bonjour ' + value; // on remplace ce code complexe (<HTMLInputElement>event.target).value;
    } **/
    ListPokemonComponent.prototype.selectPokemon = function (pokemon) {
        alert("vous avez cliqué sur " + pokemon.name);
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    ListPokemonComponent = __decorate([
        core_1.Component({
            selector: 'list-pokemon',
            templateUrl: "./app/pokemons/list-pokemon.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, pokemons_service_1.PokemonsService])
    ], ListPokemonComponent);
    return ListPokemonComponent;
}());
exports.ListPokemonComponent = ListPokemonComponent;
//# sourceMappingURL=list-pokemon.component.js.map