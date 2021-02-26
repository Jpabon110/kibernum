const {
    searchingSqr,
    newPrimeSqr,
    findPrimeSquare,
  } = require('./js/functions')



test('Must be a properly value', () => {
    const array = [3,2];
    const properly = 15;
    const newProperly = 100;
    const arrayTwo = [ 7, 5, 3, 2 ];

    expect(searchingSqr(properly)).toEqual(array)
    expect(searchingSqr(newProperly)).toEqual(arrayTwo)
});

test('Enter value for principal function', () => {
    const properly = 15;
    const array = [13,11,7,5,3,2];

    expect(newPrimeSqr(properly)).toEqual(array)
});

test('Validate function on prime sqrt result', () => {
    const properly = 0;
    expect(findPrimeSquare(properly)).toBe(false)
});