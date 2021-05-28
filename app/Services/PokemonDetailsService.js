import { PokeAPI } from "./PokemonAxios.js";
import { ProxyState } from "../AppState.js";
import PokemonDetails from "../Models/PokemonDetails.js";

class PokemonDetailsService {
    constructor() {

    }
    async getPokemonDetails(url) {
        let res = await PokeAPI.get(url);
        ProxyState.pokemonDetails = new PokemonDetails(res.data);
        // ProxyState.pokemonDetails = ProxyState.pokemonDetails
        console.log(ProxyState.pokemonDetails);
    }
}





export const pokemonDetailsService = new PokemonDetailsService();