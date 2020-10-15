describe('Browser tests', function() {
    it('should have the correct title', function () {
        expect(document.title).toBe('Voorbeeld toets');
    });
    it('should have characterset UTF-8', function () {
        expect(document.charset).toBe('UTF-8');
    });
});

describe('voorbeeld.js', function () {
    it('should have one or more undefined variables', function () {
        expect(example.voorbeeld).toBeUndefined();
    });
});