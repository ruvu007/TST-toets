describe('Titel en charset testen', function() {
    it('Moet de juiste titel verbeteringen laten zien en de juiste charset', function () {
        expect(document.title).toBe('Verbeteringen');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Kijken of unitTest.item hetzelfde is als item', function () {
    it('moet hetzelfde zijn als item', function () {
        expect(unitTest.item).toBe('item');
    });
});

describe('Kijken of unitTest.beschrijving hetzelfde is als beschrijving', function () {
    it('moet hetzelfde zijn als item', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});

describe('Kijken of unitTest.boodschap hetzelfde is als hallo', function () {
    it('moet hetzelfde zijn als hallo', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});

describe('Kijken of unitTest.nummer hetzelfde is als 2', function () {
    it('moet hetzelfde zijn als 2', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});