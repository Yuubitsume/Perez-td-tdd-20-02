const { expect } = require('chai');
const { Remise } = require('../src/remise');

describe('Remise', () => {
    const articles = {
        'pomme_1': {'nom': 'Pomme', 'quantite': 2, 'prix_unitaire': 30},
        'orange_1': {'nom': 'Orange', 'quantite': 1, 'prix_unitaire': 20}
    };
        it('devrait retourner le bon montant de remise', () => {
            const remise = new Remise(10, articles);
            expect(remise.calculer_remise(40)).to.equal(4); // Pas de remise
        });

        it('devrait retourner 0 si la remise est supérieure à 100%', () => {
            const remise = new Remise(110, articles);
            expect(remise.calculer_remise(110)).to.equal(0); // Aucune remise
        });
    });
