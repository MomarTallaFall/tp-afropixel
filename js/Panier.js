export class Panier {
    constructor() {
        this.ImageCards = []
    }

    ajouter(imageCard) {
        this.ImageCards.push(imageCard)
    }

    retirer(imageCard) {
        const index = this.ImageCards.indexOf(imageCard)
        if (index !== -1) this.ImageCards.splice(index, 1)
    }

    total() {
        let total = 0
        for (const imageCard of this.ImageCards) {
            total += Number(imageCard.prix)
        }
        return total
    }

    render() {
        let rendu = ''
        for (const imageCard of this.ImageCards) {
            rendu += `<li>${imageCard.nom} : ${imageCard.prix} CFA</li>`
        }

        return `<ul>${rendu}</ul>`
    }
}