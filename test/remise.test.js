const { expect } = require('chai');
const { Remise } = require('../src/remise');

describe('Remise', () => {
    let remise;

        it('devrait retourner le bon montant de remise', () => {
            remise = new Remise(10);
            console.log(remise);
            expect(remise.calculer_remise(40)).to.equal(4); // Pas de remise
        });

        it('devrait retourner 0 si la remise est supérieure à 100%', () => {
            remise = new Remise(110);
            expect(remise.calculer_remise(110)).to.equal(0); // Aucune remise
        });
    });
