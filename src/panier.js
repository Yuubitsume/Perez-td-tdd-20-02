class Panier {
    constructor() {
        this.articles = {};
    }

    // Modification de la méthode ajouter_article pour accepter un identifiant unique pour chaque article
    ajouter_article(article, identifiant, quantite, prix_unitaire_initial) {
        const prix_unitaire = Math.max(prix_unitaire_initial, 0); // Assurez-vous que le prix unitaire n'est pas inférieur à zéro
        if (prix_unitaire > 0) { // Vérifiez que le prix unitaire est supérieur à zéro avant d'ajouter l'article
            if (identifiant in this.articles) {
                this.articles[identifiant]['quantite'] += quantite;
            } else {
                this.articles[identifiant] = {'nom': article, 'quantite': quantite, 'prix_unitaire': prix_unitaire};
            }
        } else {
            console.log("Le prix de l'article est inférieur ou égal à zéro. L'article n'a pas été ajouté au panier.");
        }
    }

    retirer_article(article, quantite) {
        if (article in this.articles) {
            this.articles[article]['quantite'] -= quantite; // Décrémente la quantité souhaitée
            if (this.articles[article]['quantite'] <= 0) { // Si la quantité est inférieure ou égale à zéro, supprime l'article
                delete this.articles[article];
            }
        }
    }

    vider_panier() {
        this.articles = {}; //Retourne un panier vide
    }

    calculer_montant_total() {
        let total = 0; // Initialisation d'un total à 0
        for (const articleKey in this.articles) { 
            const article = this.articles[articleKey]; // Accéder à l'objet article à partir de la clé
            total += article['quantite'] * article['prix_unitaire']; // Additionner les quantités des articles par leurs prix pour chaque article
        }
        return total;
    }    
}

module.exports = {
    Panier: Panier
};
