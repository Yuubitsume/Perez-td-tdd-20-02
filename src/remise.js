class Remise {
    constructor(pourcentage_remise) {
         this.pourcentage_remise = pourcentage_remise;
         // Assurez-vous que le pourcentage de remise est compris entre 0% et 100%
    }
       calculer_remise(montant_total) {
           if (this.pourcentage_remise >= 100) {
               return 0; // Si la remise est supérieure à 100%, retourne 0
           } else {
               const remise = (montant_total * this.pourcentage_remise) / 100;
               const montant_total_remise = montant_total - remise
               console.log(montant_total_remise)
               return Math.max(remise, 0);

           }
       }
      calculer_remise_article(identifiant_article, pourcentage_remise_article) {
          const article = this.articles[identifiant_article];
          if (article) {
              const remise = (article['prix_unitaire'] * pourcentage_remise_article) / 100;
              const montant_article_apres_remise = article['prix_unitaire'] - remise;
              article['prix_unitaire'] = montant_article_apres_remise;
              return Math.max(montant_article_apres_remise, 0);
          }
          return 0; // Si l'article n'est pas trouvé, retourne 0
      }
}

module.exports = {
    Remise: Remise
};