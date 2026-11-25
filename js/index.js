import  pictures from "../pictures.json" with {type: "json"};

class ImageCards {
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

class ImageCardsList {
    constructor(pictures){
        this.ImageCards = []
        for (const picture of pictures) {
            this.ImageCards.push(
                new ImageCards(picture.id, picture.nom, picture.prix, picture.categorie, picture.url)
            )
        }
    }

    render(){
        let rendu = ''
        for (const imageCard of this.ImageCards) {
            rendu += imageCard.render()
        }

        return `<div class="image_card_list">${rendu}</div>`
    }
}

const liste_produits = new ImageCardsList (pictures)
const galerie = document.getElementById("galerie")

galerie.innerHTML += liste_produits.render()