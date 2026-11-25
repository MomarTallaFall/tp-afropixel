import {ImageCards} from "./ImageCards.js"

export class ImageCardsList {
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