"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-app',
            templateUrl: "./app/app.component.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map