const Panier = require('../src/panier').Panier;
const Remise = require('../src/remise').Remise;
const expect = require('chai').expect;

describe('Test Fonction Class Panier', function() {
    it('1. Calcul prix total panier', function(done) {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 'pomme_1', 2, 1.5);
        panier.ajouter_article('Orange', 'orange_1', 7, 2.6);
        panier.ajouter_article('Banane', 'banane_1', 2, 3.2);
        panier.ajouter_article('Salade', 'salade_1', 5, 1);

        //Appeler la fonction pour obtenir le résultat réel
        const montantTotal = panier.calculer_montant_total();
        
        //Contenu de la console ( Pour voir les articles)
        console.log("Le contenu du panier actuel ainsi que le prix total du panier : " + montantTotal);
        //Affiche le contenu du panier actuelle ( peut donc être vide ou non )
        for (const articleKey in panier.articles) {
            const article = panier.articles[articleKey];
            console.log(`Article: ${article.nom}, Quantité: ${article.quantite}, Prix unitaire: ${article.prix_unitaire}`);
        }

        //Résultat Total
        expect(montantTotal).to.equal(32.6);
        done();
    });

    it('2. Gestion Stock', function(done) {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 'pomme_1', 2, 1.5);
        panier.ajouter_article('Orange', 'orange_1', 7, 2.6);
        panier.ajouter_article('Banane', 'banane_1', 2, 3.2);
        panier.ajouter_article('Salade', 'salade_1', 5, 1);

        panier.retirer_article('banane_1', 1);

        // Utiliser expect avec le résultat réel (La quantité de Banane doit être 1)
        expect(panier.articles['banane_1']['quantite']).to.equal(1);
        done();
    });

    
    it('3. Vider le panier', function(done) {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 'pomme_1', 2, 1.5);
        panier.ajouter_article('Orange', 'orange_1', 7, 2.6);
        panier.ajouter_article('Banane', 'banane_1', 2, 3.2);
        panier.ajouter_article('Salade', 'salade_1', 5, 1);

        panier.vider_panier();
        console.log("contenu du panier actuelle :")
        //Boucle sur le panier actuelle et est censé être vide car on vient de le vider
        for (const articleKey in panier.articles) {
            const article = panier.articles[articleKey];
            console.log(`Article: ${article.nom}, Quantité: ${article.quantite}, Prix unitaire: ${article.prix_unitaire}`);
        }

        //S'attend à ce qu'il n'y ait aucune clé liée à un article
        expect(Object.keys(panier.articles).length).to.equal(0);
        done();
    });

    it('4. Test Panier Ajout', function(done) {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 'pomme_1', 2, 1.5);
        panier.ajouter_article('Orange', 'orange_1', 7, 2.6);
        panier.ajouter_article('Banane', 'banane_1', 2, 3.2);
        panier.ajouter_article('Salade', 'salade_1', 5, 1);

        // Vérifier que le panier contient ce qui a été ajouté
        expect(panier.articles['pomme_1']['quantite']).to.equal(2);
        expect(panier.articles['orange_1']['quantite']).to.equal(7);
        expect(panier.articles['banane_1']['quantite']).to.equal(2);
        expect(panier.articles['salade_1']['quantite']).to.equal(5);

        done();
    });
    
    it('5. Appliquer la remise sur un article spécifique', function() {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 'pomme_1', 2, 30); // Ajouter 2 articles avec un prix unitaire de 30
        panier.ajouter_article('Orange', 'orange_1', 1, 20); // Ajouter 1 article avec un prix unitaire de 20
    
        const articles = panier.articles; // Récupérer les articles du panier
    
        // Passer les articles à l'instance de Remise
        let remise = new Remise(10, articles);
    
        // Calculer la remise sur l'article 1
        const montantApresRemiseArticle1 = remise.calculer_remise_article('pomme_1', 10);
    
        // Appliquer la remise sur l'article 1
        panier.articles['pomme_1']['prix_unitaire'] = montantApresRemiseArticle1;

        console.log("Prix après la remise sur un article spécifique : " + montantApresRemiseArticle1 + " avec remise de 10%");
    
        expect(panier.calculer_montant_total()).to.equal(74); // Total = (2*27) + 20 = 74 (après remise sur l'article 1)
    });    
});
