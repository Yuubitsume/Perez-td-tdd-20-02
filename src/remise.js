class Remise {
    constructor(pourcentage_remise, articles) {
        this.pourcentage_remise = pourcentage_remise;
        this.articles = articles; // Initialise les articles avec la valeur passée en paramètre
    }

    calculer_remise(montant_total) {
        if (this.pourcentage_remise >= 100) {
            return 0; // Si la remise est supérieure à 100%, retourne 0
        } else {
            const remise = (montant_total * this.pourcentage_remise) / 100;
            const montant_total_remise = montant_total - remise;
            console.log(montant_total_remise);
            return Math.max(remise, 0);
        }
    }

    calculer_remise_article(identifiant_article, pourcentage_remise_article) {
        // Vérifie que la remise est inférieure à 100%
        if (pourcentage_remise_article < 100) {
            const article = this.articles[identifiant_article];
            if (article) {
                const remise = (article['prix_unitaire'] * pourcentage_remise_article) / 100;
                const montant_article_apres_remise = article['prix_unitaire'] - remise;
                article['prix_unitaire'] = montant_article_apres_remise;
                return Math.max(montant_article_apres_remise, 0);
            }
        } else {
            console.log("La remise ne peut pas être supérieure ou égale à 100%.");
        }
        return 0; // Si la remise est invalide ou si l'article n'est pas trouvé, retourne 0
    }
}

module.exports = {
    Remise: Remise
};
