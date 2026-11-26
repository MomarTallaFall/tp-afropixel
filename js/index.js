import pictures from "../pictures.json" with { type: "json" }
import { ImageCardsList } from "./ImageCardsList.js"
import { Panier } from "./Panier.js"

const liste_produits = new ImageCardsList(pictures)
const panier = new Panier()

const galerie = document.getElementById("galerie")
const contenu_panier = document.getElementById("contenu_panier")
const icone_panier = document.getElementById("panier")

function afficherPanier() {
    contenu_panier.innerHTML = `${panier.render()}<div>Total : ${panier.total()} CFA</div>`
}

galerie.innerHTML = liste_produits.render()
afficherPanier()

galerie.addEventListener("click", (event) => {
    const bouton = event.target
    const imageCard = liste_produits.trouver(bouton.dataset.id)

    if (bouton.dataset.action === "ajouter") panier.ajouter(imageCard)
    if (bouton.dataset.action === "retirer") panier.retirer(imageCard)

    afficherPanier()
})

icone_panier.addEventListener("click", () => {
    contenu_panier.hidden = !contenu_panier.hidden
})