import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Pokemon from "./Models/Pokemon.js"


class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  /** @type {Pokemon[]}*/
  pokemon = []

  pokemonDetails = null

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    console.log('setting', prop)
    return true
  }
})
