import  pictures from "../pictures.json" with {type: "json"};
import {ImageCardsList} from "./ImageCardsList.js"

const liste_produits = new ImageCardsList (pictures)
const galerie = document.getElementById("galerie")

galerie.innerHTML += liste_produits.render()