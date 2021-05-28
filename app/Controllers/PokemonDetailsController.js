import { ProxyState } from "../AppState.js"
import { pokemonDetailsService } from "../Services/PokemonDetailsService.js"


function drawDetails() {
    document.getElementById("details").innerHTML = ProxyState.pokemonDetails.detailsTemplate

}



export default class PokemonDetailsController {
    constructor() {
        console.log('Poke Details Controller')
        ProxyState.on('pokemonDetails', drawDetails)
        // drawDetails()
    }

    getPokemonDetails(url) {
        try {

            pokemonDetailsService.getPokemonDetails(url);
        } catch (error) {
            console.error(error)
        }
    }

}

