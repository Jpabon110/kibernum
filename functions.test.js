const validations = require('./js/functions')


test('Must be a properly value', () => {
    const array = [3,2];
    const expected = 'hola';
    const properly = 15;
    const greaterEqual = 2;
    expect(greaterEqual).toBeGreaterThanOrEqual(greaterEqual)
    expect(properly).toEqual(expect.not.stringContaining(expected))
    expect(validations.searchingSqr(properly)).toEqual(array)
});