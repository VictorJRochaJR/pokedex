export default class PokemonDetails {
    constructor({ name, weight, id, height, types, img, user }) {

        this.name = name;
        this.weight = weight;
        this.id = id;
        this.height = height;
        this.types = types;
        this.user = user;
        this.img = img || sprites.front_shiny;

    }

    get detailsTemplate() {
        return `
    <div class = "card">
    <div class = "card-body">
    <h3 class = "card-title>
    <span>${this.name}</span>
    <span>${this.weight}</span>
    <span>${this.height}</span>
    <span>${this.Types}</span>
    <img>${this.img}</img>
    </div>
    </div>
    </div>
`
    }
    get Types() {
        let template = "";

        this.types.forEach((t) => {
            template += t.type.name + " ";
        });
        return template;
    }
}

