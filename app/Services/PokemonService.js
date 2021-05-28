import { PokeAPI } from "./PokemonAxios.js"
import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"

class PokemonService {
    async getPokemon() {
        let res = await PokeAPI.get()
        console.log(res.data)
        ProxyState.pokemon = res.data.results.map(p => new Pokemon(p))
    }
}

export const pokemonService = new PokemonService()