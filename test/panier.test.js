const Panier = require('../src/panier').Panier;
const Remise = require('../src/remise').Remise;
const expect = require('chai').expect;

describe('Test Fonction Class Panier', function() {
    it('1. Calcul prix total panier', function(done) {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 2, 1.5);
        panier.ajouter_article('Orange', 7, 2.6);
        panier.ajouter_article('Banane', 2, 3.2);
        panier.ajouter_article('Salade', 5, 1);

        //Appeler la fonction pour obtenir le résultat réel
        const montantTotal = panier.calculer_montant_total();

        //Résultat Total
        expect(montantTotal).to.equal(32.6);
        done();
    });

    it('2. Gestion Stock', function(done) {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 2, 1.5);
        panier.ajouter_article('Orange', 7, 2.6);
        panier.ajouter_article('Banane', 2, 3.2);
        panier.ajouter_article('Salade', 5, 1);

        panier.retirer_article('Banane', 1);

        // Utiliser expect avec le résultat réel (La quantité de Banane doit être 1)
        expect(panier.articles['Banane']['quantite']).to.equal(1);
        done();
    });


    it('3. Vider le panier', function(done) {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 2, 1.5);
        panier.ajouter_article('Orange', 7, 2.6);
        panier.ajouter_article('Banane', 2, 3.2);
        panier.ajouter_article('Salade', 5, 1);

        panier.vider_panier();

        //S'attends qu'il n'y ait aucune clés liés à un article
        expect(Object.keys(panier.articles).length).to.equal(0);
        done();
    });

    it('4. Test Panier Ajout', function(done) {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 2, 1.5);
        panier.ajouter_article('Orange', 7, 2.6);
        panier.ajouter_article('Banane', 2, 3.2);
        panier.ajouter_article('Salade', 5, 1);

        // Vérifier que le panier contient ce qui a été ajouté
        expect(panier.articles['Pomme']['quantite']).to.equal(2);
        expect(panier.articles['Orange']['quantite']).to.equal(7);
        expect(panier.articles['Banane']['quantite']).to.equal(2);
        expect(panier.articles['Salade']['quantite']).to.equal(5);

        done();
    });
    it('5. devrait appliquer la remise sur un article spécifique', () => {
        let panier = new Panier();
        panier.ajouter_article('Pomme', 2, 30); // Ajouter 2 articles avec un prix unitaire de 30
        panier.ajouter_article('Orange', 1, 20); // Ajouter 1 article avec un prix unitaire de 20

        let remise = new Remise(); // Créer une instance de Remise avec une remise de 10%
        const montantApresRemiseArticle1 = remise.calculer_remise_article('Pomme', 10); // Calculer la remise sur l'article Pomme

        // Vérifier le montant de l'article après remise
        expect(montantApresRemiseArticle1).to.equal(27); // Prix unitaire de l'article Pomme après remise à 27
    });
});
