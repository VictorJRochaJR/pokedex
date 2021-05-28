export default class PokemonDetails {
    constructor({ name, weight, id, height, types, user }) {

        this.name = name;
        this.weight = weight;
        this.id = id;
        this.height = height;
        this.types = types;
        this.user = user;
    }

    get detailsTemplate() {
        return `
    <div class = "card shadow">
    <div class = "card-body">
    <h3 class = "card-title>
    <span>${this.name}</span>
    <span>${this.weight}</span>
    <span>${this.height}</span>
    <span>${this.types}</span>
    </div>
    </div>
    </div>


`
    }


}