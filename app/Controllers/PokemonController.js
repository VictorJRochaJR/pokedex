import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js"



function draw() {
    let template = "";
    console.log(ProxyState.pokemon)
    ProxyState.pokemon.forEach(p => (template += p.pokemonTemplate))
    document.getElementById("app").innerHTML = template

}


export default class PokemonController {
    constructor() {
        console.log("controller is working")
        this.getPokemon()
        ProxyState.on("pokemon", draw)
    }




    getPokemon() {
        pokemonService.getPokemon()
    }
}


