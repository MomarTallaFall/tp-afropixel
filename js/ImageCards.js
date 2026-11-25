export class ImageCards {
    constructor(id, nom, prix, categorie, url) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.categorie = categorie;
        this.url = url;
    }

    render(){
        return `
            <div class="shape_image_card">
                <img class="image_card" src="${this.url}">
                <div>${this.nom}</div>
                <div>${this.prix} CFA</div>
                <div class="div_actions">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        `
    }
}